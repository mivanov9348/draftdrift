from faker import Faker
import random
from world.models import World
from .models import Character

fake = Faker()

ROLES = ["Hero", "Villain", "Neutral"]

def generate_random_character():
    worlds = World.objects.all()
    if not worlds.exists():
        print("Няма налични светове! Създайте поне един свят.")
        return None

    world = random.choice(worlds)
    name = fake.name()
    age = random.randint(18, 80)
    description = fake.text(200)
    character = Character.objects.create(
        world=world,
        name=name,
        age=age,
        description=description,
    )
    return character

def generate_multiple_characters(n=10):
    for _ in range(n):
        generate_random_character()
    print(f"{n} героя са създадени успешно!")
