---
layout: default
title: "Claude Vivier's Couleurs: Generating Pitch Structures Through Ring Modulation"
date: 2020-08-10
tags:
    - composition
    - algorithms
---

# Claude Vivier's _Couleurs_: Generating Pitch Structures Through Ring Modulation

_First posted in August 2020, this is a technical breakdown of one of Vivier's harmonic techniques, with SuperCollider code at the end if you want to try it for yourself._

---

Claude Vivier was a French-Canadian composer whose life was tragically cut short when he was murdered in his Paris apartment in 1983 at age 34. Born in 1948 to unknown parents in Montréal and spending most of his youth in religious boarding schools where his homosexuality was attributed to a "lack of maturity," Vivier traveled for several years in Europe where he studied with Gottfried Michael Koenig, Paul Mefano, Hans Ulrich Humpert, and Karlheinz Stockhausen. After returning to Montréal in 1974, Vivier began to establish a reputation in his native Canada, showing great promise with orchestral works like Siddhartha. From 1976-77, Vivier traveled in Asia. Balinese gamelan music (and Balinese culture in general) had an especially profound effect on Vivier; he described this trip as “a journey to the bottom of myself” (Koh 2017) and was fascinated by the fusion of timbre and harmony in the gamelan technique of kotekan. He later encountered the spectral music of Gérard Grisey and Tristan Murail, with whom his music shares some harmonic similarities.

[ vivier pic Claude Vivier (1948-1983), photo by J.A. Billard ]

I first encountered Vivier's music as a senior in high school when the St. Louis Symphony Orchestra (directed by David Robertson) performed his 1980 work Lonely Child in 2005 with soprano Dawn Upshaw as the soloist. (Robertson programmed at least one piece of "new music" on every concert that season which certainly inspired me to pursue composition. Little did I realize at the time that not all music directors are so adventurous with their programming.) 

Vivier described Lonely Child as "a long song of solitude" and it is a deeply personal, haunting musical self-portrait that seems to explore his relationship with his unknown mother. The work is constructed around a single melodic line sung by the soprano over pedal notes in the bass voices punctuated by deliberate gong notes. The text (by Vivier) begins and ends with the reassuring voice of a maternal figure putting her child to sleep: "Les rêves viendront, les douces fées viendront danser avec toi" ("Dreams will come, sweet fairies will come to dance with you"). The imagery of the lullaby becomes increasingly fantastical as the child-figure drifts into sleep. Dreamland, for Vivier, is filled with sumptuous palaces adorned with gold and gemstones — memories of Bali, perhaps.

[ lonely child vid ]

Once the mother's opening lullaby is complete, the text shifts to the voice of the child. The words become nonsense syllables, or perhaps a language only known to Vivier himself, like the sounds a toddler makes when she first discovers her own voice. The speaker shifts once more, this time to the recitative-like voice of a third-person narrator describing the surreal and sublime happenings in the child's dream-world, which seems to cut through the cosmos and across dimensions. The wizard Merlin appears, acrobats dance across the stars, and magic spells set the golden sun alight. The high, glassy string parts, which once floated statically above the  mothers voice, move in constant glissandi that shimmer and sparkle in this surreal landscape. The narration dissolves into childish nonsense syllables once more, but one repeated word becomes recognizable amidst the gibberish: Tazio. "Koré noy Tazio. Koré koré Tazio Tazio Tazio."

Thunderous bass drum hits bring this vision to an abrupt end. After a pause, the maternal voice returns but now, she addresses the child by name as Tazio:  "Tazio, la langue des fées, tu la parleras et tu verras l'amour" ("Tazio, the language of the fairies, you will speak it and you will see love"). Did the child name himself in the imaginary world of his dreams? The voice sounds almost liturgical, like the voice of an angelic choir engulfed in the majestic, homophonic halo of the orchestra that fuses into an organ-like sound mass.

The material of the opening returns, and Lonely Child becomes a kind of lullaby once again after the maternal voice assures the child once more, “les étoiles au ciel brillent pour toi, Tazio, et t’aiment éternellement” (“the stars of the sky shine for you, Tazio, and you will be eternally loved”). This final benediction is tinged with faint whispers of the string glissandi from the middle visions as the piece comes to a gentle end.

---

#### _Les Couleurs_

