import random

def greeting():
  greet = input("This is a game of War! Are you prepared for battle!?")
  if True:
    return ("Let the battle Begin!")
  else:
    return("You Are not strong enough!!")

print(greeting())

deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

deck_shapes = ['Hearts', 'Diamonds', 'Spades', 'Clubs']

random_num = random.choice(deck)
random_shape = random.choice(deck_shapes)

print(random_num, random_shape)

deck_2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

deck_shapes_2 = ['Hearts', 'Diamonds', 'Spades', 'Clubs']

random_num_2 = random.choice(deck_2)
random_shape_2 = random.choice(deck_shapes_2)

print(random_num_2, random_shape_2)