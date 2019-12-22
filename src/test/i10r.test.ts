import * as Checks from "../../src/checks";
import { Environment } from "../../src/env";
import { Parser } from "../../src/gen_parser";
import { Interpreter } from "../../src/i10r";
import { Value } from "../../src/values";

test("test isEqual", () => {
    interface TC { a: Value; b: Value; eq: boolean; }
    const cases: TC[] = [
        {a : 3, b : 3, eq : true},
        {a : null, b : 0, eq : false},
        {a : null, b : false, eq : false},
        {a : null, b : null, eq : true},
        {a : false, b : true, eq : false},
        {a : false, b : false, eq : true},
        {a : true, b : true, eq : true},
        {a : [3, false, null], b : [3, false, null], eq : true},
        {a : [[], [1, 2, 3]], b : [[], [1, 2, 3]], eq : true},
        {a : [[], []], b : [[]], eq : false},
    ];
    for (const c of cases) {
        expect(Checks.isEqual(c.a, c.b)).toEqual(c.eq);
    }
});

test("test expressions", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {inp : "12 + 3*5", exp : 27},
        {inp : "12 + 3*5 == 27", exp : true},
        {inp : "12-12-12", exp : -12},
        {inp : "12*2/3", exp : 8},
        {inp : "1 <= 0", exp : false},
        {inp : "1 >= 0", exp : true},
        {inp : "big > small", exp : true, env: Environment.from([["big", 100], ["small", 1]])},
        {inp : "x*x + y*y - z*z", exp : 0, env: Environment.from([["x", 3], ["y", 4], ["z", 5]])},
        {inp : "fíor == fíor", exp: true},
        {inp : "fíor == breag", exp: false},
        {inp : "fíor & fíor != breag", exp: true},
        {inp : "fíor | breag == 5 >= 5", exp: true},
        {inp : "neamhní == neamhní", exp: true},
        {inp : "neamhní == fíor", exp: false},
        {inp : "neamhní == breag", exp: false},
        {inp : "neamhní == 0", exp: false},
        {inp : "neamhní == 1", exp: false},
        {inp : "[1,2,3] == [1,2,3]", exp: true},
        {inp : "[1,2,4] == [1,2,3]", exp: false},
        {inp : "[] == [1,2,3]", exp: false},
        {inp : "[1,2,3][0]", exp: 1},
        {inp : "[1,[1,2],3][1]", exp: [1, 2]},
        {inp : "-x", exp: -2, env : Environment.from([["x", 2]])},
        {inp : "-x[0]", exp: -2, env : Environment.from([["x", [2]]])},
        {inp : "!fíor", exp: false},
        {inp : "!breag", exp: true},
        {inp : "fad('abc')", exp: 3},
        {inp : "'abc'[0]", exp: "a"},
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.matchExpr(0);
        expect(res).not.toBeNull();
        try {
            const got = await i.evalExpr(res!, i.global);
            expect(got).toEqual(c.exp);
        } catch (e) {
            console.log(c.inp);
            throw e;
        }
    }
});