At the first vocal entrance in m. 24, we see the basic harmonic formula that Vivier uses throughout Lonely Child to create his otherworldly sonic palette. By the time he wrote Lonely Child, Vivier had distilled his compositional process down to two-part counterpoint; the vocal line (doubled in octaves by the sixth violin, violas, first horn and clarinets) is set against a slower-moving pedal-like line in the basses, cellos, and second horn that begins on G. All of the other pitches in the high violins come about through the juxtaposition of the melodic line with the pedal point through an electronic-music inspired process that Vivier dubbed les couleurs ("the colors"). With les couleurs, the disarming directness of the maternal voice is refracted through a sonic prism that conjures a psychologically complex, childlike dream state. The voice shimmers in a halo of tones that sound simultaneously dissonant and inseparable from the central melodic line. What should be familiar and comforting sounds sublime and foreign—perhaps even terrifying—as though it emerged directly from the psyche of a lost and imaginative child. Because the effect of les colueurs is as much timbral as it is harmonic, Vivier at times alternately referred to this technique as jeu de timbres (“game of timbres”).

Les couleurs are derived from ring modulation, a technique in electronic music that was favored by Vivier's onetime mentor Karlheinz Stockhausen. In ring modulation, two audio signals (typically called the carrier and modulator) are combined by multiplying one by another. A ring of diodes is required to do this signal multiplication in analog circuits, giving ring modulation its name. (N.B.: Bryan Christian has argued that Vivier's process in Lonely Child is more akin to frequency modulation, a simpler but related electronic music concept that involves combining signals through multiplication. Vivier's couleurs technique developed over time and in various pieces may have more closely resembled either ring modulation or frequency modulation. Check out Christian's article in Music Theory Online for a more in-depth discussion.)

[ ring mod schemo ]

Even though from a technical standpoint ring modulation involves multiplying signals, the sonic result of this process is a sound that contains both the sum and difference in frequency between the carrier and modulator signals. In other words, the component frequencies of the ring-modulated signal can be found by both adding and subtracting the frequency of the carrier signal from the frequency of the modulator signal. For example, if a pure sine-wave modulator signal with a frequency of 5200 Hz is ring modulated by a carrier sine-wave signal at 500 Hz, the output signal will be a sound containing sinusoids at only two frequencies: 4700 Hz and 5700 Hz (5200 ± 500 = [5700, 4700]). Because these sum and difference tones appear on either side of the modulator signal (above and below) when viewed on a spectrogram, they are often called sidebands.

[ max screenshot ]

Ring modulation produces sounds that are complex and bear little resemblance to any sounds in the natural world. Our perception of pitch is geometric, meaning that multiplication and division of frequencies produces more familiar musical intervals than addition and subtraction. (For example, doubling the frequency of a tone raises its pitch by an octave; multiplying by 3/4 lowers it by a just perfect fourth.) The sum and difference tones (addition/subtraction) of ring modulation have an arithmetic frequency relationship with the input signal and will always produce inharmonic partials (relative to the modulator) unless the modulator frequency is a whole-number multiple of the carrier frequency.

When complex sounds (sounds with multiple overtones, i.e. anything but pure sine waves) are ring modulated, the situation becomes exponentially more complex because the resultant signal contains the sum and difference tones of all of the component frequencies of the modulator signal relative to all of the component frequencies of the carrier signal. Often a pure sine tone is used as a carrier signal in electronic music because this still produces complex results with a dynamic modulator signal. Because ring modulation is an efficient and conceptually simple way to produce extremely complex and unusual sounds, it has long been a favorite technique for sound designers and composers for sci-fi films. (Check out Louis and Bebe Barron’s 1956 soundtrack for Forbidden Planet or the famous voice of the Daleks from Dr. Who, created using ring modulation by the BBC Radiophonic Workshop.)

[ forbidden planet vid ]

---

#### _In Practice_

By now you’ve probably figured out the gist of how Vivier’s couleurs work: they are a form of notated, acoustic “ring modulation” between two voices in counterpoint with one another, one (the lower) representing a carrier signal and the other (a higher melody) representing the modulator. They provided Vivier a means to create sonic complexity out of simple musical textures while focusing on the direct expressive potential of single melodic lines. The distinctive sound of ring modulation is especially otherworldly when played by acoustic instruments that each have their own complex harmonic spectra.

In Lonely Child, it appears that Vivier used only the sum tones that come about by adding the frequencies of the notes in the lower voice to the frequencies of the melodic notes sounding above the lower part. He repeats this process for the first several harmonics (integer multiples) of the lower (carrier) notes, adding the melody-note frequency to each. Vivier’s process of modulating a melody by harmonics of a lower pedal can be generalized as follows:

```
[ [m + c], [m + 2c], [m + 3c] … [m + (h * c)] ]
```

