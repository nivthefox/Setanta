---
layout: single
title: Setanta 101
toc: true
---

## Matamaitic

Is féidir le Setanta matamaitic a dhéanamh.
Clóscríobh `scríobh(2 * 3)` isteach san eagarthóir, cliceáil ar an gcnaipe tosaigh agus féach ar an gconsól. Beidh `6` scríofa ansin.
![6](/assets/images/teagaisc/teagaisc06.png)

Féach cad a scríobhann an ríomhchlár seo

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">scríobh</span>(<span class="m">2</span> <span class="o">+</span> <span class="m">2</span>)
<span class="n">scríobh</span>(<span class="m">4</span> <span class="o">*</span> (<span class="m">2</span> <span class="o">+</span> <span class="m">3</span>))
<span class="n">scríobh</span>(<span class="m">5</span> <span class="o">==</span> <span class="m">5</span>)
<span class="n">scríobh</span>(<span class="m">5</span> <span class="o">==</span> <span class="m">6</span>)
<span class="n">scríobh</span>(<span class="m">5</span> <span class="o">!=</span> <span class="m">6</span>)</code></pre>
</div>
</div>

Tá sé seo sa chonsól.


<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="m">4</span>
<span class="m">20</span>
<span class="m">fíor</span>
<span class="m">bréag</span>
<span class="m">fíor</span></code></pre>
</div>
</div>

Go háirithe, tabhair faoi deara gur déanann `==` agus `!=` comparáid idir uimhreacha (agus rudaí eile).

REMOVEME*
## Téacs

Is féidir leat téacs a scríobh i do ríomchláir freisin, chonaiceamar é seo roimhe seo leis an ríomhchlár simplí
<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">scríobh</span>(<span class="s">&#x27;Dia duit&#x27;</span>)</code></pre>
</div>
</div>

Cruthaíonn tú téacs le dhá `'`. Mar shampla
<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="s">&#x27;Dia duit&#x27;</span>
<span class="s">&#x27;Is mise Eoin&#x27;</span></code></pre>
</div>
</div>

Is féidir leat `+` a úsáid chun téacs a chuir le chéile

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">scríobh</span>(<span class="s">&#x27;Dia duit&#x27;</span> <span class="o">+</span> <span class="s">&#x27;, &#x27;</span> <span class="o">+</span> <span class="s">&#x27;Eoin is ainm dom&#x27;</span>)</code></pre>
</div>
</div>

Scríobhann sé seo `Dia duit, Eoin is ainm dom`.

## Liostaí