test("test assign", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            exp : 12,
            inp : `res := 12`,
        },
        {
            exp : 169,
            inp : `x := 6
            y := 2*x
            y = y+1
            res := y*y`,
        },
        {
            exp : 169,
            inp : `máx := 6
            fíory := 2*máx
            fíory = fíory+1
            res := fíory*fíory`,
        },
        {
            env: Environment.from([["x", 10]]),
            exp : 113,
            inp : `res := x
            10*10-40/3
            res = res*res + res + 3`,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test if stmt", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            exp : 8,
            inp : `
            res := 6
            má res > 5
                res = res+2`,
        },
        {
            exp : 8,
            inp : `má 5 == 5 { 5 }
            res := 6
            má res > 5
                res = res+2`,
        },
        {
            exp : 10,
            inp : `
            x := 6
            res := 10
            má x < 5
                x = x + 2
            nó {
                res := 100
            }`,
        },
        {
            exp : 100,
            inp : `
            res := 6
            má res < 5 {
                res = res + 2
            } nó {
                res = 100
            }`,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        if (res.err) {
            console.log(c);
        }
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test nuair a loops", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            exp : 10,
            inp : `
            res := 0
            nuair a res < 10
                res = res + 1`,
        },
        {
            exp : 100,
            inp : `
            cnt := 0
            i := 0
            nuair a i < 10 {
                j := 0
                nuair a j < 10 {
                    j = j + 1
                    cnt = cnt + 1
                }
                i = i + 1
            }
            res := cnt`,
        },
        {
            exp : 10,
            inp: `
            res := 0
            nuair a fíor {
                res = res + 1
                má res == 10
                    bris
            }`,
        },
        {
            exp : 25,
            inp: `
            res := 0
            i := 0
            nuair a i < 10 {
                i = i + 1
                má i % 2 == 0 {
                    chun cinn
                }
                res = res + i
            }`,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test le idir loops", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            exp : 10,
            inp : `
            res := 0
            le i idir (0, 10)
                res = res + 1`,
        },
        {
            exp : 450,
            inp : `
            res := 0
            le i idir (0,10)
                le i idir ( 0 , 10 )
                    res = res + i `,
        },
        {
            exp : 25,
            inp : `
            >-- Comhair na uimhreacha príomha
            res := 1
            le i idir(3, 100) {
                príomha := fíor
                le j idir(2, i) {
                    má j * j > i
                        bris
                    má i % j == 0 {
                        príomha = breag
                        bris
                    }
                }
                má príomha
                    res = res + 1
            }`,
        },
        {
            exp : 762,
            inp : `
            res := 0
            le x idir (0, 20) {
                le i idir (0, x) {
                    má i % 3 == 0
                        chun cinn >-- Lean ar aghaidh
                    res = res + i
                }
            }`,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test function calls", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            env : Environment.from([
                ["sum", {
                    ainm : "sum",
                    arity: () => 2,
                    call: async (args) => {
                        return (args[0] as number) + (args[1] as number);
                    },
                }],
            ]),
            exp : 42,
            inp : `res := sum(12*3, 4+2)`,
        },
        {
            env : Environment.from([
                ["sum", {
                    ainm: "sum",
                    arity: () => 2,
                    call: async (args) => {
                        return (args[0] as number) + (args[1] as number);
                    },
                }],
                ["square", {
                    ainm : "square",
                    arity: () => 1,
                    call: async (args) => {
                        return (args[0] as number) * (args[0] as number);
                    },
                }],
            ]),
            exp : 0,
            inp : `res := sum(square(3), square(4)) - square(5)`,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test function definitions", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            exp : 45,
            inp : `
            res := 0
            gníomh addToRes(x) {
                res = res + x
            }
            le i idir (1, 10)
                addToRes(i)
            `,
        },
        {
            exp : 10,
            inp : `
            res := 0
            gníomh recurse(acc, d) {
                má d == 0 {
                    res = acc
                } nó {
                    recurse(acc + 1, d-1)
                }
            }
            recurse(0, 10)
            `,
        },
        {
            exp : 55,
            inp : `
            res := 0
            gníomh recurse(d) {
                val := d
                má d != 0 {
                    recurse(d-1)
                }
                res = res + val
            }
            recurse(10)
            `,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test toradh", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            exp: 25,
            inp: `
            gníomh sq(x) {
                toradh x * x
            }
            gníomh sm(a, b) {
                toradh a + b
            }
            res := sm(sq(3), sq(4))
            `,
        },
        {
            exp: 4,
            inp: `
            >-- Feidhm Ackermann --<
            gníomh A(m, n) {
                má m == 0
                    toradh n + 1
                má m > 0 & n == 0
                    toradh A(m - 1, 1)
                toradh A(m - 1, A(m, n - 1))
            }
            res := A(1, 2)
            `,
        },
        {
            exp: null,
            inp: `
            gníomh f(x) { }
            res := f(3)`,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test postfix ops", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            exp: 3,
            inp : `
                gníomh glf() {
                    gníomh i(x) {
                        toradh [x]
                    }
                    toradh i
                }
                res := glf()(3)[0]
            `,
        },
        {
            exp: [2, 4],
            inp : `
                gníomh glf(x) {
                    gníomh i() {
                        toradh [x,2*x]
                    }
                    toradh i
                }
                ls := [glf(1), glf(2), glf(3)]
                res := ls[1]()
            `,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test arrays", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            exp: [0, 1, 2],
            inp : `
            res := [0,0,0]
            le i idir (0, 3) {
                res[i] = i
            }
            `,
        },
        {
            exp: 3,
            inp : `
            res := fad([0,0,0])
            `,
        },
        {
            exp: 0,
            inp : `
            res := fad([])
            `,
        },
        {
            exp: 18,
            inp : `
            arr := [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]
            le i idir (0, 3)
                le j idir(0, 3)
                    arr[i][j] = i + j
            res := 0
            le i idir (0, 3)
                le j idir (0, 3)
                    res = res + arr[i][j]
            `,
        },
        {
            exp: [1, 2, 3, 4, 5, 6],
            inp : `
            lsa := [1,2,3]
            lsb := [4,5,6]
            res := lsa + lsb
            lsa[0] = 0
            lsb[0] = 0
            `,
        },
        {
            exp: [1, 2, 3, 1, 2, 3],
            inp : `
            ls := [1,2,3]
            res := ls*2
            ls[1] = 1
            `,
        },
        {
            exp: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
            inp : `
            ls := [1,2,3]
            res := (ls*2)+(ls+ls)
            `,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test obj lookups", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            env : Environment.from([
                ["b", { ainm: "b", getAttr: (s: string) => s === "a" ? true : null }],
            ]),
            exp : true,
            inp : "res := a@b",
        },
        {
            env : Environment.from([
                ["b", { ainm: "b", getAttr: (s: string) => s === "a" ? true : null }],
            ]),
            exp : null,
            inp : "res := b@b",
        },
        {
            env : Environment.from([
                ["c", {
                    ainm: "c", getAttr: (s: string) => s === "b" ?
                        {
                            ainm: "",
                            getAttr: (at: string) => at === "a" ? {
                                ainm: "",
                                arity: () => 0,
                                call: (args: Value[]): Promise<Value> => {
                                    return Promise.resolve("0");
                                },
                            } : null,
                        }
                    : null,
                }],
            ]),
            exp : "0",
            inp : "res := a@b@c()[0]",
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});

