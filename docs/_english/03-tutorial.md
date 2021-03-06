---
layout: single
title: Setanta 101
toc: true
---

## Maths

Setanta can do maths. Type `scríobh(2*3)` into the editor, click start, and look at the console. `6` will be written there.
![6](/assets/images/teagaisc/teagaisc06.png)

Look what this program writes.

<div class="highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">scríobh</span>(<span class="m">2</span> <span class="o">+</span> <span class="m">2</span>)
<span class="n">scríobh</span>(<span class="m">4</span> <span class="o">*</span> (<span class="m">2</span> <span class="o">+</span> <span class="m">3</span>))
<span class="n">scríobh</span>(<span class="m">5</span> <span class="o">==</span> <span class="m">5</span>)
<span class="n">scríobh</span>(<span class="m">5</span> <span class="o">==</span> <span class="m">6</span>)
<span class="n">scríobh</span>(<span class="m">5</span> <span class="o">!=</span> <span class="m">6</span>)</code></pre>
</div>
</div>

This is in the console.


<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="m">4</span>
<span class="m">20</span>
<span class="m">fíor</span>
<span class="m">bréag</span>
<span class="m">fíor</span></code></pre>
</div>
</div>

Specifically, notice that `==` and `!=` compare numbers (and other things).

## Text

You can write text in your programs too, we saw this earlier with the simple program:
<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">scríobh</span>(<span class="s">&#x27;Dia duit&#x27;</span>)</code></pre>
</div>
</div>

You create text with two `'`s. For example:
<div class="highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="s">&#x27;Hello&#x27;</span>
<span class="s">&#x27;My name is Cú Chulainn&#x27;</span></code></pre>
</div>
</div>

You can use `+` to join two text together.

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">scríobh</span>(<span class="s">&#x27;Hello&#x27;</span> <span class="o">+</span> <span class="s">&#x27;, &#x27;</span> <span class="o">+</span> <span class="s">&#x27;my name is Eoin&#x27;</span>)</code></pre>
</div>
</div>

This writes `Hello, My name is Eoin`.

## Lists

