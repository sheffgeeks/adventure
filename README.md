Text Adventure!
===============

To play
-------

Install dependencies using `npm install`, then run using `./bin/play`.

Co-ordinates system
-------------------

     _____   _____   _____   _____   _____
    [     ] [     ] [     ] [     ] [     ]
    [n2w2 ] [n2w1 ] [ n2  ] [n2e1 ] [n2e2 ]
    [_____] [_____] [_____] [_____] [_____]
     _____   _____   _____   _____   _____
    [     ] [     ] [     ] [     ] [     ]
    [n1w2 ] [n1w1 ] [ n1  ] [n1e1 ] [n1e2 ]
    [_____] [_____] [_____] [_____] [_____]
     _____   _____   _____   _____   _____
    [     ] [     ] [     ] [     ] [     ]
    [ w2  ] [ w1  ] [start] [ e1  ] [ e2  ]
    [_____] [_____] [_____] [_____] [_____]
     _____   _____   _____   _____   _____
    [     ] [     ] [     ] [     ] [     ]
    [s1w2 ] [s1w1 ] [ s1  ] [s1e1 ] [s1e2 ]
    [_____] [_____] [_____] [_____] [_____]
     _____   _____   _____   _____   _____
    [     ] [     ] [     ] [     ] [     ]
    [s2w2 ] [s2w2 ] [ s2  ] [s2e1 ] [s2e2 ]
    [_____] [_____] [_____] [_____] [_____]


Defining a tile
---------------

Simply create a file with the location as it's name in the `tiles`
directory, eg. `tiles/n1w1.js`.

It should have the following exports:

* __shortDescription(player)__ - a function returning a short string,
  which completes the sentence "To the north you see..."
* __describe(player)__ - a function called when describing the scene, it
  should console.log values directly.
* __action(player, action)__ - a function which handles player input on this
  tile. This is where most of the logic for the scene will go. Actions such
  as movement or looking in inventory are handled in the main game loop at
  `lib/main.js`.

You can also add other functions or variables relevant to the scene in this
module.

Player API
----------

The player object has the following properties:

* __name__ - the name entered by the player at the start
* __location__ - the location of the player, eg. 'start' or 's2w1'
* __inventory__ - a javascript object mapping item names to a count

There are also the following functions available:

* __win()__ - the player wins the game!
* __setLocation(location)__ - this moves the player to the given location.
  You shouldn't need to call this - the user will move around on their own.
* __move(direction)__ - moves in the given direction, eg. 'north' - again,
  you shouldn't need to call this.


Adding vocabulary
-----------------

The array of words given as the `action` argument provided to the action
function exported by tiles has words normalised using a list. For example,
'look', 'inspect' and 'examine' are all converted to 'look' to make it
easier to match against.

You can add synonyms for more words to this list by editing `lib/words.js`.

Thanks
------

This code is heavily inspired by the Python version used at a Python
Sheffield meetup a couple of years ago. You can find the original python
code here: https://github.com/gistfoundation/adventuregame-pysheff