test("test creatlach stmt", async () => {
    interface TC { inp: string; exp: Value; env?: Environment; }
    const cases: TC[] = [
        {
            exp: 25,
            inp: `
            creatlach A {
                gníomh B(x) {
                    toradh x*x
                }
            }
            a := A()
            res := B@a(5)`,
        },
        {
            exp: "ceart",
            inp: `
            creatlach A {
                gníomh B() {
                    creatlach C {
                        gníomh D() {
                            toradh 'ceart'
                        }
                    }
                    toradh C()
                }
            }
            res := D@(B@(A())())()
            `,
        },
        {
            exp: 25,
            inp: `
            creatlach A {
                gníomh a(x) {
                    toradh x * x
                }
                gníomh b(a, b) {
                    toradh a@seo(a) + a@seo(b)
                }
            }
            a := A()
            res := b@a(3, 4)
            `,
        },
        {
            exp: 25,
            inp: `
            creatlach a {
                gníomh cearn(x) {
                    toradh x * x
                }
            }
            creatlach b ó a {
                gníomh bearna (a, b) {
                    toradh cearn@seo(a) + cearn@seo(b)
                }
            }
            res := bearna@(b())(3, 4)
            `,
        },
        {
            exp: 2,
            inp: `
            creatlach a {
                gníomh tst(x) {
                    toradh x + 1
                }
            }
            creatlach b ó a {
                gníomh tst (x) {
                    toradh x - 1
                }
            }
            res := tst@(b())(3)
            `,
        },
        {
            exp: 3,
            inp: `
            creatlach a {
                gníomh tst(x) {
                    toradh x + 1
                }
            }
            creatlach b ó a {
                gníomh tst (x) {
                    toradh x - 1
                }
                gníomh b() {
                    toradh tst@seo(4)
                }
            }
            res := b@(b())()
            `,
        },
    ];
    for (const c of cases) {
        const i = new Interpreter();
        if (c.env) {
            i.global = c.env;
        }
        const p = new Parser(c.inp);
        const res = p.parse();
        expect(res.err).toBeNull();
        expect(res.ast).not.toBeNull();
        await i.interpret(res.ast!);
        expect(i.global.get("res")).toEqual(c.exp);
    }
});
