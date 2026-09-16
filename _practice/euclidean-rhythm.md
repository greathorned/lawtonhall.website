---
layout: default
title: Euclidean Rhythms
date: 2020-08-4
tags:
    - composition
    - algorithms
---

# Euclidean Rhythms: Maximum Evenness, Maximum Groove

_I first posted this article on my old website in August 2020. It continues to generate interest and has been linked in unexpected places across the internet. I'm grateful that people continue to find it a useful introduction to this musical-mathematical oddity._

---

<div class = "centered">
	<b>Euclidean rhythms have roots in ancient Greek geometry but took a brief detour in particle physics before entering the world of modern music creation. This article describes how Euclidean rhythms work and how composers and producers can manipulate and layer them to generate groovy rhythmic material.</b>
</div>

---

#### _The Euclidean Algorithm_

[ image ]

The Ancient Greek mathematician Euclid of Alexandria lived in the 3rd century B.C. and is regarded today as the father of modern geometry. His writings encapsulate everything that was known about geometry in the Ancient Greek world. Thanks to Euclid, we know how to find the area and volume of 2D and 3D objects, how the Pythagorean theorem works, and that there is most likely no largest prime number. The principles of Euclidean geometry have stood the test of time and exceptions to Euclidean postulates ([non-Euclidean geometry](https://www.youtube.com/watch?v=nkvVR-sKJT8){:target="_blank" rel="noopener"}) only began to be discovered and articulated in the nineteenth century.

In his most famous work, the [_Elements_](https://mathcs.clarku.edu/~djoyce/java/elements/elements.html){:target="_blank" rel="noopener"}, Euclid demonstrated how higher-level theorems can be deduced logically from a handful of lower-level axioms. The veracity of each theorem is demonstrated by a proof (the bane of high school geometry students everywhere) that articulates the logical steps required to accurately create or describe the properties of increasingly complex geometric constructions. This logical, modular working method was significant to the development of the modern practice of mathematics. Each proof ends with the acronym _Q.E.D._ (_quod erat demonstrandum_, "it has been demonstrated").

The _Euclidean algorithm_ is one of the most famous propositions in the _Elements_. It is a set of rules (or logical steps) used to find the _greatest common divisor_ between two integers. In other words, it answers the question, "What is the largest number that divides both a and b evenly without fractions or decimals?" The algorithm is _recursive_, meaning that it repeated until a solution is found. The easiest way (for a non-mathematician like me anyway) to understand the Euclidean algorithm is to imagine it visually as a rectangle with one side of length _a_ and the other of length _b_. Let's assume that _a_ is the longer side and _b_ is the shorter side.

[ image ]

To start the algorithm, take the largest perfect square that will fit within the rectangle: a square with all sides equal to _b_ (blue in the diagram above). Place that square inside the rectangle so that it shares an edge with one of the two short edges of the rectangle. Now look at the portion of the rectangle not covered by the square (the pink area in the diagram). Can you fit another square of the same size inside this remaining area?

If you can fit in more squares of identical size, keep doing so until no more will fit inside the remaining rectangle. If at this point the squares cover all of the area of the original rectangle perfectly, the algorithm ends and _b_ is the greatest common divisor between _a_ and _b_. Easy right? If there is still space left over inside the original (pink) rectangle, start the algorithm over again by creating a new square with edges the length of the short edge of the remaining rectangle left over after subtracting the squares from round 1. Keep looping through this process (creating smaller and smaller squares each time) until the entire area of the original _a_ * _b_ rectangle is covered. The length of the edges of the smallest square is the greatest common divisor between _a_ and _b_.

---

#### _Cool. So what does this have to do with music?_

It doesn't. At least not yet. In order to understand how Euclid's algorithm made its way into music, we first have to talk about nuclear physics (yes, really).

In 2003, Eric Bjorklund was working on a spallation neutron source (SNS) particle accelerator at Los Alamos National Laboratory. Please don't ask me to explain what a spallation neutron source particle accelerator is because I haven't the faintest idea. In order for this extremely precise and expensive (I assume) piece of equipment to work as intended, a gate needed to be opened a certain number of times within a certain window of time (for example, seven times in ten seconds). It was important that the timing of the gates be spaced as evenly as possible within the window.

[ image ]

In music, we would use a tuplet to show this even division of a duration—a 7 against 10 polyrhythm, perhaps. However, this gate was controlled by a pulse signal that only occurred at regular intervals (e.g. four times per second). The gate could only open when a pulse occurred which means that the fractional durations in our 7:10 tuplet wouldn't work. In musical terms, it is as though the 7:10 polyrhythm had to be quantized to a sixteenth-note grid.

[Bjorklund's solution is an algorithm](https://www.semanticscholar.org/paper/The-Theory-of-Rep-Rate-Pattern-Generation-in-the-Bjorklund/c652d0a32895afc5d50b6527447824c31a553659?p2df){:target="_blank" rel="noopener"} that takes a number of gate-openings (_k_) and the number of pulses within a given window (_n_) and finds the most even way to space gate-openings within the window using only integers so that they can be triggered by the pulse signal. (I will use the variables _k_ and _n_ throughout this post.) If _n_ is not evenly divisible by _k_, there will be two different durations between gate-openings. Bjorklund's algorithm arranges the varying durations for maximal evenness. For example, *k = 7* and *n = 16* produces:

```
[ 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ]
```


Where 1s and 0s represent regular pulses and gate-openings occur on 1s only. We can write the time between gate-openings as durations (in pulses) like this:

```
[ 3, 2, 2, 3, 2, 2, 2 ]
```
---

#### _Euclidean Rhythms in Music_

Later in this post I'll show how Bjorklund's algorithm works, but first I want to discuss the musical applications of this discovery. In 2005, mathematician and McGill University professor Godfried Toussaint was a researcher at [CIRMMT at the Schulich School of Music](https://www.cirmmt.org/en){:target="_blank" rel="noopener"} and published an article titled ["The Euclidean Algorithm Generates Traditional Musical Rhythm."](https://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf){:target="_blank" rel="noopener"} In it, Toussaint shows that Bjorklund's SNS algorithm is remarkably similar to Euclid's algorithm. Both are recursive and use the same basic process of subtracting regular-sized units from a larger whole, finding the remainder, and then repeating the process until there's nothing left to subtract. A mathematical proposition from before the invention of the windmill is related to problems in particle accelerators over two thousand years later.

More importantly, however, Toussaint found that if you re-imagine Bjorklund’s algorithm in musical terms, it can produce rhythms that are found in numerous and disparate styles of music from around the world and throughout history. Instead of dealing with pulses and gate-openings in a particle accelerator, he applied the algorithm to regular subdivisions (e.g. eighth or sixteenth notes) and notes that occur on those subdivisions. Bjorklund’s algorithm produced sequences of _maximally even_ rhythms, which had been a source of fascination for Toussaint and other musicologist-mathematicians researching the music of sub-Saharan Africa.

Toussaint uses the notation [_k_, _n_] as a shorthand, which I will use throughout the rest of this post. _k_ must always be lesser than or equal to _n_. He also diagrams the cycles using [rhythm necklaces](https://www.ethanhein.com/wp/2015/rhythm-necklace/){:target="_blank" rel="noopener"}, a useful way of visualizing rhythmic loops.

The maximally-even quality of these so-called _Euclidean rhythms_ strike a balance between regularity (they never stray too far from a regular beat) and syncopation. The most interesting Euclidean rhythms occur when _n_ is not evenly divisible by _k_, such as our ```[7, 16]``` example above, which produces a ```[3, 2, 2, 3, 2, 2, 2]``` duration pattern:

[ image ]

These irregular Euclidean rhythms will always feature exactly two different note-lengths/durations (e.g. 3 and 2 for [7, 16]) that are always only one integer apart, which means that, despite their potential complexity, notes in a Euclidean rhythm will be either on the beat or off the beat (syncopated). The longer durations (3s) produce subtle _agogic accents_ (accents of duration), but these don’t disrupt the overall forward momentum of the rhythm since they are only slightly longer than the shorter notes. This makes Euclidean rhythms prime material for looping grooves (a.k.a. _ostinati_, if you’re feeling fancy) that form the foundation for songs and dances.

---

#### _Examples_

**[Ewe drumming from Ghana](https://folkways.si.edu/ewe-music-of-ghana/world/album/smithsonian){:target="_blank" rel="noopener"} features the [7, 12] Euclidean rhythm as a bell pattern played by the _gankogui_ (_agogô_). This bell pattern is the backbone for all of the other drum parts:**

[ Ewe img ]

[ Ewe vid ]

---

**The [4, 7] Euclidean rhythm can be heard throughout the Bulgarian _ruchenitsa_ dance:**

[ ruchenitsa img ]

[ ruchenitsa vid ]

---

**Dave Brubeck’s _Blue Rondo à la Turk_ features a pervasive [4, 9] Euclidean rhythm that has similarities with “limping” Turkish and Balkan [_aksak_](https://www.jstor.org/stable/902645?seq=1){:target="_blank" rel="noopener"} rhythms:**

[ blue rondo img ]

[ blue rondo vid ]

---

The Cuban _tresillo_ rhythm (Euclid[3, 8]) is the foundation for the _habanera_, the _tango_, _son matumo_, _mambo_, _reggaeton_ and numerous other Caribbean and South American dance forms. It enjoyed a moment in the spotlight throughout [countless 2010s dance-pop hits](https://www.thefader.com/2015/06/10/tresillo-club-music){:target="_blank" rel="noopener"} (see also: _Despacito_):

[ tresillo img ]

[ tresillo vid ]

---

Since the “discovery” of their algorithmic origins, Euclidean rhythms have been an inspiring tool for producers and composers (and the rest of this post deals with how to create your own Euclidean rhythm grooves), but Euclidean and Euclidean-like rhythms also appear in modern compositions that pre-date Toussant’s paper. Late in his life, Hungarian composer György Ligeti (1923-2006) became fascinated with the music of sub-Saharan Africa and built many pieces on the juxtaposition of rhythms inspired by [Aka music from central Africa](https://folkways.si.edu/aka-pygmy-music/world/music/album/smithsonian){:target="_blank" rel="noopener"}. S.A. Taylor, in [this analysis of Ligeti’s later works](https://www.tandfonline.com/doi/abs/10.1080/07494467.2012.717362){:target="_blank" rel="noopener"}, finds numerous maximally even rhythms (he does not use the term “Euclidean” but cites other musical research by Toussaint) throughout the violin and piano concerti and often used them as a kind of isorhythmic _talea_. Ligeti’s sketches show that he was directly inspired by Aka rhythms and often superimposed multiple metric streams to create his rhythmic palette, which can be heard in his 1993 violin concerto:

[ ligeti video ]

---

#### _In Practice_

I'm hesitant to read too much into the "world music rhythms" aspects of Toussaint's article. Every musical tradition approaches rhythm differently (sometimes wildly differently). Isolating accents or bell patterns between disparate musics to find mathematical similarities between them feels like an overly reductionist, Western-music-theory way of looking at things that disregards the cultural forces that influence musical expression. Individual musicians  innovate and experiment with rhythm in every musical culture and are constantly producing music that defies labels and doesn't fall within convenient ethnomusicological taxonomies. Moreover, simple patterns like a four-on-the-floor disco beat are technically Euclidean rhythms (k = 4, n = 4), but who is going to argue that Donna Summer and Giorgio Moroder had ancient Greek geometry in mind when recording _I Feel Love_?

What is certain, however, is that the Euclid-Bjorklund algorithm is capable of producing rhythmic patterns that at the very least _feel_ intuitive and familiar. They avoid some of the cold, artificial, made-in-a-lab sound that can result when generative or algorithmic composition techniques are employed non-critically. For this reason, Euclidean rhythms are an incredibly powerful and versatile technique for composers, producers, and beatmakers to add to their toolkit. A single Euclidean cell can form be used like a bell pattern, forming the basis for an entire piece. (The second movement of my drum set quartet [_Codex_]({% link _works/codex.md %}) uses a [5, 12] Euclidean rhythm this way.) More complex grooves can be constructed by layering different Euclidean rhythms on top of one another, each with different k and n values and varying durations for the underlying pulse. This produces polyrhythmic textures that feature syncopation in each rhythmic stream:

[ soundcloud exx ]

[ sheet music ex 1 ]

Changing _k_ and _n_ in just one of the rhythms produces a different texture:

[ sheet music ex 2 ]

This technique isn’t limited to percussive/rhythmic material. By assigning pitches to the same layered Euclidean rhythm, it’s possible to create a hypnotizing minimalist texture:

[ sheet music ex 3 ]

If _n_ is much larger than -, the resulting Euclidean rhythm will be sparse, with more time between notes. As _k_ approaches _n_, more pulses get filled in, and the texture becomes more dense. (When _k_ = _n_, all pulses are filled with notes). This allows a beatmaker to create rhythmic contrast between different sections of a song or composition, by manipulating the event density through the relationship between _k_ and _n_ values in a Euclidean rhythm stream.

[ sheet music ex 4 ]

---

#### _Do It Yourself_

There are several software options (many free) that allow you to start experimenting with layering Euclidean rhythms. User dbkaplun created a free rudimentary [browser-based Euclidean rhythm generator](https://dbkaplun.github.io/euclidean-rhythm/){:target="_blank" rel="noopener"} available on GitHub. [Polyrhythmus](https://maxforlive.com/library/device/2431/polyrhythmus-a-modular-euclidean-rhythm-builder){:target="_blank" rel="noopener"} is a module built by Benniy C. Bascom for the Max/MSP platform. [Imogen Heap's Box of Tricks](https://www.soniccouture.com/en/products/28-sound-design/g50-box-of-tricks/){:target="_blank" rel="noopener"} is a Kontakt instrument built upon Euclidean rhythms. There are also numerous iOS and Android apps. I personally use the free [Bjorklund quark](https://github.com/supercollider-quarks/Bjorklund){:target="_blank" rel="noopener"} for SuperCollider by [Fredrik Olofsson](https://fredrikolofsson.com/f0blog/bjorklund/){:target="_blank" rel="noopener"}. I especially appreciate the PBjorklund functions that work within SuperCollider's pattern library. I have included SuperCollider code at the bottom of this post (after the references) to help you get up and running with the Bjorklund quark. As always, you don't need software to start using this technique, though it helps to be able to quickly try out and tweak different parameters to find patterns that you like without spending too much time on the algorithmic side of things.

[ generating euclidean rhythms vid ]

If you're working out Euclidean rhythms by hand or developing your own system, it's time to look under the hood of the Bjorklund algorithm. Start with an array of _n_ zeros and ones representing pulses. The first _k_ pulses are ones and the remaining pulses are zeros. The order of the zeros and ones will change as you work through the algorithm, but there will always be the same number of zeros and ones. For **_n_ = 13** and **_k_ = 5**, this is the starting array:

```
[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
```

Next, move each of the last _k_ zeros and append them to the ones to create _k_ ```[10]``` sequences:

```
[ [10], [10], [10], [10], [10], [10], 0, 0, 0 ]
```

The goal is to get as many of the sub-sequencies (e.g. ```[10]```) to be the same. After this first step, the zeros left over at the end are the remainder. Move the three remainder zeros to the end of the first three ```[10]```s, like this:

```
[ [100], [100], [100], [10], [10] ]
```

Repeat the process of moving sequences at the end of the list by appending them to elements at the front. This time the ```[10]```s are the remainder, and get appended to the first two ```[100]```s:

```
[ [10010], [10010], [100] ]
```

The algorithm ends when there is only one (or no) remainder. Since there is only one ```[100]``` remainder sequence, this example is complete. You can flatten (remove the brackets) from the array to better visualize the rhythm:

```
[ 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0 ]
```

To convert this array of pulses to durations, simply count the number of pulses between each 1:

```
[ 3, 2, 3, 2, 3 ]
```

The sum of the durations should equal _n_. Once this process is complete, you can produce variations on the same Euclidean rhythm by rotating (shifting the durations left or right) the duration array. Since the Euclidean rhythms are meant to cyclical, it is possible to start at any point in the loop and it will still produce a rhythm that is maximally evenly-spaced. There are _k_–1 possible rotations, but some rotations may be identical. Interesting musical results can happen when two rotations of the same Euclidean rhythm are superimposed on one another.:

```
Rotations:
[ 3, 2, 3, 2, 3 ] → [ 2, 3, 2, 3, 3 ] → [ 3, 2, 3, 3, 2 ] → [ 2, 3, 3, 2, 3 ]
```

 To map these numbers to musical terms, choose a duration for the length of each underlying pulse. Sixteenth notes or eighth notes are common but any duration is possible. Each duration integer is simply a multiple of the underlying pulse. E.g. 3 eighth notes = dotted quarter note; 2 eighth notes = quarter note, etc.

[ final example img ]

---

#### _Conclusion_

The centuries-long journey that the Euclidean algorithm took from geometry to music demonstrates the value of looking for musical inspiration in unexpected places and across disciplines. Godfried Toussaint’s paper includes many more examples of Euclidean rhythms in practice and it’s worth doing some Googling to listen to examples of how they have appeared in various musical contexts. 

This post should give you the background and theory needed to add Euclidean rhythms to your composition/production toolkit. As with any generative music technique, it’s best to keep an open mind and not get too hung up on the purity of the process itself. Follow your ears, your heart, and your gut (not necessarily in that order.)

**Quod erat demonstrandum.**

[ qed img ]

---

#### _References_

Bjorklund, E. “The Theory of Rep-Rate Pattern Generation in the SNS Timing System.” (2004).

Nice Fracile, “The “Aksak” rhythm, a Distinctive Feature of the Balkan Folklore.” _Studia Musicologica Academiae Scientiarum Hungaricae_ 44, No. 1-2 (2003), pp. 197-210.

Adam Harper, “How a Traditional Rhythm is Shaping Today’s Most Exciting New Music.” _Fader_ (June 10, 2015).

Kwaku Ladzekpo, _The Clave Matrix; Afro-Cuban Rhythm: Its Principles and African Origins_ (1997).

Ben Lynn, “Euclid’s Algorithm.”

Luke Mastin “Euclid of Alexandria — The Father of Modern Geometry.” _The Story of Mathematics_.

Godfried Toussaint, "The Euclidean Algorithm Generates Traditional Musical Rhythms." _Proceedings of BRIDGES: Mathematical Connections in Art, Music and Science_, Banff, Alberta, Canada, (July 31-August 3, 2005), pp. 47-56.

Steven Andrew Taylor, “Hemiola, Maximal Evenness, and Metric Ambiguity in Late Ligeti.” _Contemporary Music Review_ 31, No. 2-3 (April-June 2012), pp. 203-220.

---

#### _SuperCollider Code_

```
/*
EUCLIDEAN RHYTHM WORKSPACE

The following functions require the Bjorklund quark, which can
be installed from the Quarks.gui menu. The third example plays
parallel (layered) Euclidean rhythms via MIDI.

Created by Lawton Hall in 2020. Free to use, share, and adapt. Read the original blog post for more information.

Run Quarks.gui and install the Bjorklund quark.
Recompile class library after installing:
*/

Quarks.gui

(
/* RETURNS EUCLIDEAN RHYTHM in BINARY NOTATION */
var k, n, euclid;
n = 13;
k = 5;
euclid = Bjorklund(k, n);
euclid.postln;
)

(
/* RETURNS EUCLIDEAN RHYTHM in DURATION NOTATION */
var k, n, euclid;
n = 13;
k = 5;
euclid = Bjorklund2(k, n);
euclid.postln;
)


/*
LAYERED EUCLIDEAN RHYTHMS USING MIDI
Assign MIDI output to ~mOut variable. Use "IAC Driver" on Mac
to send MIDI from SuperCollider to other applications.
Run MIDIClient.destinations after initializing MIDI to see
list of output destinations.
*/

(
/* MIDI SETUP */
MIDIClient.init;
MIDIClient.destinations;
~mOut = MIDIOut.newByName("IAC Driver", "IAC Bus 1").latency_(Server.default.latency); //assign output here
)

/* SET TEMPO: */
TempoClock.default.tempo = 140/60;

(
/*
All three arrays (pitches, euclids, subdivisions) should
be the same length, corresponding to the number of layered
Euclidean rhythm loops.
Pitches is a list of MIDI notes played by each Euclid stream.
Euclid is a list of [k, n] pairs for each stream.
Subdivs is the duration of each pulse in each Euclid stream
(1 = quarter note, 1/2 = eighth note, etc.)
*/
var pitches, euclids, subdivs, patArray;

pitches = [ 60, 62, 71 ];
euclids = [ [7, 18], [5, 14], [6, 9] ];
subdivs = [ 1, 1/2, 1/4];
patArray = Array.fill(pitches.size, { |i|
	Pbind(
		\type, \midi,
		\midicmd, \noteOn,
		\midiout, ~mOut,
		\chan, 0,
		\amp, 0.6,
		\legato, 0.25,
		\dur, Pseq(Bjorklund2(euclids[i][0], euclids[i][1]) * subdivs[i], inf),
		\midinote, pitches[i],
	)
});

p = Ppar(patArray).play;
)

p.stop; //stop pattern playback
```
