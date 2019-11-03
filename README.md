# Rolling code
Let's say you're at a store and their bathroom has a keycode. You try to guess
the keycode but you notice it never tells you when you're wrong. It's likely
that this keycode is a rolling code. A rolling code is one where it doesn't
matter how many characters you get wrong, and once you get the right code in
there it will immediately let you in.

This code makes the shortest code of a given alphabet and length that contains
every subsequence of the given length of characters of the given alphabet.

Usage: `node main.js alphabet length`

Warning: It's very easy to run out of memory with this algorithm
