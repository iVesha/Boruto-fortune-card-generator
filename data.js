const cards = [

    {
        name: "Uzumaki Boruto",
        description: `Your courageous actions will encourage the people around you, and you will also greatly benefit from them. If you don't neglect doing good, your efforts up until now will be rewarded, and you will have a happy and prosperous year.`,
        blessingType: "Great Blessing",
        stats: {
            competitions: "Very Good",
            love: "Very Good",
            health: "Very Good",
            studies: "Very Good",
            money: "Very Good"
        },
        luckyItem: "Hamburger"
    },
    {
        name: "Uzumaki Naruto",
        description: `You will have a very fulfilling year, blessed with work. However, rely on others when you get busy. Your friends and family, who know your hard work, will surely lend you a helping hand.`,
        blessingType: "Middle Blessing",
        stats: {
            competitions: "Very Good",
            love: "Very Good",
            health: "Good",
            studies: "Good",
            money: "Good"
        },
        luckyItem: "Ramen"
    },
    {
        name: "Tōno Katasuke",
        description: `You're passionate about research. While troubled not being able to produce results, you must be careful not to be deceived by evil temptations. Believe in yourself and continue your research, you will surely achieve wonderful results that will save many people.`,
        blessingType: "Future Blessing",
        stats: {
            competitions: "Average",
            love: "Average",
            health: "Bad",
            studies: "Very Good",
            money: "Average"
        },
        luckyItem: "Powered Suit"
    },
    {
        name: "Kaminarimon Denki",
        description: `You are experiencing your own growth. However, your rivals are also further achieving growth. If you continue to forge yourself without ever being prideful, you can expect even more progress this year.`,
        blessingType: "Future Blessing",
        stats: {
            competitions: "Bad",
            love: "Bad",
            health: "Bad",
            studies: "Good",
            money: "Very Good"
        },
        luckyItem: "Laptop"
    },
    {
        name: "Yamanaka Sai",
        description: `Your talent for art will explode right away this year. So why don't you try writing (calligraphy) something this New Year's Day? Your fortune will also increase by coming in contact with museums and such regarding your art.`,
        blessingType: "Blessing",
        stats: {
            competitions: "Very Good",
            love: "Good",
            health: "Good",
            studies: "Very Good",
            money: "Average"
        },
        luckyItem: "writing Brush"
    },
    {
        name: "Orochimaru",
        description: `Being an 'addicted to their shady research' type of character, you sometimes get too absorbed in things and seek out crazy outcomes. If you can focus that same enthusiasm towards helping someone, your reputation will greatly increase.`,
        blessingType: "Great Curse",
        stats: {
            competitions: "Bad",
            love: "Very Bad",
            health: "Bad",
            studies: "Very Good",
            money: "Bad"
        },
        luckyItem: "Snake skin"
    },
    {
        name: "Uchiha Sarada",
        description: `It'll be a year of great progress towards big goals. There may also be instances where you are reminded of how grateful you are for those close to you. At those times, make sure to be upfront and convey your gratitude to them.`,
        blessingType: "Great Blessing",
        stats: {
            competitions: "Very Good",
            love: "Good",
            health: "Very Good",
            studies: "Very Good",
            money: "Good"
        },
        luckyItem: "Red Frame Glasses"
    },
    {
        name: "Akimichi Chōchō",
        description: `It'll be a year with a particularly high fortune for food. Try a lot of different foods without being picky. However, be careful not to overeat. Moderate exercise after your meals is the key to good fortune.`,
        blessingType: "Blessing",
        stats: {
            competitions: "Good",
            love: "Average",
            health: "Very Good",
            studies: "Average",
            money: "Average"
        },
        luckyItem: "Potato Chips"
    },
    {
        name: "Nara Shikadai",
        description: `You go at your own pace, you own a mind that allows you to remain calm at all times. Even if people around you think you are too carefree, sticking to your own pace is the key to good fortune.`,
        blessingType: "Blessing",
        stats: {
            competitions: "Good",
            love: "Average",
            health: "Good",
            studies: "Very Good",
            money: "Average"
        },
        luckyItem: "Mobile Games"
    },
    {
        name: "Sarutobi Konohamaru",
        description: `You are dear to everyone and a reliable person. If you aim to be a role model for those around you, both you and them will be able to greatly grow this year.`,
        blessingType: "Small Blessing",
        stats: {
            competitions: "Good",
            love: "Average",
            health: "Average",
            studies: "Good",
            money: "Good"
        },
        luckyItem: "Scarf"
    },
    {
        name: "Uchiha Sakura",
        description: `You keep an inner fighting spirit behind your gentle love. If you are caught in a dilemma, you can surely get through it by taking on an active role. This year is also suitable for acquiring new knowledge.`,
        blessingType: "Middle Blessing",
        stats: {
            competitions: "Good",
            love: "Very Good",
            health: "Good",
            studies: "Very Good",
            money: "Good"
        },
        luckyItem: "Book"
    },
    {
        name: "Metal Lee",
        description: `For you who are full of ambitions, results might be hard to come by, which could put you down this year. However, if you don't neglect your efforts and continue improving, the situation will surely change for the better.`,
        blessingType: "Future Blessing",
        stats: {
            competitions: "Bad",
            love: "Bad",
            health: "Good",
            studies: "Average",
            money: "Average"
        },
        luckyItem: "Dumbbell"
    },
    {
        name: "Yamanaka Inojin",
        description: `If you can't say anything nice, don't say anything at all. Even if you didn't have bad intentions, a nonchalant comment can incidentally hurt a friend. By paying attention to your remarks, you will be able to have a peaceful year.`,
        blessingType: "Blessing",
        stats: {
            competitions: "Good",
            love: "Good",
            health: "Average",
            studies: "Average",
            money: "Good"
        },
        luckyItem: "Sketchbook"
    },
    {
        name: "Mugino",
        description: `You have an outstanding discernment and can thoroughly support those around you. However, you might get dragged into big trouble. Bear in mind to be more cautious than ever this year.`,
        blessingType: "Small Blessing",
        stats: {
            competitions: "Good",
            love: "Average",
            health: "Average",
            studies: "Good",
            money: "Very Bad"
        },
        luckyItem: "Turtle"
    },
    {
        name: "Kashin Koji",
        description: `Through your overwhelming power and discernment, you will be relied upon by your leaders and entrusted with important matters. However, depending on your judgement, you may bring forth unexpected circumstances upon yourself.`,
        blessingType: "Curse",
        stats: {
            competitions: "Very Bad",
            love: "Bad",
            health: "Average",
            studies: "Very Good",
            money: "Average"
        },
        luckyItem: "Mask"
    },
    {
        name: "Uchiha Sasuke",
        description: `You're the type to express things through actions rather than words. Those around you also appreciate and rely on those actions. If you persist in what you believe in without looking back at your dark past, you will surely have a happy year.`,
        blessingType: "Middle Blessing",
        stats: {
            competitions: "Very Good",
            love: "Good",
            health: "Good",
            studies: "Very Good",
            money: "Good"
        },
        luckyItem: "Black Cloak"
    },
    {
        name: "Uzumaki Himawari",
        description: `There might be major changes in your life. Even if you get wrapped up in an unforeseen event, cope with it calmly. Your good judgement will become an opportunity to change someone's future for the better.`,
        blessingType: "Small Blessing",
        stats: {
            competitions: "Good",
            love: "Average",
            health: "Very Good",
            studies: "Bad",
            money: "Bad"
        },
        luckyItem: "Flower Vase"
    },
    {
        name: "Yuino Iwabee",
        description: `You will be able to grow this year by meeting good rivals. Even if you thought you wouldn't get along with a friend at first, having a solid conversation with them might end up in you encouraging each other and becoming best friends who do get along.`,
        blessingType: "Future Blessing",
        stats: {
            competitions: "Good",
            love: "Bad",
            health: "Good",
            studies: "Bad",
            money: "Average"
        },
        luckyItem: "Turban"
    },
    {
        name: "Kawaki",
        description: `Your environment will go through major changes this year. Be respectful to each and every person you meet, and be grateful for them. If you can look forward to those changes in life, your situation will surely change for the better.`,
        blessingType: "Great Curse",
        stats: {
            competitions: "Good",
            love: "Bad",
            health: "Very Bad",
            studies: "Bad",
            money: "Bad"
        },
        luckyItem: "Taiyaki"
    },
    {
        name: "Ōtsutsuki Momoshiki",
        description: `Sometimes, when you exhibit a power that goes beyond human comprehension, you end up looking out of place. You can't keep treating others like inferior lifeforms. Work on actively absorbing the good things about others.`,
        blessingType: "Curse",
        stats: {
            competitions: "Very Bad",
            love: "Very Good",
            health: "Bad",
            studies: "Very Bad",
            money: "Bad"
        },
        luckyItem: "Peaches"
    },
    {
        name: "Kakei Sumire",
        description: `You are considered serious and shy. But hidden deep within your heart, there is also a side of you that is audacious. Sometimes, being courageous and taking bold actions can be a catalyst for great fortune.`,
        blessingType: "Small Blessing",
        stats: {
            competitions: "Average",
            love: "Good",
            health: "Average",
            studies: "Very Good",
            money: "Bad"
        },
        luckyItem: "Bread Crust"
    },
    {
        name: "Nara Shikamaru",
        description: `You don't like standing out publicly, but with your sharp mind and high capability, you are the leader in the shadows supporting the team. This year, the situations in which your discernment will be needed will increase.`,
        blessingType: "Blessing",
        stats: {
            competitions: "Good",
            love: "Good",
            health: "Average",
            studies: "Very Good",
            money: "Average"
        },
        luckyItem: "Shogi"
    },
    {
        name: "Kurama",
        description: `Even though you hold a great innate power within you, you currently cannot fully make use of it so you might get irritated. However, when you use it for someone else's sake, you'll be able to display a power far greater than anything before.`,
        blessingType: "Small Blessing",
        stats: {
            competitions: "Very Good",
            love: "Bad",
            health: "Average",
            studies: "Good",
            money: "Average"
        },
        luckyItem: "Kitsune Udon"
    },
    {
        name: "Ao",
        description: `You know a lot about the latest equipment, and are good at using it. However, anything depends on 'how' you use it. If you misuse it, you will surely have to pay a big price. Be cautious.`,
        blessingType: "Curse",
        stats: {
            competitions: "Good",
            love: "Very Bad",
            health: "Average",
            studies: "Bad",
            money: "Bad"
        },
        luckyItem: "Screwdriver"
    },
    {
        name: "Delta",
        description: `You easily doubt people's nature, so you end up jumping at shadows. With that state of mind, you'll keep making mistakes. Try to act genuinely from time to time and don't get too frustrated.`,
        blessingType: "Curse",
        stats: {
            competitions: "Average",
            love: "Average",
            health: "Average",
            studies: "Average",
            money: "Average"
        },
        luckyItem: "Onigiri"
    },
    {
        name: "Izunuka Akita",
        description: `You can fully concentrate and get absorbed in your studies. Actively taking the advice of a reliable senpai will surely bring about great accomplishments for you.`,
        blessingType: "Future Blessing",
        stats: {
            competitions: "Bad",
            love: "Very Good",
            health: "Good",
            studies: "Good",
            money: "Bad"
        },
        luckyItem: "Dog Keychain"
    },
    {
        name: "Yamanaka Ino",
        description: `Since you have the most keen sensitivity, you can quickly notice changes in your surroundings and can take precautions to prevent a crisis. However, there is also a side of you that can get easily riled up and break your cool, so be careful.`,
        blessingType: "Blessing",
        stats: {
            competitions: "Good",
            love: "Good",
            health: "Average",
            studies: "Good",
            money: "Good"
        },
        luckyItem: "Flower Bouquet"
    },
    {
        name: "Uzumaki Hinata",
        description: `You who are full of love, will become a great strength that supports your wounded friends and inspires them courage. You will become someone others can rely on even moreso than before, it will surely be a fulfilling year.`,
        blessingType: "Middle Blessing",
        stats: {
            competitions: "Good",
            love: "Very Good",
            health: "Very Good",
            studies: "Good",
            money: "Good"
        },
        luckyItem: "Family Picture"
    },
    {
        name: "Jigen",
        description: `When you are ruled by negative emotions, and can't restrain your destructive impulses, remember to first take a deep breath! And why not also try eating some delicious rice in a lovely vessel? ;)`,
        blessingType: "Great Curse",
        stats: {
            competitions: "Very Bad",
            love: "Very Bad",
            health: "Very Bad",
            studies: "Very Bad",
            money: "Very Bad"
        },
        luckyItem: "Vessel"
    },
    {
        name: "Mitsuki",
        description: `You are usually a calm person with a mysterious aura around you. However, there is a side of you that can become fraught with emotion when it comes to your friends. That side of you is the one that often becomes the centre of attention. It will be a promising year in which you will be able to steadily display even more of your charm.`,
        blessingType: "Great Blessing",
        stats: {
            competitions: "Very Good",
            love: "Very Good",
            health: "Good",
            studies: "Very Good",
            money: "Good"
        },
        luckyItem: "Supplements"
    }

]