Where c is the frequency (in Hertz/cycles per second) of the carrier pitch, m is the fundamental frequency of the modulator pitch, and h is the maximum number of carrier harmonics used. The first sonority in m. 24 of Lonely Child demonstrates this process. Vivier does not use all of the harmonics of the carrier pitch at this point in the piece; instead he only uses the first, second, third, fifth, and eighth harmonics to create this sonority:

[ lonely child ex img ]

While Vivier used these tones primarily as harmonic/timbral elements, they can provide pitch constructions that may be used linearly to create scales. This process can be used to organize entire pieces or simply treated coloristically to enhance particular passages. Sum tones alone, difference tones, and a combination of both sum and difference tones are all viable ways of generating pitch material. Difference tones use the same basic formula but replace addition with subtraction:

```
[ [m - c], [m - 2c], [m - 2c] … [m - (h * c)] ]
```

It is also possible to utilize harmonics of the modulator pitch in this process, though the number of new frequencies produced can quickly become very large. For example (using sum tones only):

```
[ 

[ [m + c], [m + 2c], [m + 3c] … [m + (h * c)] ],  

[2m + c], [2m + 2c], [2m + 3c] … [2m + (h * c)] ],

[3m + c], [3m + 2c], [3m + 3c] … [3m + (h * c)] ],

… etc. up to [H * m + (h * c)]

]
```

Where H is the maximum number of modulator harmonics used, and h is the maximum number of carrier harmonics used. Different combinations of harmonics in the carrier and modulator, as well as combinations of sum and/or difference tones produce different results. Experimentation is key.

When utilizing difference tones, it is possible to generate negative frequencies by subtracting a higher carrier frequency from a lower modulator frequency. In this case, the convention is to simply use the absolute value of all frequencies (convert negatives to positive by multiplying by -1).

One of the distinctive characteristics of this technique is the way in which it undermines octave equivalence. If the same frequency (in Hertz) is added to the same pitch class in two different octaves it will produce two new pitches that are not necessarily an octave apart. Additionally, the same harmonic interval between modulator and carrier voices will produce different colueurs at different pitch levels. This can be heard by contrasting the couleurs surrounding the F#-C tritone in m. 29 of Lonely Child with the F-B tritone in m. 38. These irregularities make the couleurs process fertile ground for experimentation and exploration.

---

#### _Do It Yourself_

Traditional note names or pitch class numbers won’t work for generating ring mod-inspired couleurs, since both of these systems linearize geometric frequency relationships and assume octave equivalence. Pitches need to be converted to Hertz (cycles per second) before the addition and subtraction process and then converted back into conventional notes to be realized by performers. Fortunately, once the pitch-to-Hz conversion is done the math is very simple using the formulas shown above and can be easily implemented in a number of software tools, even including spreadsheet software. (Vivier worked out this pitch material by hand and photos of his notebooks can be seen in Bob Gilmore’s 2007 analysis of Lonely Child in Tempo) However, if you are extremely math-averse the Cage library for Max and IRCAM’s OpenMusic both provide tools for experimenting with ring modulation without leaving the comfort of notation-land.

