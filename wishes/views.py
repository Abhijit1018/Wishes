from django.shortcuts import render
import random
from django.http import JsonResponse

# Create your views here.

jokes_by_theme = {
    'classic': [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call fake spaghetti? An Impasta!",
        "Why did the bicycle fall over? Because it was two-tired!"
    ],
    'tech': [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "What's a computer's favorite snack? Microchips!",
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
        "What's the best thing about a Boolean? Even if you're wrong, you're only off by a bit."
    ],
    'animals': [
        "What do you call a fish with no eyes? Fsh!",
        "Why did the cat join the Red Cross? Because she wanted to be a first-aid kit!",
        "What do you get when you cross a snowman and a vampire? Frostbite."
    ]
}

blessings_by_theme = {
    'classic': [
        "May your days be as bright and cheerful as a sun-kissed meadow.",
        "Wishing you a future filled with endless joy and laughter.",
        "May you always find a reason to smile, today and every day."
    ],
    'tech': [
        "May your code always compile on the first try.",
        "Wishing you a life with zero bugs and 100% uptime.",
        "May your Wi-Fi be strong and your batteries fully charged."
    ],
    'animals': [
        "May you have the courage of a lion and the gentleness of a dove.",
        "Wishing you a life as playful and carefree as a pod of dolphins.",
        "May your heart be as light and free as a butterfly's wings."
    ]
}

def index(request):
    if request.method == 'POST':
        name = request.POST.get('name', 'Friend')
        theme = request.POST.get('theme', 'classic')
        
        blessing = random.choice(blessings_by_theme.get(theme, blessings_by_theme['classic']))
        joke = random.choice(jokes_by_theme.get(theme, jokes_by_theme['classic']))
        
        context = {
            'name': name,
            'blessing': blessing,
            'joke': joke,
            'theme': theme,
            'show_wish': True
        }
        return render(request, 'wishes/index.html', context)
    
    return render(request, 'wishes/index.html', {'show_wish': False})

def get_new_wish(request):
    theme = request.GET.get('theme', 'classic')
    blessing = random.choice(blessings_by_theme.get(theme, blessings_by_theme['classic']))
    joke = random.choice(jokes_by_theme.get(theme, jokes_by_theme['classic']))
    return JsonResponse({'blessing': blessing, 'joke': joke})
