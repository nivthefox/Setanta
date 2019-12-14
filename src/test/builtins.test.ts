import { Value } from '../../src/values';
import { Interpreter } from '../../src/i10r';
import { Parser } from '../../src/gen_parser';
import { Environment } from '../../src/env';

test('test fad', () => {
    interface tc { inp: string, exp: Value}
    const cases : tc[] = [
        { inp: 'fad([])', exp : 0},
        { inp: 'fad([1])', exp : 1},
        { inp: 'fad([1,2,3,4,5])', exp : 5}
    ];
    for(let c of cases){
        const i = new Interpreter();
        const p = new Parser(c.inp);
        const res = p.matchExpr(0);
        expect(res).not.toBeNull();
        const got = i.evalExpr(res!);
        expect(got).toEqual(c.exp);
    }
});

test('test roinn', () => {
    interface tc { inp: string, exp: Value}
    const cases : tc[] = [
        { inp: "roinn('a b c', ' ')", exp : ['a','b','c']},
        { inp: "roinn('a,b,c', ' ')", exp : ['a,b,c']},
        { inp: "roinn('a,b,c' ,',')", exp : ['a','b','c']},
        { inp: "roinn('a', '')", exp : ['a']},
        { inp: "roinn('', ' ')", exp : ['']},
    ];
    for(let c of cases){
        const i = new Interpreter();
        const p = new Parser(c.inp);
        const res = p.matchExpr(0);
        expect(res).not.toBeNull();
        const got = i.evalExpr(res!);
        expect(got).toEqual(c.exp);
    }
});

test('test cuid', () => {
    interface tc { inp: string, exp: Value}
    const cases : tc[] = [
        { inp: "cuid('abc', 0, 2)", exp : 'ab'},
        { inp: "cuid([1,2,3], 0, 2)", exp : [1, 2]},
        { inp: "cuid([1,2,3], 0, 0)", exp : []},
        { inp: "cuid([1,2,3], 0, -1)", exp : [1, 2]},
        { inp: "cuid([1,2,3], 0, 3)", exp : [1, 2, 3]},
        { inp: "cuid([1,2,3], 0, 4)", exp : [1, 2, 3]},
    ];
    for(let c of cases){
        const i = new Interpreter();
        const p = new Parser(c.inp);
        const res = p.matchExpr(0);
        expect(res).not.toBeNull();
        const got = i.evalExpr(res!);
        expect(got).toEqual(c.exp);
    }
});