Create lists in Setanta with `[` and `]`, for example:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code>[<span class="m">1</span><span class="p">,</span> <span class="m">2</span><span class="p">,</span> <span class="m">3</span>]
[<span class="s">&#x27;An Dagda&#x27;</span><span class="p">,</span> <span class="s">&#x27;Lugh&#x27;</span><span class="p">,</span> <span class="s">&#x27;Mór-Ríoghain&#x27;</span><span class="p">,</span> <span class="s">&#x27;Nuada&#x27;</span>]</code></pre>
</div>
</div>

Lists are very powerful. Every position in a list has a number. You can get an element of a list if you have the number of the position of the element. We give the number 0 to the first element of the list, the number 1 to the second element, the number 2 to the third etc.

If you have the number of the position, you can use `[` and `]` again to get the member. For example:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code>[<span class="s">&#x27;Dia&#x27;</span><span class="p">,</span> <span class="s">&#x27;Duit&#x27;</span>][<span class="m">0</span>] <span class="o">==</span> <span class="s">&#x27;Dia&#x27;</span>
[<span class="s">&#x27;Dia&#x27;</span><span class="p">,</span> <span class="s">&#x27;Duit&#x27;</span>][<span class="m">1</span>] <span class="o">==</span> <span class="s">&#x27;Duit&#x27;</span>

[<span class="m">100</span><span class="p">,</span> <span class="m">200</span><span class="p">,</span> <span class="m">300</span><span class="p">,</span> <span class="m">400</span>][<span class="m">2</span>] <span class="o">==</span> <span class="m">300</span></code></pre>
</div>
</div>

You can use `+` with two lists to make a new list:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code>[<span class="m">1</span><span class="p">,</span> <span class="m">2</span><span class="p">,</span> <span class="m">3</span>] <span class="o">+</span> [<span class="m">4</span><span class="p">,</span> <span class="m">5</span><span class="p">,</span> <span class="m">6</span>] <span class="o">==</span> [<span class="m">1</span><span class="p">,</span> <span class="m">2</span><span class="p">,</span> <span class="m">3</span><span class="p">,</span> <span class="m">4</span><span class="p">,</span> <span class="m">5</span><span class="p">,</span> <span class="m">6</span>]</code></pre>
</div>
</div>

## Comments

If you write the symbol `>--` in your program, Anything you write after it on the same line is a comment, and is not part of the program. For example

<div class="highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">scríobh</span>(<span class="s">&#x27;Hello&#x27;</span>) <span class="c">&gt;-- I can write anything here!
</span><span class="c">&gt;-- Or here as well</span></code></pre>
</div>
</div>

Comments are very useful because they allow us to write notes in our programs.

## Variables

You use **variables** to store numbers, lists or anything. You put something in the variables and later you can get it back. Try this out for example:

<div class="highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">x</span> := <span class="m">10</span>
<span class="n">scríobh</span>(<span class="n">x</span> <span class="o">*</span> <span class="m">2</span>)</code></pre>
</div>
</div>

It writes out `20` in the console. The first line put `10` in `x` and the second line used it.

In this program `x` is a **variable**. We can use variables everywhere that we use numbers, text or anything.

We create new variables with `:=`.

We can change the value in the variable `x` with `=`.

<div class="highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">x</span> := <span class="m">10</span> <span class="c">&gt;-- New variable with value 10
</span><span class="n">x</span> = <span class="m">20</span></code></pre>
</div>
</div>

Now `x` is equal to 20.

When you use `=` or `:=`, Setanta computes the term on the right, and then puts the result in the variable on the left. Because of this, we can use the same variables on the left and the right. For example:

<div class="highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">x</span> := <span class="m">1</span>
<span class="n">x</span> = <span class="n">x</span> <span class="o">+</span> <span class="m">2</span>
<span class="n">scríobh</span>(<span class="n">x</span>)</code></pre>
</div>
</div>

![Three](/assets/images/teagaisc/tri.png)

What does this program write?

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">x</span> := <span class="m">10</span>
<span class="n">y</span> := <span class="m">2</span> <span class="o">*</span> <span class="n">x</span> <span class="c">&gt;-- Create a new variable &#x27;y&#x27; with value 20
</span><span class="n">x</span> = <span class="n">y</span> <span class="o">+</span> <span class="n">x</span> <span class="c">&gt;-- Change the variable &#x27;x&#x27; to &#x27;x + y&#x27; = 10 + 20 = 30
</span><span class="n">scríobh</span>(<span class="n">x</span>)</code></pre>
</div>
</div>

We can use variables to draw things on the stage too. Put the following code in the editor:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">mo_dhath</span> := <span class="s">&#x27;dearg&#x27;</span> <span class="c">&gt;-- Change this variable to change the colour of the circles.
</span>
<span class="n">dath</span><span class="o">@</span><span class="n">stáitse</span>(<span class="n">mo_dhath</span>)

<span class="c">&gt;-- Create the variables &#x27;x&#x27;, &#x27;y&#x27; and &#x27;ga&#x27;
</span><span class="n">x</span> := <span class="m">100</span>
<span class="n">y</span> := <span class="m">100</span>
<span class="n">ga</span> := <span class="m">40</span>

<span class="n">ciorcal</span><span class="o">@</span><span class="n">stáitse</span>(<span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">ga</span>) <span class="c">&gt;-- Draw the first circle
</span>
<span class="n">x</span> = <span class="n">x</span> <span class="o">+</span> <span class="m">100</span> <span class="c">&gt;-- Change &#x27;x&#x27; to 200
</span><span class="n">y</span> = <span class="n">y</span> <span class="o">+</span> <span class="m">100</span> <span class="c">&gt;-- Change &#x27;y&#x27; to 200
</span><span class="n">ga</span> = <span class="n">ga</span> <span class="o">*</span> <span class="m">2</span> <span class="c">&gt;-- Change &#x27;ga&#x27; to 80
</span>
<span class="n">ciorcal</span><span class="o">@</span><span class="n">stáitse</span>(<span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">ga</span>)</code></pre>
</div>
</div>

![Two circles](/assets/images/teagaisc/dhaciorcal.gif)

## Changing lists

We can change members of lists with `=` too. For example:

<div class="language-python highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">l</span> := [<span class="m">1</span><span class="p">,</span> <span class="m">2</span><span class="p">,</span> <span class="m">3</span>]
<span class="n">l</span>[<span class="m">0</span>] = <span class="m">4</span>
<span class="n">scríobh</span>(<span class="n">l</span>)</code></pre>
</div>
</div>

![Changed list](/assets/images/teagaisc/liostaathru.png)

The first value of the list has changed!

## Next
You learned a lot of new things, go to [the next page](/english/04-ma-loops) to learn about `má` and loops.
