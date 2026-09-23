---
layout: default
title: Per Nørgård's Infinity Series
date: 2019-09-9
tags:
    - composition
    - algorithms
---

# Per Nørgård's Infinity Series

_I wrote this essay for my old website in September 2019. Still surprised, pleasantly, to see it turn up in discussions of Nørgård's work. Reposting here for posterity._

---

Recently I've been revisiting the work of Danish composer Per Nørgård as part of a broader exploration into different approaches to algorithmic composition. My first encounter with Nørgård's work was his percussion solo _I Ching_, written in 1982 for Gert Mortensen, which I first heard as a teenager. The third movement of _I Ching_, subtitled _The Gentle, The Penetrating_, is particularly mesmerizing in its ingenious use of a timpani as a modulating resonant cavity for kalimba and bowl gongs placed on the timpani head. The ankle-shaker groove is startlingly exuberant and joyful in comparison to the almost spectral, haunting quality of the metallophone-timpani combinations.

[i ching vid]

Nørgård's output reflects a rigorous approach to composition across a wide variety of styles and techniques, including many beautifully shimmering timbral techniques reminiscent of spectral music. He certainly was not shy about incorporating serial and other math-heavy processes into his works, but the appeal of Nørgård’s music to me is the way in which he used these techniques to meet broader aesthetic goals. Nørgård  corresponded with Jean Sibelius early in his career and I hear elements of Sibelius’ constantly-evolving, rugged elemental style in his music.

In particular, Nørgård's use of the so-called infinity series is what prompted me to dive back into his work this week. The infinity series is Nørgård's term for a self-similar integer sequence that he developed (or discovered) in 1959 and began integrating into his compositions in the 1960s. The infinity series bears some similarities to fractal geometry and Nørgård's earliest pieces that used the series (such as Voyage Into the Golden Stream) were composed around the same time that Benoit Mandelbrot was publishing pioneering research into self-similar mathematical structures.

Nørgård’s Symphony No. 3 makes extensive use of the infinity series throughout its two movements and is well worth a listen if you have 45 minutes to spare.

[ sym 3 vid ]

---

#### _Building the Infinity Series_

In essence, the infinity series is a sequence of integers that meanders around zero in steps of varying sizes. The size of the steps are self-similar so that patterns of intervals recur. As the series continues, it deviates farther and farther from the origin but always remains centered around the zero-axis. It is easiest to visualize the infinity series as chromatic pitches beginning with a central pitch, but the infinity series can be applied to any pitch collection (diatonic scales, modes, etc.) or other musical parameters like rhythm or form.

The first sixteen integers of the infinity series are shown below as a sequence of chromatic pitches centered around G. (The stems-down and stems-up notation clarifies the composition of the series, as demonstrated below, but the series is one continuous stream of integers).

[ img ]

The self-similar structure of the infinity series becomes apparent when it is constructed through the projection of intervals. The integers (pitches) in the first two indices of the series (#1 and #2) create a germinal interval that forms the seed for the rest of the series. It is helpful to think of the odd-numbered indices (stems-down in the diagram below) and the even-numbered indices (stems-up) as separate streams that are interleaved to create the sequence.

After the first two integers (index #1 and #2), the next even integer is simply the same distance away from the first even integer as the germinal interval. So in the example below, the A-natural (index #4) is a half step above A-flat (index #2) — the germinal interval (+1, or ascending minor second).

The next odd integer is derived in much the same way, except that the germinal interval must be inverted. So in the example, index #3 is an F-sharp: a half step below G (index #1) — the inverted germinal interval (-1, or descending minor second).

To continue the series, the next pair of integers/pitches (indices #2 and #3) becomes the new germinal interval used to derive the next two odd- and even-index integers. The process is the same: the new germinal interval determines the next even-index integer/pitch and the new inverted germinal interval determines the next odd-index interval/pitch. In the example below, the interval between pitches #2 (A-flat or 1) and #3 (F-sharp or -1) is -2 — a descending major second. Thus the next even-index pitch (#6) is a G (a major second below pitch #4 (A-natural)) , and the next odd-index pitch (#5) is an A-flat (a major second above pitch #3 (F-sharp)).

[ img ]

As the series continues, the new integers occur farther and farther away from the germinal intervals that generated them.

Sadly, Nørgård's official website seems to be down, but several important pages have been archived, including those that discuss the derivation of the infinity series. While the method of constructing the series through interval projection is helpful for visualizing the construction of the series, I found this method using binary numbers most useful for the purposes of generative composition because it allows me to access integers based on their index in the series (i.e. find the 3567th integer in the series), instead of having to start the series from the beginning every time. The series grows increasingly complex (but remains self-similar) at higher indices, and it is convenient to not have to run through thousands or millions of integers to access these higher indices.

---

#### _Coding the Infinity Series_

For my own compositional purposes, I am working on translating various algorithmic processes into SuperCollider code as I start to wrap my brain around them, with the hope of eventually being able to modularize, compare and combine different techniques. I’m using SuperCollider but of course these abstract algorithms can be translated into any platform (including good old pencil and paper). 

I created two very basic functions to begin experimenting with the infinity series. The first (norgardInteger) returns the integer in the sequence corresponding to a particular index (i.e. the 3567th integer in the series) using the binary number method; the second (norgardArray) returns an array of integers representing a range of indices (i.e. the 1st through 100th integers). As written, the highest possible index the functions can work with is 4,294,967,295 (the largest unsigned 32-bit integer), but should you ever possibly need a greater index you can increase the number of binary digits used.

```
/////////////////////////////////
// PER NØRGÅRD INFINITY SERIES //
/////////////////////////////////

/* Write n in binary and read from left to right, starting with 0 and interpreting 1 as "add 1" and 0 as "change sign". For example 19 = binary 10011, giving 0 -> 1 -> -1 -> 1 -> 2 -> 3, so a(19) = 3. */

///////// FUNCTIONS /////////////

( // start funcs

// RETURN INTEGER IN INFINITY SERIES BY INDEX:
// max index = 4.29 billion (32 bit maximum)

~norgardInteger = {
	arg n;
	var binary = n.asBinaryDigits(32); // 4.29 billion max
	var tempOutput = 0;
	var output;
	binary.do({
		arg item;
		case
		{item == 0} {tempOutput = tempOutput * -1}
		{item == 1} {tempOutput = tempOutput + 1}
	});
	output = tempOutput;
	output;
};

// GENERATE SUBSET OF INF SERIES (ARRAY) BY START AND ENDING INDICES:
// N.B.: struggles with subsets longer than 100k

~norgardArray = {
	arg start, end;
	var length = end-start+1;
	var infinityArray = Array.newClear(length);
	for(start, end, {arg i; infinityArray.put(i-start, ~norgardInteger.value(i))});
	infinityArray;
}
) // end funcs

// EXAMPLE:
// start, end:
~norgardArray.value(100500, 100600);
```

Of course a stream of integers is only useful when it is translated into pitches, rhythms, or other musical elements, and there are just as many ways of translating numbers into music as there are ways of generating interesting numbers, so this code is only the very first step in the process of composing with Per Nørgård’s infinity series.

[ norgard pic ]
