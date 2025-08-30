import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TerminalLove: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Love OS Terminal v2.0',
    'Welcome to the Enhanced Terminal of Love 💕',
    'Type "help" to see all available commands',
    ''
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  love --pickup     Generate a romantic pickup line',
      '  date --next       Suggest a future date idea',
      '  echo <message>    Display your message with hearts',
      '  memory --random   Show a random memory',
      '  fortune          Get a love fortune',
      '  clear            Clear the terminal',
      '  heart            Display ASCII heart',
      '  kiss             Send virtual kisses',
      '  hug              Virtual warm hug',
      '  compliment       Get a sweet compliment',
      '  poem             Generate a love poem',
      '  quote            Romantic quote of the day',
      '  song             Suggest a romantic song',
      '  future           Predict your romantic future',
      '  stats            Show relationship statistics',
      '  mood             Set romantic mood',
      '  weather          Love weather forecast',
      '  time             Show love time',
      ''
    ],
    'love --pickup': () => [
      pickupLines[Math.floor(Math.random() * pickupLines.length)],
      ''
    ],
    'date --next': () => [
      dateIdeas[Math.floor(Math.random() * dateIdeas.length)],
      ''
    ],
    'memory --random': () => [
      memories[Math.floor(Math.random() * memories.length)],
      ''
    ],
    fortune: () => [
      fortunes[Math.floor(Math.random() * fortunes.length)],
      ''
    ],
    kiss: () => [
      kisses[Math.floor(Math.random() * kisses.length)],
      ''
    ],
    hug: () => [
      hugs[Math.floor(Math.random() * hugs.length)],
      ''
    ],
    compliment: () => [
      compliments[Math.floor(Math.random() * compliments.length)],
      ''
    ],
    poem: () => [
      poems[Math.floor(Math.random() * poems.length)],
      ''
    ],
    quote: () => [
      quotes[Math.floor(Math.random() * quotes.length)],
      ''
    ],
    song: () => [
      songs[Math.floor(Math.random() * songs.length)],
      ''
    ],
    future: () => [
      futures[Math.floor(Math.random() * futures.length)],
      ''
    ],
    stats: () => [
      '💕 Your Love Stats:',
      '  Days together: xyz',
      '  Messages sent: xyz',
      '  Calls made: xyz',
      '  Emojis shared: xyz',
      '  "I love you" count: xyz',
      '  Happiness level: Infinite 💖',
      ''
    ],
    mood: () => [
      moods[Math.floor(Math.random() * moods.length)],
      ''
    ],
    weather: () => [
      loveWeather[Math.floor(Math.random() * loveWeather.length)],
      ''
    ],
    time: () => [
      `💕 Love Time: ${new Date().toLocaleTimeString()}`,
      'Every moment with you is precious ⏰',
      ''
    ],
    clear: () => {
      setHistory(['Love OS Terminal v2.0', 'Welcome to the Enhanced Terminal of Love 💕', '']);
      return [];
    },
    heart: () => [
      '  ♥♥♥♥♥♥♥♥♥',
      ' ♥♥♥♥♥♥♥♥♥♥♥',
      '♥♥♥♥♥♥♥♥♥♥♥♥♥',
      '♥♥♥♥♥♥♥♥♥♥♥♥♥',
      ' ♥♥♥♥♥♥♥♥♥♥♥',
      '  ♥♥♥♥♥♥♥♥♥',
      '   ♥♥♥♥♥♥♥',
      '    ♥♥♥♥♥',
      '     ♥♥♥',
      '      ♥',
      ''
    ]
  };

  const pickupLines = [
    "Are you WiFi? Because I'm feeling a connection 💕",
    "Do you have a map? I keep getting lost in your eyes 🗺️",
    "Are you a magician? Every time I look at you, everyone else disappears ✨",
    "If you were a vegetable, you'd be a cute-cumber 🥒",
    "Do you believe in love at first sight, or should I walk by again? 👀"
  ];

  const dateIdeas = [
    "🌅 Watch the sunrise together with hot coffee",
    "🎨 Take a pottery class and make something together",
    "🌟 Go stargazing in a field with blankets and snacks",
    "🍳 Cook a fancy dinner together at home",
    "📚 Visit a bookstore and pick books for each other",
    "🌸 Have a picnic in a beautiful garden",
    "🎭 Attend a local theater performance",
    "🏛️ Explore a museum and discuss the art"
  ];

  const memories = [
    "💕 Remember when we first held hands? My heart skipped a beat",
    "🌧️ That rainy day when we danced in the living room",
    "☕ Our first coffee date where we talked for hours",
    "🌅 The morning you made me breakfast in bed",
    "🎵 When we sang our favorite song in the car together",
    "📱 Our first 'good morning' text that made me smile all day"
  ];

  const fortunes = [
    "💖 Your love story is just beginning - the best chapters are yet to come",
    "🌟 A surprise romantic gesture is heading your way soon",
    "💕 Your relationship will grow stronger with each passing day",
    "🌹 Love will bloom in unexpected ways this month",
    "💫 Your bond is unbreakable and will inspire others"
  ];

  const kisses = [
    "💋 Sending you a thousand virtual kisses!",
    "😘 *smooch* - that one's extra special",
    "💋💋💋 Triple kiss combo for my favorite person!",
    "😙 A gentle kiss on your forehead 💕",
    "💋 Kiss delivery complete! Hope it made you smile ✨"
  ];

  const hugs = [
    "🤗 *big warm hug* - you're never alone when you have me",
    "🫂 Sending you the coziest virtual hug ever!",
    "🤗 *squeezes tight* - this hug comes with extra love",
    "🫂 Here's a hug that lasts as long as you need it 💕",
    "🤗 *bear hug* - because you deserve all the comfort"
  ];

  const compliments = [
    "✨ You have the most beautiful smile that lights up my world",
    "💫 Your laugh is my favorite sound in the universe",
    "🌟 You make ordinary moments feel magical",
    "💖 Your kindness makes you absolutely radiant",
    "🌙 You're the most amazing person I've ever met",
    "💕 Your presence makes everything better"
  ];

  const poems = [
    "🌹 Roses are red, violets are blue,\n    No poem could capture how much I love you 💕",
    "✨ In your eyes I see the stars,\n    In your smile I find my peace,\n    With you, my love never departs,\n    And my happiness will never cease 🌟",
    "💫 You are my sunshine on cloudy days,\n    My anchor in stormy weather,\n    Through all of life's mysterious ways,\n    We'll always be together 🌈"
  ];

  const quotes = [
    "💕 'Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.'",
    "🌟 'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.'",
    "💖 'You are my today and all of my tomorrows.' - Leo Christopher",
    "✨ 'I love you not only for what you are, but for what I am when I am with you.'"
  ];

  const songs = [
    "🎵 'Perfect' by Ed Sheeran - because you're perfect to me",
    "🎶 'All of Me' by John Legend - you have all of my heart",
    "🎵 'Thinking Out Loud' by Ed Sheeran - for those quiet moments",
    "🎶 'Make You Feel My Love' by Adele - pure emotion",
    "🎵 'Better Days' by OneRepublic - for our bright future together"
  ];

  const futures = [
    "🔮 I see many adventures in your future, hand in hand with your soulmate",
    "✨ The universe is aligning to bring you even more love and happiness",
    "🌟 Your love story will inspire others and create ripples of joy",
    "💫 Many beautiful sunrises await you two lovebirds",
    "🎭 Plot twist: your love story gets even more amazing from here!"
  ];

  const moods = [
    "🌸 Setting mood to: Romantic Spring Garden 🌷",
    "🌙 Mood activated: Moonlit Serenade 🎶",
    "🔥 Current vibe: Passionate and Playful 💃",
    "☁️ Mood set to: Dreamy Cloud Nine ☁️",
    "🌅 Ambiance: Golden Hour Romance 🧡"
  ];

  const loveWeather = [
    "💕 Love forecast: 100% chance of butterflies with scattered heart showers",
    "🌈 Romantic weather: Sunny with a high chance of hand-holding",
    "✨ Love conditions: Perfect cuddling weather with warm fuzzy feelings",
    "🌟 Romance report: Clear skies ahead with unlimited happiness",
    "💖 Weather update: Heart-warming temperatures with gentle love breezes"
  ];

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd.startsWith('echo ')) {
      const message = cmd.slice(5);
      return [`💕 ${message} 💕`, ''];
    }
    
    if (commands[trimmedCmd as keyof typeof commands]) {
      return commands[trimmedCmd as keyof typeof commands]();
    }
    
    return [`Command not found: ${cmd}`, 'Type "help" for available commands', ''];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [...history, `$ ${input}`];
    
    if (input.trim().toLowerCase() === 'clear') {
      executeCommand(input);
      setInput('');
      return;
    }
    
    const output = executeCommand(input);
    setHistory([...newHistory, ...output]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/')}
            className="bg-love-500 hover:bg-love-600 text-white px-4 py-2 rounded font-sans transition-all duration-300"
          >
            ← Back to Love OS
          </button>
          <h1 className="text-xl font-bold text-love-400 font-sans">
            💻 Enhanced Terminal of Love
          </h1>
          <div></div>
        </div>

        <div 
          ref={terminalRef}
          className="bg-black rounded-lg p-4 h-96 overflow-y-auto mb-4 border border-green-600"
        >
          {history.map((line, index) => (
            <div key={index} className="mb-1 whitespace-pre-line">
              {line}
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-love-400 mr-2">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent outline-none flex-1 text-green-400"
              placeholder="Enter command..."
              autoFocus
            />
          </form>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 text-sm">
          <h3 className="text-love-400 font-bold mb-2">Quick Commands:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-green-300">
            {['love --pickup', 'kiss', 'hug', 'compliment', 'poem', 'quote', 'song', 'fortune', 'stats', 'mood', 'weather', 'heart'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => setInput(cmd)}
                className="text-left hover:text-love-400 transition-colors text-xs py-1"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalLove;