Cruthaigh liosta i Setanta le `[` agus `]`, mar shampla:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code>[<span class="m">1</span><span class="p">,</span> <span class="m">2</span><span class="p">,</span> <span class="m">3</span>]
[<span class="s">&#x27;An Dagda&#x27;</span><span class="p">,</span> <span class="s">&#x27;Lugh&#x27;</span><span class="p">,</span> <span class="s">&#x27;Mór-Ríoghain&#x27;</span><span class="p">,</span> <span class="s">&#x27;Nuada&#x27;</span>]</code></pre>
</div>
</div>

Tá liostaí an chumhachtach. Tá uimhir ag gach suíomh i liosta. Is féidir leat ball liosta a fháil má bhfuil uimhir shuíomh an bhaill agat. Tugaimid an uimhir 0 ar an chéad bhall den liosta, an uimhir 1 ar an dara ball, an uimhir 2 ar an tríú ball etc.

Má tá uimhir an shuíomh agat, is féidir leat `[` agus `]` a úsáid arís chun an ball a fháil. Mar shampla:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code>[<span class="s">&#x27;Dia&#x27;</span><span class="p">,</span> <span class="s">&#x27;Duit&#x27;</span>][<span class="m">0</span>] <span class="o">==</span> <span class="s">&#x27;Dia&#x27;</span>
[<span class="s">&#x27;Dia&#x27;</span><span class="p">,</span> <span class="s">&#x27;Duit&#x27;</span>][<span class="m">1</span>] <span class="o">==</span> <span class="s">&#x27;Duit&#x27;</span>

[<span class="m">100</span><span class="p">,</span> <span class="m">200</span><span class="p">,</span> <span class="m">300</span><span class="p">,</span> <span class="m">400</span>][<span class="m">2</span>] <span class="o">==</span> <span class="m">300</span></code></pre>
</div>
</div>

Is féidir leat `+` a úsáid le dhá liosta chun liosta nua dhéanamh.

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code>[<span class="m">1</span><span class="p">,</span> <span class="m">2</span><span class="p">,</span> <span class="m">3</span>] <span class="o">+</span> [<span class="m">4</span><span class="p">,</span> <span class="m">5</span><span class="p">,</span> <span class="m">6</span>] <span class="o">==</span> [<span class="m">1</span><span class="p">,</span> <span class="m">2</span><span class="p">,</span> <span class="m">3</span><span class="p">,</span> <span class="m">4</span><span class="p">,</span> <span class="m">5</span><span class="p">,</span> <span class="m">6</span>]</code></pre>
</div>
</div>

## Tráchtanna

Má scríobhann tú an siombail `>--` i do ríomhchlár, is trácht é aon rud a scríobhann tú tar éis é sin ar an líne chéanna, agus ní cuid den ríomhchlár é. Mar shampla

<div class="highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">scríobh</span>(<span class="s">&#x27;Dia duit&#x27;</span>) <span class="c">&gt;-- Is féidir liom aon rud a scríobh anseo!
</span><span class="c">&gt;-- Nó anseo freisin.</span></code></pre>
</div>
</div>

Tá tráchtanna an úsáideach mar ceadaíonn sé dúinn nótaí a scríobh inár gcuid ríomhchláir.

## Athróga

Úsáideann tú **athróga** chun uimhreacha, liostaí nó aon rud a stóráil. Cuireann tú rud éigin san athróg agus níos déanaí is féidir leat é a fháil ar ais. Ban triail as é seo mar shampla:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">x</span> := <span class="m">10</span>
<span class="n">scríobh</span>(<span class="n">x</span> <span class="o">*</span> <span class="m">2</span>)</code></pre>
</div>
</div>

Scríobhann sé `20` amach sa chonsól. Chuir an chéad líne `10` isteach i `x` agus d'úsáid an dara líne é.

Sá ríomhchlár seo is **athróg** é `x`. Is féidir linn athróga a úsáid i ngach áit a úsáidimid uimhreacha, téacs nó aon rud.

Cruthaímid athróg nua le `:=`

Táimid in ann an luach san athróg `x` a athrú le `=`.

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">x</span> := <span class="m">10</span>
<span class="n">x</span> = <span class="m">20</span></code></pre>
</div>
</div>

Anois tá `x` cothrom le 20.

Nuair a úsáideann tú `=` no `:=`, ríomhann Setanta an téarma ar dheis, agus ansin cuireann sé an toradh isteach san athróg ar chlé. Mar gheall ar seo, is féidir linn an athróg céanna a úsáid ar dheis agus ar chlé. Mar shampla:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">x</span> := <span class="m">1</span>
<span class="n">x</span> = <span class="n">x</span> <span class="o">+</span> <span class="m">2</span>
<span class="n">scríobh</span>(<span class="n">x</span>)</code></pre>
</div>
</div>

![A trí](/assets/images/teagaisc/tri.png)

Cad a scríobhann an ríomhchlár seo?

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">x</span> := <span class="m">10</span>
<span class="n">y</span> := <span class="m">2</span> <span class="o">*</span> <span class="n">x</span> <span class="c">&gt;-- Cruthaigh athróg nua &#x27;y&#x27; le luach 20
</span><span class="n">x</span> = <span class="n">y</span> <span class="o">+</span> <span class="n">x</span> <span class="c">&gt;-- Athraigh an athróg &#x27;x&#x27; go &#x27;x + y&#x27; = 10 + 20 = 30
</span><span class="n">scríobh</span>(<span class="n">x</span>)</code></pre>
</div>
</div>

Is féidir linn athróga a úsáid chun rudaí a tarraingt ar an stáitse freisin. Cuir an cód a leanas san eagarthóir:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">mo_dhath</span> := <span class="s">&#x27;dearg&#x27;</span> <span class="c">&gt;-- Athraigh an athróg seo chun dath na ciorcail a athrú.
</span>
<span class="n">dath</span><span class="o">@</span><span class="n">stáitse</span>(<span class="n">mo_dhath</span>)

<span class="c">&gt;-- Cruthaigh na athróga &#x27;x&#x27;, &#x27;y&#x27;, agus &#x27;ga&#x27;
</span><span class="n">x</span> := <span class="m">100</span>
<span class="n">y</span> := <span class="m">100</span>
<span class="n">ga</span> := <span class="m">40</span>

<span class="n">ciorcal</span><span class="o">@</span><span class="n">stáitse</span>(<span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">ga</span>) <span class="c">&gt;-- Tarraing an chéad chiorcal
</span>
<span class="n">x</span> = <span class="n">x</span> <span class="o">+</span> <span class="m">100</span> <span class="c">&gt;-- Athraigh &#x27;x&#x27; go 200
</span><span class="n">y</span> = <span class="n">y</span> <span class="o">+</span> <span class="m">100</span> <span class="c">&gt;-- Athraigh &#x27;y&#x27; go 200
</span><span class="n">ga</span> = <span class="n">ga</span> <span class="o">*</span> <span class="m">2</span> <span class="c">&gt;-- Athraigh &#x27;ga&#x27; go 80
</span>
<span class="n">ciorcal</span><span class="o">@</span><span class="n">stáitse</span>(<span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">ga</span>)</code></pre>
</div>
</div>

![Dhá ciorcal](/assets/images/teagaisc/dhaciorcal.gif)

## Ag athrú liostaí

Is féidir linn ball de liosta a athrú le `=` freisin. Mar shampla:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">l</span> := [<span class="m">1</span><span class="p">,</span> <span class="m">2</span><span class="p">,</span> <span class="m">3</span>]
<span class="n">l</span>[<span class="m">0</span>] = <span class="m">4</span>
<span class="n">scríobh</span>(<span class="n">l</span>)</code></pre>
</div>
</div>

![Liosta athraithe](/assets/images/teagaisc/liostaathru.png)

Tá an chéad ball den liosta athraithe!

## Anois
D'fhoghlaim tú a lán rudaí nua, téigh go dtí an [chéad leathanach eile](/gaeilge/04-ma-lub) chun foghlaim faoi `má` agus lúba.