MIDI note numbers are a useful and standardized way of enumerating pitches (middle C = 60, C# = 61, etc.). You can simply look up their corresponding frequencies (Hz) on widely-available tables. Virtually every music-centered programming environment (Max, Pd, SuperCollider, etc.) also provides a function to convert from MIDI to frequency. If you decide to roll your own function, the MIDI-to-Hz conversion formula is as follows (assuming A=440 Hz):

_f = 2^((d - 69)/12) * 440_

Where d is the MIDI note number and f is its corresponding frequency in Hertz. Once you have pitches represented as frequency values, simply experiment with adding and subtracting frequencies to produce some Vivier-esque couleurs. Reverse the formula to convert back to MIDI note numbers:

_d = 69 + (12 * log2 * (f / 440)_

I have included SuperCollider code at the end of this post (after the references) if you are interested in using that platform to experiment with this technique.

Finally, this process will almost certainly produce pitches that fall outside of standard twelve-tone equal temperament (non-integer MIDI notes, e.g. 71.4329). It’s up to you to decide how precise you wish to be with the process. Claude Vivier himself rounded to quarter tones; other composers using similar techniques have utilized sixth-tone and even twelfth-tone (72EDO) precision. In my own experimentation with this technique, I have found that some microtonal inflection (at least quarter tones) helps accentuate the strangeness of the pitch material, but the process can yield fascinating pitch constructions even in 12EDO.

---

#### _Conclusion_

This post is not meant to be a thorough analysis of Vivier’s Lonely Child, nor even a complete description of his technique of les couleurs/jeu de timbres, which he began using before Lonely Child and continued to develop until his untimely death. It is meant to describe the building blocks of this process to encourage experimentation with ring-modulated pitch material in the acoustic realm. As Vivier demonstrated, les colueurs have enormous expressive potential in this context and allow complex pitch constructions to be generated from a minimal amount of germinal material.

---

#### _References_

Bryan Christian, "Combination-Tone Class Sets and Redefining the role of les Couleurs in Claude Vivier's Bouchara," Music Theory Online 20, No. 2 (June 2014). https://mtosmt.org/issues/mto.14.20.2/mto.14.20.2.christian.html

Bob Gilmore, "On Claude Vivier's 'Lonely Child'," Tempo 61, No. 239 (January 2007): 2-17.

Paul Griffiths, “From the Edge of Experience, a New Sound,” New York Times (December 1, 1996).

Emily Koh, "Seeking Spiritual Liberation: Gong Cycles and Dissolutions in Claude Vivier's Prologue pour un Marco Polo," (PhD diss. Brandeis University, 2017).

Robert Markow, Programme Notes for Lonely Child (National Arts Centre Canada)

Boosey & Hawkes Composer Page for Claude Vivier

Lonely Child text (Chantal Pitcher)

#### _SuperCollider Code_

```
/* 
SUM & DIFFERENCE TONE PITCH GENERATOR TOOL
inspired by CLAUDE VIVIER'S "COULEURS"
Each of the functions below takes a "modulator" and "carrier" pitch
(in MIDI notes) and returns an array of MIDI notes representing the
sum and/or difference tones created by "ring modulating" the two pitches.
Using multiple harmonics of the mod and/or carrier yields a larger
pitch collection and the s/d tones are different in each octave.
Read the original blog post for more information: 
www.lawtonhall.com/blog/claude-viver-couleurs
Free to use, share, and adapt.
Created by Lawton Hall in 2020.
*/

(
/* SUM TONES ONLY with MODULATOR HARMONICS  */

var modPitch, carrierPitch, modHarmonics, ringMod;
modPitch = 60;            // modulator pitch (MIDI note)
carrierPitch = 21;        // carrier pitch (MIDI note)
modHarmonics = 5;         // number of modulator harmonics
ringMod = Array.fill(modHarmonics, {
	|i|
	((modPitch.midicps * (i+1)) + carrierPitch.midicps).abs.cpsmidi;
});
ringMod.postln;
);


(
/* DIFFERENCE TONES ONLY with MODULATOR HARMONICS  */

var modPitch, carrierPitch, modHarmonics, ringMod;
modPitch = 60;            // modulator pitch (MIDI note)
carrierPitch = 21;        // carrier pitch (MIDI note)
modHarmonics = 5;         // number of modulator harmonics
ringMod = Array.fill(modHarmonics, {
	|i|
	((modPitch.midicps * (i+1)) - carrierPitch.midicps).abs.cpsmidi;
});
ringMod.postln;
);


(
/* SUM & DIFFERENCE TONES with MODULATOR HARMONICS  */

var modPitch, carrierPitch, modHarmonics, ringMod;
modPitch = 60;            // modulator pitch (MIDI note)
carrierPitch = 21;        // carrier pitch (MIDI note)
modHarmonics = 5;         // number of modulator harmonics
ringMod = Array.fill(modHarmonics, {
	|i|
	[
		((modPitch.midicps * (i+1)) + carrierPitch.midicps),
		((modPitch.midicps * (i+1)) - carrierPitch.midicps),
	].abs.cpsmidi;
});
ringMod.postln;
);


(
/* SUM & DIFFERENCE TONES with MOD & CARRIER HARMONICS  */

var modPitch, carrierPitch, modHarmonics, carrierHarmonics, ringMod;
modPitch = 60;            // modulator pitch (MIDI note)
carrierPitch = 21;        // carrier pitch (MIDI note)
modHarmonics = 3;         // number of modulator harmonics
carrierHarmonics = 2;     // number of carrier harmonics
ringMod = Array.fill(modHarmonics, {
	|i|
	Array.fill(carrierHarmonics, {
		|j|
		[
			(modPitch.midicps * (i+1)) + (carrierPitch.midicps * (j+1)),
			(modPitch.midicps * (i+1)) - (carrierPitch.midicps * (j+1))
		].abs.cpsmidi;
	})});
ringMod.postln;
);
```

