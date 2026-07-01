export const levels = [
  {
    "id": "py_hello_teach",
    "mode": "teach",
    "title": "Hello, World!",
    "phase": "Python",
    "topic": "Hello World",
    "story": "Every quest begins with a single step: telling the computer to speak.",
    "explanation": [
      "print() is a built-in function that displays text on the screen.",
      "Anything inside the parentheses, wrapped in quotes, is called a 'string' — just text.",
      "Python runs your code one line at a time, from top to bottom."
    ],
    "diagram": null,
    "starterCode": "print(\"Hello, world!\")",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_hello_challenge"
    ]
  },
  {
    "id": "py_hello_challenge",
    "mode": "challenge",
    "title": "Hello World Challenge",
    "phase": "Python",
    "topic": "Hello World",
    "story": "Now you write the print statement! It should print exactly: Hello, world!",
    "explanation": [],
    "diagram": null,
    "starterCode": "# write a print statement below\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Hello, world!\n"
      }
    ],
    "hints": [
      "Use print(\"...\") with your text inside the quotes."
    ],
    "xpReward": 10,
    "coinReward": 10,
    "unlocks": [
      "py_comments_teach"
    ]
  },
  {
    "id": "py_comments_teach",
    "mode": "teach",
    "title": "Secret Notes & Special Characters",
    "phase": "Python",
    "topic": "Comments & Escape Sequences",
    "story": "Comments are notes for humans that Python ignores. Escape sequences let strings contain special characters.",
    "explanation": [
      "# starts a single-line comment — Python skips everything after it on that line.",
      "'''triple quotes''' make a multi-line comment or note.",
      "\\n inside a string means 'start a new line'; \\t means 'insert a tab'.",
      "\\\" lets you put a literal double-quote inside a double-quoted string.",
      "print() also accepts sep= (what goes between items) and end= (what goes after everything)."
    ],
    "diagram": null,
    "starterCode": "# This prints two lines because of \\n\nprint(\"Hero\\nMage\")\nprint(\"Col1\\tCol2\")\nprint(\"A\", \"B\", \"C\", sep=\" - \", end=\"!\\n\")",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_comments_challenge"
    ]
  },
  {
    "id": "py_comments_challenge",
    "mode": "challenge",
    "title": "The Coded Message",
    "phase": "Python",
    "topic": "Comments & Escape Sequences",
    "story": "Print exactly two lines: \"Sword\" then \"Shield\", using ONE print() call and \\n.",
    "explanation": [],
    "diagram": null,
    "starterCode": "# use a single print() call with \\n inside the string\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Sword\nShield\n"
      }
    ],
    "hints": [
      "One print(\"Sword\\\\nShield\") call does it — \\\\n breaks the line."
    ],
    "xpReward": 20,
    "coinReward": 10,
    "unlocks": [
      "py_vars_teach"
    ]
  },
  {
    "id": "py_vars_teach",
    "mode": "teach",
    "title": "Variables Intro",
    "phase": "Python",
    "topic": "Variables",
    "story": "A variable is a labeled box that holds a value so you can use it later.",
    "explanation": [
      "Creating a variable is called 'assignment': name = value.",
      "The box's label (name) stays the same, but what's inside it can change later.",
      "Variable names are case-sensitive: hp and HP are two different boxes."
    ],
    "diagram": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"180\" y=\"24\" text-anchor=\"middle\" font-size=\"15\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">name = \"Hero\"</text><rect x=\"120\" y=\"40\" width=\"120\" height=\"50\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"180.0\" y=\"69.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"Hero\"</text><text x=\"180\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">the box, labeled \"name\"</text><text x=\"180\" y=\"148\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">print(name)  -&gt;  looks inside the box,</text><text x=\"180\" y=\"168\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">prints \"Hero\"</text></svg>",
    "starterCode": "name = \"Hero\"\nprint(name)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_vars_challenge"
    ]
  },
  {
    "id": "py_vars_challenge",
    "mode": "challenge",
    "title": "Treasure Chest",
    "phase": "Python",
    "topic": "Variables",
    "story": "Store \"gold coins\" in a variable and print it.",
    "explanation": [],
    "diagram": null,
    "starterCode": "treasure = \"???\"  # replace ??? with the right text\nprint(treasure)",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "gold coins\n"
      }
    ],
    "hints": [
      "treasure = 'gold coins'"
    ],
    "xpReward": 15,
    "coinReward": 10,
    "unlocks": [
      "py_typecast_teach"
    ]
  },
  {
    "id": "py_typecast_teach",
    "mode": "teach",
    "title": "Shapeshifting Values",
    "phase": "Python",
    "topic": "Typecasting",
    "story": "Typecasting converts a value from one data type to another.",
    "explanation": [
      "int('10') turns the text \"10\" into the number 10.",
      "str(25) turns the number 25 into the text \"25\".",
      "float('3.14') turns text into a decimal number.",
      "input() always returns a string — even if the user types a number, so you often need int() or float() to convert it."
    ],
    "diagram": "<svg viewBox=\"0 0 280 215\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:280px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"10\" y=\"20\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"55.0\" y=\"44.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"10\"</text><text x=\"55\" y=\"5\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">string</text><line x1=\"105\" y1=\"40\" x2=\"165\" y2=\"40\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"135\" y=\"30\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">int()</text><rect x=\"170\" y=\"20\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"215.0\" y=\"44.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">10</text><text x=\"215\" y=\"5\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">integer</text><rect x=\"10\" y=\"90\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"55.0\" y=\"114.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">25</text><text x=\"55\" y=\"75\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">integer</text><line x1=\"105\" y1=\"110\" x2=\"165\" y2=\"110\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"135\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">str()</text><rect x=\"170\" y=\"90\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"215.0\" y=\"114.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"25\"</text><text x=\"215\" y=\"75\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">string</text><rect x=\"10\" y=\"160\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"55.0\" y=\"184.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"3.14\"</text><text x=\"55\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">string</text><line x1=\"105\" y1=\"180\" x2=\"165\" y2=\"180\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"140\" y=\"170\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">float()</text><rect x=\"170\" y=\"160\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"215.0\" y=\"184.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3.14</text><text x=\"215\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">float</text></svg>",
    "starterCode": "num_str = \"10\"\nnum_int = int(num_str)\nprint(num_int + 5)\nprint(type(num_int))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_typecast_challenge"
    ]
  },
  {
    "id": "py_typecast_challenge",
    "mode": "challenge",
    "title": "The Alchemist",
    "phase": "Python",
    "topic": "Typecasting",
    "story": "Given age_text = \"16\", convert it to an integer and print age_text_as_int + 4.",
    "explanation": [],
    "diagram": null,
    "starterCode": "age_text = \"16\"\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "20\n"
      }
    ],
    "hints": [
      "Wrap age_text in int(...) before adding."
    ],
    "xpReward": 20,
    "coinReward": 10,
    "unlocks": [
      "py_input_teach"
    ]
  },
  {
    "id": "py_input_teach",
    "mode": "teach",
    "title": "User Input",
    "phase": "Python",
    "topic": "Input",
    "story": "input() pauses your program and waits for the player to type something.",
    "explanation": [
      "input('prompt') shows the prompt text, then waits for the user to type and press Enter.",
      "Whatever the user types comes back as a string — even digits.",
      "Combine it with typecasting (int(), float()) when you need a number."
    ],
    "diagram": null,
    "starterCode": "answer = input(\"What is your quest? \")\nprint(\"Your quest:\", answer)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_input_challenge"
    ]
  },
  {
    "id": "py_input_challenge",
    "mode": "challenge",
    "title": "Echo Chamber",
    "phase": "Python",
    "topic": "Input",
    "story": "Use input() to capture a word and print \"You said:\" followed by it.",
    "explanation": [],
    "diagram": null,
    "starterCode": "word = input()\n# print \"You said:\" followed by word\n",
    "testCases": [
      {
        "input": "adventure\n",
        "expectedOutput": "You said: adventure\n"
      }
    ],
    "hints": [
      "input() waits for user input, then print(\"You said:\", word)"
    ],
    "xpReward": 20,
    "coinReward": 10,
    "unlocks": [
      "py_operators_teach"
    ]
  },
  {
    "id": "py_operators_teach",
    "mode": "teach",
    "title": "Arithmetic & More",
    "phase": "Python",
    "topic": "Operators",
    "story": "Operators combine values: math operators, and two special ones Python beginners often miss.",
    "explanation": [
      "+ - * / are the basics; ** means 'to the power of' (2**3 = 8).",
      "// is floor division: it divides and throws away the remainder (7 // 2 = 3).",
      "% is the modulus: it gives you ONLY the remainder (7 % 2 = 1). Huge for 'is this number even?' checks."
    ],
    "diagram": "<svg viewBox=\"0 0 300 195\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"150\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">7 units split into groups of 2:</text><rect x=\"20\" y=\"40\" width=\"28\" height=\"28\" rx=\"6\" fill=\"#4ade80\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"34.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><rect x=\"52\" y=\"40\" width=\"28\" height=\"28\" rx=\"6\" fill=\"#4ade80\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"66.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><rect x=\"84\" y=\"40\" width=\"28\" height=\"28\" rx=\"6\" fill=\"#4ade80\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"98.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><rect x=\"116\" y=\"40\" width=\"28\" height=\"28\" rx=\"6\" fill=\"#4ade80\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"130.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><rect x=\"148\" y=\"40\" width=\"28\" height=\"28\" rx=\"6\" fill=\"#4ade80\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"162.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><rect x=\"180\" y=\"40\" width=\"28\" height=\"28\" rx=\"6\" fill=\"#4ade80\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"194.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><rect x=\"212\" y=\"40\" width=\"28\" height=\"28\" rx=\"6\" fill=\"#f87171\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"226.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"116\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">3 full groups of 2 (quotient)</text><text x=\"226\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" fill=\"#f87171\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1 left over (remainder)</text><text x=\"150\" y=\"150\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">7 // 2 = 3   (floor division: the quotient)</text><text x=\"150\" y=\"172\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">7 %  2 = 1   (modulus: the remainder)</text></svg>",
    "starterCode": "print(5 + 3)\nprint(10 - 2)\nprint(2 ** 3)\nprint(7 // 2)\nprint(7 % 2)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_operators_challenge"
    ]
  },
  {
    "id": "py_operators_challenge",
    "mode": "challenge",
    "title": "Magic Calculator",
    "phase": "Python",
    "topic": "Operators",
    "story": "Calculate the sum of a=5 and b=7. Expected output: 12",
    "explanation": [],
    "diagram": null,
    "starterCode": "a = 5\nb = 7\n# print their sum\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "12\n"
      }
    ],
    "hints": [
      "Use +"
    ],
    "xpReward": 15,
    "coinReward": 10,
    "unlocks": [
      "py_bool_teach"
    ]
  },
  {
    "id": "py_bool_teach",
    "mode": "teach",
    "title": "True or False?",
    "phase": "Python",
    "topic": "Comparisons & Booleans",
    "story": "Comparisons produce booleans (True/False); and/or/not combine them into bigger decisions.",
    "explanation": [
      "== checks equality (are these the same?); = assigns a value. Mixing these up is the #1 beginner bug!",
      "and needs BOTH sides True; or needs AT LEAST ONE side True; not flips True<->False.",
      "Comparisons can be chained: 13 <= age <= 19 checks two conditions at once."
    ],
    "diagram": null,
    "starterCode": "age = 20\nis_adult = age >= 18\nprint(is_adult)\nprint(True and False)\nprint(True or False)\nprint(not True)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_bool_challenge"
    ]
  },
  {
    "id": "py_bool_challenge",
    "mode": "challenge",
    "title": "The Age Gate",
    "phase": "Python",
    "topic": "Comparisons & Booleans",
    "story": "Print True if age is between 13 and 19 (a teenager), else False. Expected output: True",
    "explanation": [],
    "diagram": null,
    "starterCode": "age = 16\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Python allows chained comparisons: 13 <= age <= 19."
    ],
    "xpReward": 20,
    "coinReward": 10,
    "unlocks": [
      "py_conditionals_teach"
    ]
  },
  {
    "id": "py_conditionals_teach",
    "mode": "teach",
    "title": "If Statements",
    "phase": "Python",
    "topic": "Conditionals",
    "story": "if/elif/else let your program choose different paths depending on the situation.",
    "explanation": [
      "if runs its block only when the condition is True.",
      "elif ('else if') checks another condition if the first was False.",
      "else catches everything that didn't match any condition above it.",
      "Indentation (4 spaces) is how Python knows what belongs inside the if block."
    ],
    "diagram": "<svg viewBox=\"0 0 340 140\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"110\" y=\"10\" width=\"100\" height=\"36\" rx=\"6\" fill=\"#16233a\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"160.0\" y=\"32.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">num &gt; 0 ?</text><line x1=\"160\" y1=\"46\" x2=\"90\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"105\" y=\"72\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">True</text><line x1=\"190\" y1=\"46\" x2=\"250\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"235\" y=\"72\" text-anchor=\"middle\" font-size=\"11\" fill=\"#f87171\" font-family=\"Courier New, monospace\" font-weight=\"normal\">False</text><rect x=\"30\" y=\"92\" width=\"120\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"90.0\" y=\"114.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">print(\"Positive\")</text><rect x=\"200\" y=\"92\" width=\"120\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"260.0\" y=\"114.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">(skip this block)</text></svg>",
    "starterCode": "num = 5\nif num > 0:\n    print(\"Positive\")",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_conditionals_challenge"
    ]
  },
  {
    "id": "py_conditionals_challenge",
    "mode": "challenge",
    "title": "The Guarded Door",
    "phase": "Python",
    "topic": "Conditionals",
    "story": "Check if num=5 is positive. Print \"Enter\".",
    "explanation": [],
    "diagram": null,
    "starterCode": "num = 5\n# if num is positive, print \"Enter\"\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Enter\n"
      }
    ],
    "hints": [
      "if num > 0: print(\"Enter\")"
    ],
    "xpReward": 20,
    "coinReward": 10,
    "unlocks": [
      "py_match_teach"
    ]
  },
  {
    "id": "py_match_teach",
    "mode": "teach",
    "title": "Pattern Matching",
    "phase": "Python",
    "topic": "Match-Case",
    "story": "match-case (Python 3.10+) checks a value against several exact patterns cleanly.",
    "explanation": [
      "It's like a cleaner version of many elif checks against the SAME variable.",
      "Each 'case' is one possible pattern to match.",
      "case _ (underscore) is the wildcard 'anything else' default, like else."
    ],
    "diagram": "<svg viewBox=\"0 0 380 140\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"140\" y=\"10\" width=\"90\" height=\"34\" rx=\"6\" fill=\"#16233a\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"185.0\" y=\"31.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">status</text><line x1=\"160\" y1=\"44\" x2=\"70\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"95\" y=\"68\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">== 200</text><line x1=\"185\" y1=\"44\" x2=\"185\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">== 404</text><line x1=\"210\" y1=\"44\" x2=\"300\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"275\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">else (_)</text><rect x=\"10\" y=\"92\" width=\"110\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"65.0\" y=\"113.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"Success!\"</text><rect x=\"130\" y=\"92\" width=\"110\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"185.0\" y=\"113.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"Not Found\"</text><rect x=\"250\" y=\"92\" width=\"110\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"305.0\" y=\"113.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"Unknown Status\"</text></svg>",
    "starterCode": "status = 404\nmatch status:\n    case 200:\n        print(\"Success!\")\n    case 404:\n        print(\"Not Found\")\n    case _:\n        print(\"Unknown Status\")",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_match_challenge"
    ]
  },
  {
    "id": "py_match_challenge",
    "mode": "challenge",
    "title": "The Rank Oracle",
    "phase": "Python",
    "topic": "Match-Case",
    "story": "Given rank = 1, use match-case to print \"Champion\" for 1, \"Runner-up\" for 2, else \"Participant\".",
    "explanation": [],
    "diagram": null,
    "starterCode": "rank = 1\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Champion\n"
      }
    ],
    "hints": [
      "match rank: case 1: ... case 2: ... case _: ..."
    ],
    "xpReward": 25,
    "coinReward": 15,
    "unlocks": [
      "py_loops_teach"
    ]
  },
  {
    "id": "py_loops_teach",
    "mode": "teach",
    "title": "For Loops",
    "phase": "Python",
    "topic": "For Loops",
    "story": "A for loop repeats a block of code once for every item in a sequence.",
    "explanation": [
      "for item in sequence: runs the indented block once per item.",
      "range(1, 6) generates the numbers 1, 2, 3, 4, 5 (stops BEFORE 6).",
      "You can loop over lists, strings, ranges — anything 'iterable'."
    ],
    "diagram": "<svg viewBox=\"0 0 380 155\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">range(1, 6)  generates:</text><rect x=\"40\" y=\"34\" width=\"56\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"68.0\" y=\"60.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"106\" y=\"34\" width=\"56\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"134.0\" y=\"60.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"172\" y=\"34\" width=\"56\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"200.0\" y=\"60.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><rect x=\"238\" y=\"34\" width=\"56\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"266.0\" y=\"60.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><rect x=\"304\" y=\"34\" width=\"56\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"332.0\" y=\"60.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">5</text><path d=\"M68,34 Q101.0,8 134,34\" stroke=\"#38bdf8\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#arrow)\"/><path d=\"M134,34 Q167.0,8 200,34\" stroke=\"#38bdf8\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#arrow)\"/><path d=\"M200,34 Q233.0,8 266,34\" stroke=\"#38bdf8\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#arrow)\"/><path d=\"M266,34 Q299.0,8 332,34\" stroke=\"#38bdf8\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#arrow)\"/><text x=\"190\" y=\"128\" text-anchor=\"middle\" font-size=\"12\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">the loop visits each box left to right,</text><text x=\"190\" y=\"146\" text-anchor=\"middle\" font-size=\"12\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">running print(i) once per box</text></svg>",
    "starterCode": "for i in range(1, 6):\n    print(i)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_loops_challenge"
    ]
  },
  {
    "id": "py_loops_challenge",
    "mode": "challenge",
    "title": "The Counting Bridge",
    "phase": "Python",
    "topic": "For Loops",
    "story": "Print numbers 1 to 5, each on a new line. Expected output: 1 2 3 4 5 (one per line)",
    "explanation": [],
    "diagram": null,
    "starterCode": "# print numbers 1 to 5\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1\n2\n3\n4\n5\n"
      }
    ],
    "hints": [
      "range(1,6)"
    ],
    "xpReward": 20,
    "coinReward": 10,
    "unlocks": [
      "py_while_teach"
    ]
  },
  {
    "id": "py_while_teach",
    "mode": "teach",
    "title": "While Loops",
    "phase": "Python",
    "topic": "While Loops",
    "story": "A while loop repeats as long as its condition stays True.",
    "explanation": [
      "Check the condition BEFORE each pass through the loop.",
      "You must change something inside the loop, or it runs forever ('infinite loop')!",
      "Use while when you don't know in advance how many times you'll loop."
    ],
    "diagram": "<svg viewBox=\"0 0 360 130\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"130\" y=\"6\" width=\"90\" height=\"34\" rx=\"6\" fill=\"#16233a\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"175.0\" y=\"27.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">n &gt; 0 ?</text><line x1=\"220\" y1=\"23\" x2=\"290\" y2=\"23\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"255\" y=\"14\" text-anchor=\"middle\" font-size=\"10\" fill=\"#f87171\" font-family=\"Courier New, monospace\" font-weight=\"normal\">False -&gt; stop</text><line x1=\"175\" y1=\"40\" x2=\"175\" y2=\"80\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"190\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">True</text><rect x=\"110\" y=\"82\" width=\"130\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"175.0\" y=\"103.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">print(n); n -= 1</text><path d=\"M110,99 Q40,99 40,50 Q40,23 128,23\" stroke=\"#38bdf8\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#arrow)\"/><text x=\"70\" y=\"115\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">loop back, check again</text></svg>",
    "starterCode": "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_while_challenge"
    ]
  },
  {
    "id": "py_while_challenge",
    "mode": "challenge",
    "title": "The Endless Staircase",
    "phase": "Python",
    "topic": "While Loops",
    "story": "Count down from 3 to 1 using while. Expected output: 3 2 1 (one per line)",
    "explanation": [],
    "diagram": null,
    "starterCode": "n = 3\n# use a while loop to count down\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n2\n1\n"
      }
    ],
    "hints": [
      "Update n inside the loop"
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_break_continue_teach"
    ]
  },
  {
    "id": "py_break_continue_teach",
    "mode": "teach",
    "title": "Loop Control",
    "phase": "Python",
    "topic": "Break, Continue, Pass",
    "story": "break, continue, and pass fine-tune exactly how a loop behaves.",
    "explanation": [
      "break immediately exits the loop entirely — 'stop right now'.",
      "continue skips the rest of THIS pass and jumps to the next item — 'skip this one'.",
      "pass does literally nothing — it's a placeholder so empty code blocks don't crash."
    ],
    "diagram": "<svg viewBox=\"0 0 460 105\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"90\" y=\"16\" text-anchor=\"middle\" font-size=\"14\" fill=\"#f87171\" font-family=\"Courier New, monospace\" font-weight=\"bold\">break</text><rect x=\"20\" y=\"26\" width=\"40\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"40.0\" y=\"48.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"66\" y=\"26\" width=\"40\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"86.0\" y=\"48.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"112\" y=\"26\" width=\"40\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"132.0\" y=\"48.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"158\" y=\"26\" width=\"40\" height=\"36\" rx=\"6\" fill=\"#f87171\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"178.0\" y=\"48.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">X</text><text x=\"90\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">stops the whole loop</text><text x=\"280\" y=\"16\" text-anchor=\"middle\" font-size=\"14\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"bold\">continue</text><rect x=\"200\" y=\"26\" width=\"40\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"220.0\" y=\"48.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"246\" y=\"26\" width=\"40\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"266.0\" y=\"48.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"292\" y=\"26\" width=\"40\" height=\"36\" rx=\"6\" fill=\"#fbbf24\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"312.0\" y=\"48.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">skip</text><rect x=\"338\" y=\"26\" width=\"40\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"358.0\" y=\"48.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><rect x=\"384\" y=\"26\" width=\"40\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"404.0\" y=\"48.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><text x=\"300\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">skips just that one item</text></svg>",
    "starterCode": "for i in range(5):\n    if i == 3:\n        break\n    print(i)\nprint(\"---\")\nfor i in range(5):\n    if i == 3:\n        continue\n    print(i)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_break_continue_challenge"
    ]
  },
  {
    "id": "py_break_continue_challenge",
    "mode": "challenge",
    "title": "The Trapped Guard",
    "phase": "Python",
    "topic": "Break, Continue, Pass",
    "story": "Print numbers 0-4, but skip printing 2 (use continue). Expected output: 0 1 3 4 (one per line)",
    "explanation": [],
    "diagram": null,
    "starterCode": "for i in range(5):\n    pass\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "0\n1\n3\n4\n"
      }
    ],
    "hints": [
      "if i == 2: continue, otherwise print(i)"
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_lists_teach"
    ]
  },
  {
    "id": "py_lists_teach",
    "mode": "teach",
    "title": "Lists",
    "phase": "Python",
    "topic": "Lists",
    "story": "A list is an ordered, changeable collection of items, accessed by index.",
    "explanation": [
      "Indexes start at 0, not 1! The first item is potions[0].",
      "Lists can hold mixed types and can grow/shrink.",
      "Negative indexes count from the end: potions[-1] is the last item."
    ],
    "diagram": "<svg viewBox=\"0 0 340 120\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"160\" y=\"18\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">potions = [\"heal\", \"mana\", \"speed\"]</text><rect x=\"30\" y=\"34\" width=\"90\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"75.0\" y=\"60.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"heal\"</text><text x=\"75.0\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">0</text><rect x=\"128\" y=\"34\" width=\"90\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"173.0\" y=\"60.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"mana\"</text><text x=\"173.0\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><rect x=\"226\" y=\"34\" width=\"90\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"271.0\" y=\"60.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"speed\"</text><text x=\"271.0\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">2</text><text x=\"75\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">0  (or -3)</text><text x=\"173\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1  (or -2)</text><text x=\"271\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">2  (or -1)</text></svg>",
    "starterCode": "potions = [\"heal\", \"mana\", \"speed\"]\nprint(potions[1])",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_lists_challenge"
    ]
  },
  {
    "id": "py_lists_challenge",
    "mode": "challenge",
    "title": "Potion Rack",
    "phase": "Python",
    "topic": "Lists",
    "story": "Print the second potion from [\"heal\",\"mana\",\"speed\"].",
    "explanation": [],
    "diagram": null,
    "starterCode": "potions = [\"heal\", \"mana\", \"speed\"]\n# print the second potion\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "mana\n"
      }
    ],
    "hints": [
      "Index 1"
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_listmethods_teach"
    ]
  },
  {
    "id": "py_listmethods_teach",
    "mode": "teach",
    "title": "List Toolbox",
    "phase": "Python",
    "topic": "List Methods",
    "story": "append, pop, sort, and reverse mutate a list in place.",
    "explanation": [
      "bag.append(x) adds x to the end.",
      "bag.pop() removes and returns the LAST item.",
      "bag.sort() sorts the list in place, smallest to largest.",
      "bag.reverse() flips the order of the list in place."
    ],
    "diagram": null,
    "starterCode": "bag = [3, 1, 2]\nbag.append(4)\nprint(bag)\nbag.sort()\nprint(bag)\nbag.reverse()\nprint(bag)\nbag.pop()\nprint(bag)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_listmethods_challenge"
    ]
  },
  {
    "id": "py_listmethods_challenge",
    "mode": "challenge",
    "title": "Sort the Loot",
    "phase": "Python",
    "topic": "List Methods",
    "story": "Given loot = [40, 10, 30, 20], sort it ascending and print it. Expected output: [10, 20, 30, 40]",
    "explanation": [],
    "diagram": null,
    "starterCode": "loot = [40, 10, 30, 20]\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[10, 20, 30, 40]\n"
      }
    ],
    "hints": [
      "list.sort() sorts in place."
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_listcomp_teach"
    ]
  },
  {
    "id": "py_listcomp_teach",
    "mode": "teach",
    "title": "Comprehension Magic",
    "phase": "Python",
    "topic": "List Comprehensions",
    "story": "A list comprehension builds a new list from an existing one, in a single readable line.",
    "explanation": [
      "[expression for item in list] — transforms every item.",
      "[expression for item in list if condition] — also filters items.",
      "It replaces writing a for loop + append() with one compact line."
    ],
    "diagram": "<svg viewBox=\"0 0 320 210\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"150\" y=\"16\" text-anchor=\"middle\" font-size=\"14\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">[n * n for n in nums]</text><rect x=\"40\" y=\"34\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"62.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"94\" y=\"34\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"116.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"148\" y=\"34\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"170.0\" y=\"58.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><line x1=\"62\" y1=\"78\" x2=\"152\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"116\" y1=\"78\" x2=\"206\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"170\" y1=\"78\" x2=\"260\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"130\" y=\"132\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"152.0\" y=\"156.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"184\" y=\"132\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"206.0\" y=\"156.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><rect x=\"238\" y=\"132\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"260.0\" y=\"156.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">9</text><text x=\"60\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">nums</text><text x=\"215\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">squares</text></svg>",
    "starterCode": "nums = [1, 2, 3, 4, 5]\nsquares = [n * n for n in nums]\nprint(squares)\nevens = [n for n in nums if n % 2 == 0]\nprint(evens)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_listcomp_challenge"
    ]
  },
  {
    "id": "py_listcomp_challenge",
    "mode": "challenge",
    "title": "Double the Gold",
    "phase": "Python",
    "topic": "List Comprehensions",
    "story": "Given coins = [1,2,3,4], print a list where each value is doubled. Expected output: [2, 4, 6, 8]",
    "explanation": [],
    "diagram": null,
    "starterCode": "coins = [1, 2, 3, 4]\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[2, 4, 6, 8]\n"
      }
    ],
    "hints": [
      "[c * 2 for c in coins]"
    ],
    "xpReward": 30,
    "coinReward": 15,
    "unlocks": [
      "py_tuples_teach"
    ]
  },
  {
    "id": "py_tuples_teach",
    "mode": "teach",
    "title": "Tuples",
    "phase": "Python",
    "topic": "Tuples",
    "story": "A tuple is like a list, but immutable — once created, it cannot be changed.",
    "explanation": [
      "Written with parentheses: (1, 2, 3) instead of [1, 2, 3].",
      "Great for fixed data that should never accidentally change, like coordinates.",
      "You still index into them the same way as lists: t[0], t[-1]."
    ],
    "diagram": "<svg viewBox=\"0 0 360 105\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"90\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">List [1, 2, 3]</text><rect x=\"20\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"42.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"70\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"92.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"120\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"142.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><text x=\"60\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">unlocked - can change</text><text x=\"270\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">Tuple (1, 2, 3)</text><rect x=\"200\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"222.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"250\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"272.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"300\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"322.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><text x=\"240\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" fill=\"#f87171\" font-family=\"Courier New, monospace\" font-weight=\"normal\">locked - cannot change</text></svg>",
    "starterCode": "t = (1, 2, 3)\nprint(t[-1])",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_tuples_challenge"
    ]
  },
  {
    "id": "py_tuples_challenge",
    "mode": "challenge",
    "title": "Immutable Spell",
    "phase": "Python",
    "topic": "Tuples",
    "story": "Print the last element of (1,2,3). Expected output: 3",
    "explanation": [],
    "diagram": null,
    "starterCode": "t = (1, 2, 3)\n# print the last element\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Index -1"
    ],
    "xpReward": 20,
    "coinReward": 10,
    "unlocks": [
      "py_sets_teach"
    ]
  },
  {
    "id": "py_sets_teach",
    "mode": "teach",
    "title": "Sets",
    "phase": "Python",
    "topic": "Sets",
    "story": "A set stores only unique values, with no guaranteed order.",
    "explanation": [
      "Duplicates are automatically removed: {1,1,2} becomes {1,2}.",
      "| is union (combine both sets), & is intersection (only shared values).",
      "Sets are perfect for 'have I seen this before?' checks — very fast lookups."
    ],
    "diagram": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><circle cx=\"130\" cy=\"80\" r=\"60\" fill=\"#38bdf822\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"190\" cy=\"80\" r=\"60\" fill=\"#4ade8022\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"95\" y=\"60\" text-anchor=\"middle\" font-size=\"15\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><text x=\"95\" y=\"100\" text-anchor=\"middle\" font-size=\"15\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">2</text><text x=\"160\" y=\"80\" text-anchor=\"middle\" font-size=\"15\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"bold\">3</text><text x=\"225\" y=\"60\" text-anchor=\"middle\" font-size=\"15\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">4</text><text x=\"225\" y=\"100\" text-anchor=\"middle\" font-size=\"15\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">5</text><text x=\"60\" y=\"20\" text-anchor=\"start\" font-size=\"12\" fill=\"#38bdf8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">a = {1,2,3}</text><text x=\"200\" y=\"20\" text-anchor=\"start\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">b = {3,4,5}</text><text x=\"160\" y=\"155\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">a | b (union) = everything in both circles</text><text x=\"160\" y=\"172\" text-anchor=\"middle\" font-size=\"12\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">a &amp; b (intersection) = just the overlap (3)</text></svg>",
    "starterCode": "a = {1,2,3}\nb = {3,4,5}\nprint(a | b)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_sets_challenge"
    ]
  },
  {
    "id": "py_sets_challenge",
    "mode": "challenge",
    "title": "Unique Potions",
    "phase": "Python",
    "topic": "Sets",
    "story": "Print the union of {1,2,3} and {3,4,5}. Expected output: {1, 2, 3, 4, 5}",
    "explanation": [],
    "diagram": null,
    "starterCode": "a = {1,2,3}\nb = {3,4,5}\n# print the union\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "{1, 2, 3, 4, 5}\n"
      }
    ],
    "hints": [
      "Use |"
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_dicts_teach"
    ]
  },
  {
    "id": "py_dicts_teach",
    "mode": "teach",
    "title": "Dictionaries",
    "phase": "Python",
    "topic": "Dictionaries",
    "story": "A dictionary stores key-value pairs, like a real dictionary maps a word to its meaning.",
    "explanation": [
      "inventory['sword'] = 10 stores 10 under the key 'sword'.",
      "inventory['sword'] looks it back up instantly.",
      "Keys must be unique; each key maps to exactly one value."
    ],
    "diagram": "<svg viewBox=\"0 0 280 125\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:280px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"20\" y=\"40\" width=\"100\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"70.0\" y=\"66.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"sword\"</text><line x1=\"120\" y1=\"62\" x2=\"180\" y2=\"62\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"70\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"225.0\" y=\"66.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">10</text><text x=\"70\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">key</text><text x=\"225\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">value</text><text x=\"140\" y=\"105\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">inventory[\"sword\"]  -&gt;  10</text></svg>",
    "starterCode": "inventory = {\"sword\": 10}\nprint(inventory[\"sword\"])",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_dicts_challenge"
    ]
  },
  {
    "id": "py_dicts_challenge",
    "mode": "challenge",
    "title": "The Enchanted Map",
    "phase": "Python",
    "topic": "Dictionaries",
    "story": "Create dict with \"sword\":10 and print value.",
    "explanation": [],
    "diagram": null,
    "starterCode": "inventory = {}\n# set inventory[\"sword\"] = 10, then print it\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "10\n"
      }
    ],
    "hints": [
      "inventory[\"sword\"]=10"
    ],
    "xpReward": 30,
    "coinReward": 10,
    "unlocks": [
      "py_dictmethods_teach"
    ]
  },
  {
    "id": "py_dictmethods_teach",
    "mode": "teach",
    "title": "Dictionary Toolbox",
    "phase": "Python",
    "topic": "Dictionary Methods",
    "story": "keys(), values(), items(), and get() are core dict tools.",
    "explanation": [
      ".keys() lists all the keys; .values() lists all the values.",
      ".items() gives you (key, value) pairs together, great for looping.",
      ".get(key, default) looks up a key SAFELY — returns default instead of crashing if the key is missing."
    ],
    "diagram": null,
    "starterCode": "inventory = {\"sword\": 1, \"shield\": 2}\nprint(list(inventory.keys()))\nprint(list(inventory.values()))\nfor k, v in inventory.items():\n    print(k, v)\nprint(inventory.get(\"bow\", 0))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_dictmethods_challenge"
    ]
  },
  {
    "id": "py_dictmethods_challenge",
    "mode": "challenge",
    "title": "Missing Item Check",
    "phase": "Python",
    "topic": "Dictionary Methods",
    "story": "Given inventory = {\"sword\": 1}, print inventory.get(\"shield\", 0).",
    "explanation": [],
    "diagram": null,
    "starterCode": "inventory = {\"sword\": 1}\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "0\n"
      }
    ],
    "hints": [
      ".get(key, default) avoids a KeyError."
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_dictcomp_teach"
    ]
  },
  {
    "id": "py_dictcomp_teach",
    "mode": "teach",
    "title": "Dict Comprehension Magic",
    "phase": "Python",
    "topic": "Dictionary Comprehensions",
    "story": "Build a dictionary in one line, just like a list comprehension.",
    "explanation": [
      "{key_expr: value_expr for item in iterable} builds a whole dict at once.",
      "Very useful for quickly transforming one collection into a lookup table."
    ],
    "diagram": null,
    "starterCode": "nums = [1, 2, 3]\nsquares = {n: n * n for n in nums}\nprint(squares)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_dictcomp_challenge"
    ]
  },
  {
    "id": "py_dictcomp_challenge",
    "mode": "challenge",
    "title": "Price List",
    "phase": "Python",
    "topic": "Dictionary Comprehensions",
    "story": "Given items = [\"sword\", \"shield\"], build a dict mapping each item to len(item).",
    "explanation": [],
    "diagram": null,
    "starterCode": "items = [\"sword\", \"shield\"]\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "{'sword': 5, 'shield': 6}\n"
      }
    ],
    "hints": [
      "{item: len(item) for item in items}"
    ],
    "xpReward": 30,
    "coinReward": 15,
    "unlocks": [
      "py_strmethods_teach"
    ]
  },
  {
    "id": "py_strmethods_teach",
    "mode": "teach",
    "title": "Taming Strings",
    "phase": "Python",
    "topic": "String Methods",
    "story": "Strings have built-in methods: upper, lower, strip, replace, split.",
    "explanation": [
      ".strip() removes leading/trailing whitespace.",
      ".upper() / .lower() change case entirely.",
      ".replace(old, new) swaps every occurrence of old with new.",
      ".split(sep) breaks a string into a list of pieces."
    ],
    "diagram": null,
    "starterCode": "text = \"  Hello, Hero!  \"\nprint(text.strip())\nprint(text.upper())\nprint(text.lower())\nprint(text.replace(\"Hero\", \"Champion\"))\nprint(\"a,b,c\".split(\",\"))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_strmethods_challenge"
    ]
  },
  {
    "id": "py_strmethods_challenge",
    "mode": "challenge",
    "title": "Clean the Scroll",
    "phase": "Python",
    "topic": "String Methods",
    "story": "Given messy = \"  gold COIN  \", print it stripped and lowercased.",
    "explanation": [],
    "diagram": null,
    "starterCode": "messy = \"  gold COIN  \"\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "gold coin\n"
      }
    ],
    "hints": [
      "Chain .strip() and .lower() together."
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_strslicing_teach"
    ]
  },
  {
    "id": "py_strslicing_teach",
    "mode": "teach",
    "title": "Slicing Strings",
    "phase": "Python",
    "topic": "String Slicing",
    "story": "string[start:stop:step] extracts part of a string, just like list slicing.",
    "explanation": [
      "s[2:5] gets characters at index 2, 3, 4 (stop is EXCLUDED).",
      "s[::-1] with a step of -1 reverses the whole string.",
      "Leaving start or stop blank means 'from the beginning' / 'to the end'."
    ],
    "diagram": "<svg viewBox=\"0 0 340 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"40\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"62.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">h</text><text x=\"62.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">0</text><rect x=\"88\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"110.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">e</text><text x=\"110.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><rect x=\"136\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"158.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">l</text><text x=\"158.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">2</text><rect x=\"184\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"206.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">l</text><text x=\"206.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">3</text><rect x=\"232\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"254.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">o</text><text x=\"254.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">4</text><text x=\"170\" y=\"15\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">s = \"hello\"</text><text x=\"170\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">s[1:4] -&gt; \"ell\"   (stop at index 4 is excluded)</text><text x=\"170\" y=\"140\" text-anchor=\"middle\" font-size=\"12\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">s[::-1] -&gt; \"olleh\"  (walk backwards)</text></svg>",
    "starterCode": "s = \"hello\"\nprint(s[::-1])\nprint(s[1:4])",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_strslicing_challenge"
    ]
  },
  {
    "id": "py_strslicing_challenge",
    "mode": "challenge",
    "title": "Rune Mirror",
    "phase": "Python",
    "topic": "String Slicing",
    "story": "Reverse the string 'hello'.",
    "explanation": [],
    "diagram": null,
    "starterCode": "s = \"hello\"\n# print it reversed\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "olleh\n"
      }
    ],
    "hints": [
      "[::-1]"
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_fstring_teach"
    ]
  },
  {
    "id": "py_fstring_teach",
    "mode": "teach",
    "title": "F-Strings",
    "phase": "Python",
    "topic": "String Formatting",
    "story": "f-strings embed expressions directly inside a string.",
    "explanation": [
      "Put an f right before the opening quote: f\"...\".",
      "Anything inside {curly braces} is evaluated as real Python code.",
      "Much cleaner than gluing strings together with +."
    ],
    "diagram": null,
    "starterCode": "name = \"Hero\"\nlevel = 5\nprint(f\"{name} is level {level}!\")\nprint(f\"Next level in {10 - level} XP\")",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_fstring_challenge"
    ]
  },
  {
    "id": "py_fstring_challenge",
    "mode": "challenge",
    "title": "The Status Bar",
    "phase": "Python",
    "topic": "String Formatting",
    "story": "Given hp=80 and max_hp=100, print exactly: HP: 80/100",
    "explanation": [],
    "diagram": null,
    "starterCode": "hp = 80\nmax_hp = 100\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "HP: 80/100\n"
      }
    ],
    "hints": [
      "Use an f-string: f\"HP: {hp}/{max_hp}\""
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_func_teach"
    ]
  },
  {
    "id": "py_func_teach",
    "mode": "teach",
    "title": "Functions",
    "phase": "Python",
    "topic": "Functions",
    "story": "A function packages a block of code you can reuse, with inputs and an output.",
    "explanation": [
      "def name(parameters): starts a function definition.",
      "return sends a value back out; without return, the function gives back None.",
      "Calling greet('Hero') plugs 'Hero' into the name parameter for that one run."
    ],
    "diagram": "<svg viewBox=\"0 0 520 105\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:520px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"10\" y=\"40\" width=\"80\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"50.0\" y=\"66.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"Hero\"</text><text x=\"50\" y=\"22\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">input</text><line x1=\"95\" y1=\"62\" x2=\"145\" y2=\"62\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"20\" width=\"160\" height=\"84\" rx=\"6\" fill=\"#16233a\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"><tspan x=\"230.0\" y=\"51.550000000000004\">def greet(name):</tspan><tspan x=\"230.0\" y=\"65.85000000000001\">  return \"Hello, \"</tspan><tspan x=\"230.0\" y=\"80.15\">         + name</tspan></text><line x1=\"315\" y1=\"62\" x2=\"365\" y2=\"62\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"40\" width=\"130\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"435.0\" y=\"66.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"Hello, Hero!\"</text><text x=\"435\" y=\"22\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">output</text></svg>",
    "starterCode": "def greet(name):\n    return \"Hello, \" + name\nprint(greet(\"Hero\"))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_func_challenge"
    ]
  },
  {
    "id": "py_func_challenge",
    "mode": "challenge",
    "title": "Potion Brewer",
    "phase": "Python",
    "topic": "Functions",
    "story": "Write brew(potion) returning \"Brewing \" + potion.",
    "explanation": [],
    "diagram": null,
    "starterCode": "def brew(potion):\n    pass\n\nprint(brew(\"invisibility\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Brewing invisibility\n"
      }
    ],
    "hints": [
      "return \"Brewing \" + potion"
    ],
    "xpReward": 30,
    "coinReward": 10,
    "unlocks": [
      "py_defaultargs_teach"
    ]
  },
  {
    "id": "py_defaultargs_teach",
    "mode": "teach",
    "title": "Flexible Functions",
    "phase": "Python",
    "topic": "Default & Keyword Arguments",
    "story": "Functions can have default parameter values, used when the caller doesn't supply one.",
    "explanation": [
      "def greet(name, greeting='Hello') means greeting is optional.",
      "You can also call functions with keyword=value to be explicit and skip order."
    ],
    "diagram": null,
    "starterCode": "def greet(name, greeting=\"Hello\"):\n    return f\"{greeting}, {name}!\"\nprint(greet(\"Hero\"))\nprint(greet(\"Hero\", greeting=\"Welcome\"))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_defaultargs_challenge"
    ]
  },
  {
    "id": "py_defaultargs_challenge",
    "mode": "challenge",
    "title": "The Healer",
    "phase": "Python",
    "topic": "Default & Keyword Arguments",
    "story": "Write heal(hp, amount=10) returning hp + amount. Call heal(50).",
    "explanation": [],
    "diagram": null,
    "starterCode": "def heal(hp, amount=10):\n    pass\n\nprint(heal(50))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "60\n"
      }
    ],
    "hints": [
      "return hp + amount"
    ],
    "xpReward": 30,
    "coinReward": 15,
    "unlocks": [
      "py_args_kwargs_teach"
    ]
  },
  {
    "id": "py_args_kwargs_teach",
    "mode": "teach",
    "title": "Unlimited Arguments",
    "phase": "Python",
    "topic": "*args and **kwargs",
    "story": "*args collects extra positional args, **kwargs collects extra keyword args.",
    "explanation": [
      "*args gathers ANY number of positional arguments into a tuple.",
      "**kwargs gathers ANY number of keyword arguments into a dictionary.",
      "Use these when you don't know in advance how many inputs you'll get."
    ],
    "diagram": null,
    "starterCode": "def total(*args):\n    return sum(args)\nprint(total(1, 2, 3, 4))\n\ndef describe(**kwargs):\n    for k, v in kwargs.items():\n        print(k, \"=\", v)\ndescribe(name=\"Hero\", level=5)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_args_kwargs_challenge"
    ]
  },
  {
    "id": "py_args_kwargs_challenge",
    "mode": "challenge",
    "title": "Party Sum",
    "phase": "Python",
    "topic": "*args and **kwargs",
    "story": "Write total_gold(*amounts) returning the sum. Call with 10, 20, 30.",
    "explanation": [],
    "diagram": null,
    "starterCode": "def total_gold(*amounts):\n    pass\n\nprint(total_gold(10, 20, 30))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "60\n"
      }
    ],
    "hints": [
      "*amounts collects all positional args into a tuple; use sum()."
    ],
    "xpReward": 35,
    "coinReward": 15,
    "unlocks": [
      "py_scope_teach"
    ]
  },
  {
    "id": "py_scope_teach",
    "mode": "teach",
    "title": "Local vs Global",
    "phase": "Python",
    "topic": "Scope & Global",
    "story": "Scope determines where in your code a variable name can be seen and used.",
    "explanation": [
      "A variable made INSIDE a function is 'local' — it only exists there.",
      "A variable made OUTSIDE any function is 'global' — visible everywhere.",
      "To change a global variable from inside a function, you must say 'global name' first."
    ],
    "diagram": "<svg viewBox=\"0 0 340 215\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"300\" height=\"170\" rx=\"10\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"160.0\" y=\"99.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"160\" y=\"30\" text-anchor=\"middle\" font-size=\"12\" fill=\"#38bdf8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">global scope</text><rect x=\"30\" y=\"40\" width=\"100\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"80.0\" y=\"59.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">x = 10</text><rect x=\"150\" y=\"60\" width=\"140\" height=\"100\" rx=\"8\" fill=\"none\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"220.0\" y=\"114.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"220\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">local scope</text><rect x=\"165\" y=\"88\" width=\"110\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"220.0\" y=\"107.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">x = 5</text><text x=\"220\" y=\"145\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">(inside a function)</text><text x=\"160\" y=\"200\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">the inner x only exists during that function call</text></svg>",
    "starterCode": "x = 10\n\ndef show_local():\n    x = 5\n    print(\"inside:\", x)\n\nshow_local()\nprint(\"outside:\", x)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_scope_challenge"
    ]
  },
  {
    "id": "py_scope_challenge",
    "mode": "challenge",
    "title": "The Global Rune",
    "phase": "Python",
    "topic": "Scope & Global",
    "story": "Write add_gold(amount) that uses \"global gold\" to add amount to the global gold variable. Start gold=0, call add_gold(15), print gold.",
    "explanation": [],
    "diagram": null,
    "starterCode": "gold = 0\n\ndef add_gold(amount):\n    pass\n\nadd_gold(15)\nprint(gold)",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "15\n"
      }
    ],
    "hints": [
      "Use \"global gold\" as the first line inside the function."
    ],
    "xpReward": 35,
    "coinReward": 15,
    "unlocks": [
      "py_lambda_teach"
    ]
  },
  {
    "id": "py_lambda_teach",
    "mode": "teach",
    "title": "One-Line Functions",
    "phase": "Python",
    "topic": "Lambda Functions",
    "story": "lambda creates a small anonymous function, useful for short throwaway logic.",
    "explanation": [
      "lambda arguments: expression — no def, no name, no return keyword needed.",
      "Best for tiny functions you'll only use once, often passed into another function."
    ],
    "diagram": null,
    "starterCode": "square = lambda x: x * x\nprint(square(5))\nadd = lambda a, b: a + b\nprint(add(2, 3))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_lambda_challenge"
    ]
  },
  {
    "id": "py_lambda_challenge",
    "mode": "challenge",
    "title": "Quick Doubler",
    "phase": "Python",
    "topic": "Lambda Functions",
    "story": "Write a lambda called double that returns x * 2. Print double(21). Expected output: 42",
    "explanation": [],
    "diagram": null,
    "starterCode": "double = lambda x: None\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "42\n"
      }
    ],
    "hints": [
      "lambda x: x * 2"
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_map_filter_teach"
    ]
  },
  {
    "id": "py_map_filter_teach",
    "mode": "teach",
    "title": "Map and Filter",
    "phase": "Python",
    "topic": "map() and filter()",
    "story": "map() transforms every item; filter() keeps only matching items.",
    "explanation": [
      "map(function, list) applies function to every item, returning a new sequence.",
      "filter(function, list) keeps only the items where function returns True.",
      "Wrap the result in list(...) to see it as a normal list."
    ],
    "diagram": null,
    "starterCode": "nums = [1, 2, 3, 4, 5]\ndoubled = list(map(lambda n: n * 2, nums))\nprint(doubled)\nevens = list(filter(lambda n: n % 2 == 0, nums))\nprint(evens)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_map_filter_challenge"
    ]
  },
  {
    "id": "py_map_filter_challenge",
    "mode": "challenge",
    "title": "Filter the Strong",
    "phase": "Python",
    "topic": "map() and filter()",
    "story": "Given powers = [5, 12, 8, 20, 3], print only values > 10 using filter(). Expected output: [12, 20]",
    "explanation": [],
    "diagram": null,
    "starterCode": "powers = [5, 12, 8, 20, 3]\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[12, 20]\n"
      }
    ],
    "hints": [
      "list(filter(lambda p: p > 10, powers))"
    ],
    "xpReward": 30,
    "coinReward": 15,
    "unlocks": [
      "py_try_except_teach"
    ]
  },
  {
    "id": "py_try_except_teach",
    "mode": "teach",
    "title": "Catching Errors",
    "phase": "Python",
    "topic": "Error Handling",
    "story": "try/except lets your program recover from errors instead of crashing.",
    "explanation": [
      "Code inside try: runs normally until something goes wrong.",
      "If an error happens, Python jumps straight to the matching except block.",
      "You can catch specific error types, like ZeroDivisionError or IndexError."
    ],
    "diagram": "<svg viewBox=\"0 0 180 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:180px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"20\" y=\"10\" width=\"140\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"90.0\" y=\"31.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">try: risky code</text><line x1=\"90\" y1=\"44\" x2=\"90\" y2=\"76\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"105\" y=\"64\" text-anchor=\"middle\" font-size=\"10\" fill=\"#f87171\" font-family=\"Courier New, monospace\" font-weight=\"normal\">error!</text><rect x=\"20\" y=\"78\" width=\"140\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"90.0\" y=\"99.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">except: handle it</text><text x=\"90\" y=\"130\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">program keeps running,</text><text x=\"90\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">instead of crashing</text></svg>",
    "starterCode": "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"Cannot divide by zero!\"\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_try_except_challenge"
    ]
  },
  {
    "id": "py_try_except_challenge",
    "mode": "challenge",
    "title": "The Safe Vault",
    "phase": "Python",
    "topic": "Error Handling",
    "story": "Write safe_get(lst, i) that returns lst[i], or \"Out of bounds!\" on IndexError.",
    "explanation": [],
    "diagram": null,
    "starterCode": "def safe_get(lst, i):\n    pass\n\nprint(safe_get([1,2,3], 5))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Out of bounds!\n"
      }
    ],
    "hints": [
      "Wrap the indexing in try/except IndexError."
    ],
    "xpReward": 35,
    "coinReward": 15,
    "unlocks": [
      "py_class_teach"
    ]
  },
  {
    "id": "py_class_teach",
    "mode": "teach",
    "title": "Building a Class",
    "phase": "Python",
    "topic": "Classes & Objects",
    "story": "A class bundles data (attributes) and behavior (methods) together as a blueprint for objects.",
    "explanation": [
      "class Player: defines the blueprint; hero = Player(...) builds one actual object from it.",
      "__init__ runs automatically when you create a new object — it sets up the starting attributes.",
      "self refers to 'this particular object' inside every method."
    ],
    "diagram": "<svg viewBox=\"0 0 400 130\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"150\" height=\"90\" rx=\"6\" fill=\"#16233a\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"><tspan x=\"85.0\" y=\"44.550000000000004\">class Player:</tspan><tspan x=\"85.0\" y=\"58.85000000000001\">  __init__(name, hp)</tspan><tspan x=\"85.0\" y=\"73.15\">  status()</tspan></text><text x=\"85\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">blueprint</text><line x1=\"165\" y1=\"55\" x2=\"220\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"190\" y=\"40\" text-anchor=\"middle\" font-size=\"10\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">build one</text><rect x=\"225\" y=\"25\" width=\"150\" height=\"60\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"><tspan x=\"300.0\" y=\"51.7\">hero</tspan><tspan x=\"300.0\" y=\"66.0\">name=\"Hero\", hp=100</tspan></text><text x=\"300\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">an object (instance)</text></svg>",
    "starterCode": "class Player:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n    def status(self):\n        return f\"{self.name}: {self.hp} HP\"\n\nhero = Player(\"Hero\", 100)\nprint(hero.status())",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_class_challenge"
    ]
  },
  {
    "id": "py_class_challenge",
    "mode": "challenge",
    "title": "The Potion Class",
    "phase": "Python",
    "topic": "Classes & Objects",
    "story": "Write class Potion with __init__(self, name, heal_amount) and a describe() method returning f\"{name} heals {heal_amount} HP\". Print describe() for Potion(\"Elixir\", 30).",
    "explanation": [],
    "diagram": null,
    "starterCode": "class Potion:\n    def __init__(self, name, heal_amount):\n        self.name = name\n        self.heal_amount = heal_amount\n    def describe(self):\n        pass\n\np = Potion(\"Elixir\", 30)\nprint(p.describe())",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Elixir heals 30 HP\n"
      }
    ],
    "hints": [
      "return f\"{self.name} heals {self.heal_amount} HP\""
    ],
    "xpReward": 40,
    "coinReward": 15,
    "unlocks": [
      "py_staticmethod_teach"
    ]
  },
  {
    "id": "py_staticmethod_teach",
    "mode": "teach",
    "title": "Three Kinds of Methods",
    "phase": "Python",
    "topic": "Static & Class Methods",
    "story": "Python classes support instance methods, class methods, and static methods.",
    "explanation": [
      "Instance methods (the usual kind) take self and work with one specific object's data.",
      "@classmethod methods take cls (the class itself) — useful for building objects in alternate ways.",
      "@staticmethod methods take neither self nor cls — they're just a regular function that lives inside the class for organization."
    ],
    "diagram": "<svg viewBox=\"0 0 430 95\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:430px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"120\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"70.0\" y=\"36.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">self.hp</text><text x=\"70\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">instance method</text><text x=\"70\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">(needs ONE object)</text><rect x=\"150\" y=\"10\" width=\"120\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"210.0\" y=\"36.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">cls.total</text><text x=\"210\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">class method</text><text x=\"210\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">(needs the class)</text><rect x=\"290\" y=\"10\" width=\"120\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"350.0\" y=\"36.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">just a helper</text><text x=\"350\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">static method</text><text x=\"350\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">(needs neither)</text></svg>",
    "starterCode": "class Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\n    @classmethod\n    def total(cls):\n        return cls.count\n    @staticmethod\n    def greet():\n        return \"Hello from Counter!\"\n\nCounter(); Counter()\nprint(Counter.total())\nprint(Counter.greet())",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_staticmethod_challenge"
    ]
  },
  {
    "id": "py_staticmethod_challenge",
    "mode": "challenge",
    "title": "The Guild Registry",
    "phase": "Python",
    "topic": "Static & Class Methods",
    "story": "Write class Guild with class attribute members=0, __init__ that increments Guild.members, and a classmethod count() returning cls.members. Create 3 Guild() objects then print Guild.count().",
    "explanation": [],
    "diagram": null,
    "starterCode": "class Guild:\n    members = 0\n    def __init__(self):\n        pass\n    @classmethod\n    def count(cls):\n        pass\n\nGuild(); Guild(); Guild()\nprint(Guild.count())",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Inside __init__, do Guild.members += 1. Inside count, return cls.members."
    ],
    "xpReward": 40,
    "coinReward": 15,
    "unlocks": [
      "py_property_teach"
    ]
  },
  {
    "id": "py_property_teach",
    "mode": "teach",
    "title": "Protecting Your Data",
    "phase": "Python",
    "topic": "Getters, Setters & @property",
    "story": "@property lets you control access to an attribute while it still LOOKS like a plain attribute.",
    "explanation": [
      "A leading underscore (_age) is a convention meaning 'please treat as private'.",
      "@property turns a method into something you read like a normal attribute: person.age (no parentheses!).",
      "@age.setter lets you validate a new value before it's actually stored."
    ],
    "diagram": "<svg viewBox=\"0 0 340 215\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"160\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">p.age   (looks like a plain attribute read)</text><line x1=\"160\" y1=\"24\" x2=\"160\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"70\" y=\"58\" width=\"180\" height=\"40\" rx=\"6\" fill=\"#16233a\" stroke=\"#4ade80\" stroke-width=\"2\"/><text text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"><tspan x=\"160.0\" y=\"75.0\">@property</tspan><tspan x=\"160.0\" y=\"88.0\">def age(self): return self._age</tspan></text><text x=\"160\" y=\"118\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">p.age = -5   (looks like a plain write)</text><line x1=\"160\" y1=\"126\" x2=\"160\" y2=\"157\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"50\" y=\"160\" width=\"220\" height=\"40\" rx=\"6\" fill=\"#16233a\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"160.0\" y=\"183.5\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">@age.setter -&gt; can reject bad values (like -5)</text></svg>",
    "starterCode": "class Person:\n    def __init__(self, age):\n        self._age = age\n    @property\n    def age(self):\n        return self._age\n    @age.setter\n    def age(self, new_age):\n        if new_age >= 0:\n            self._age = new_age\n\np = Person(30)\nprint(p.age)\np.age = -5\nprint(p.age)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_property_challenge"
    ]
  },
  {
    "id": "py_property_challenge",
    "mode": "challenge",
    "title": "The Vault Guardian",
    "phase": "Python",
    "topic": "Getters, Setters & @property",
    "story": "Write class Wallet with _gold, a property gold that returns _gold, and a setter that only updates _gold if new_gold >= 0. Start Wallet(100), try setting gold=-50 (should be ignored), print gold.",
    "explanation": [],
    "diagram": null,
    "starterCode": "class Wallet:\n    def __init__(self, gold):\n        self._gold = gold\n    @property\n    def gold(self):\n        pass\n    @gold.setter\n    def gold(self, new_gold):\n        pass\n\nw = Wallet(100)\nw.gold = -50\nprint(w.gold)",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "100\n"
      }
    ],
    "hints": [
      "The setter should only assign self._gold = new_gold when new_gold >= 0."
    ],
    "xpReward": 45,
    "coinReward": 20,
    "unlocks": [
      "py_inheritance_teach"
    ]
  },
  {
    "id": "py_inheritance_teach",
    "mode": "teach",
    "title": "Inheriting Powers",
    "phase": "Python",
    "topic": "Class Inheritance",
    "story": "A subclass inherits attributes and methods from its parent class, and can override them.",
    "explanation": [
      "class Dragon(Creature): means Dragon gets everything Creature has, for free.",
      "Overriding a method (writing a new version with the same name) replaces the parent's behavior.",
      "This avoids rewriting shared code for every related class."
    ],
    "diagram": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"90\" y=\"10\" width=\"160\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"><tspan x=\"170.0\" y=\"28.4\">Creature</tspan><tspan x=\"170.0\" y=\"44.0\">speak() -&gt; \"...\"</tspan></text><line x1=\"130\" y1=\"54\" x2=\"60\" y2=\"100\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"220\" y1=\"54\" x2=\"290\" y2=\"100\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"102\" width=\"140\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"><tspan x=\"80.0\" y=\"120.69999999999999\">Dragon(Creature)</tspan><tspan x=\"80.0\" y=\"135.0\">speak() -&gt; \"Roar!\"</tspan></text><rect x=\"190\" y=\"102\" width=\"150\" height=\"44\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"><tspan x=\"265.0\" y=\"120.69999999999999\">Goblin(Creature)</tspan><tspan x=\"265.0\" y=\"135.0\">speak() -&gt; \"Snarl!\"</tspan></text><text x=\"170\" y=\"165\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">each child inherits, then overrides speak()</text></svg>",
    "starterCode": "class Creature:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f\"{self.name} makes a sound.\"\n\nclass Dragon(Creature):\n    def speak(self):\n        return f\"{self.name} roars with fire!\"\n\nd = Dragon(\"Smaug\")\nprint(d.speak())",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_inheritance_challenge"
    ]
  },
  {
    "id": "py_inheritance_challenge",
    "mode": "challenge",
    "title": "The Goblin Subclass",
    "phase": "Python",
    "topic": "Class Inheritance",
    "story": "Write class Goblin(Creature) that overrides speak() to return f\"{self.name} snarls!\". Creature is already defined.",
    "explanation": [],
    "diagram": null,
    "starterCode": "class Creature:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f\"{self.name} makes a sound.\"\n\nclass Goblin(Creature):\n    pass\n\ng = Goblin(\"Grix\")\nprint(g.speak())",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Grix snarls!\n"
      }
    ],
    "hints": [
      "Override speak() inside class Goblin(Creature)."
    ],
    "xpReward": 40,
    "coinReward": 15,
    "unlocks": [
      "py_pillars_teach"
    ]
  },
  {
    "id": "py_pillars_teach",
    "mode": "teach",
    "title": "The Four Pillars of OOP",
    "phase": "Python",
    "topic": "The Four Pillars of OOP",
    "story": "Object-Oriented Programming rests on four big ideas. This level demonstrates Polymorphism directly.",
    "explanation": [
      "Abstraction: hide the complicated details, show only what's needed. (Driving a car: you use a wheel, not the engine internals.)",
      "Encapsulation: bundle data + behavior in one class and protect it from outside interference (like _age and @property).",
      "Inheritance: build a new class on top of an existing one, reusing its code (like Dragon(Creature)).",
      "Polymorphism ('many forms'): different classes can share a method NAME, but each does its own thing when called."
    ],
    "diagram": "<svg viewBox=\"0 0 380 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">creature.speak()  called on 3 different objects</text><rect x=\"160\" y=\"32\" width=\"60\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"190.0\" y=\"53.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">speak()</text><line x1=\"175\" y1=\"66\" x2=\"70\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"190\" y1=\"66\" x2=\"190\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"205\" y1=\"66\" x2=\"310\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"20\" y=\"108\" width=\"100\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"70.0\" y=\"129.85\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"Roar!\"</text><rect x=\"140\" y=\"108\" width=\"100\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"2\"/><text x=\"190.0\" y=\"129.85\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"Snarl!\"</text><rect x=\"260\" y=\"108\" width=\"100\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"310.0\" y=\"129.85\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"Blob!\"</text><text x=\"70\" y=\"160\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">Dragon</text><text x=\"190\" y=\"160\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">Goblin</text><text x=\"310\" y=\"160\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">Slime</text><text x=\"190\" y=\"182\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">same method name -&gt; each class answers differently</text></svg>",
    "starterCode": "class Creature:\n    def speak(self):\n        return \"...\"\n\nclass Dragon(Creature):\n    def speak(self):\n        return \"Roar!\"\n\nclass Goblin(Creature):\n    def speak(self):\n        return \"Snarl!\"\n\nfor creature in [Dragon(), Goblin()]:\n    print(creature.speak())",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_pillars_challenge"
    ]
  },
  {
    "id": "py_pillars_challenge",
    "mode": "challenge",
    "title": "The Monster Chorus",
    "phase": "Python",
    "topic": "The Four Pillars of OOP",
    "story": "Write class Slime(Creature) and class Ghost(Creature), each overriding speak() to return \"Blob!\" and \"Boo!\" respectively. Loop over [Slime(), Ghost()] and print speak() for each. Creature is predefined.",
    "explanation": [],
    "diagram": null,
    "starterCode": "class Creature:\n    def speak(self):\n        return \"...\"\n\nclass Slime(Creature):\n    pass\n\nclass Ghost(Creature):\n    pass\n\nfor c in [Slime(), Ghost()]:\n    print(c.speak())",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Blob!\nBoo!\n"
      }
    ],
    "hints": [
      "Give each subclass its own speak() method that returns a different string."
    ],
    "xpReward": 45,
    "coinReward": 20,
    "unlocks": [
      "py_decorators_teach"
    ]
  },
  {
    "id": "py_decorators_teach",
    "mode": "teach",
    "title": "Wrapping Functions in Magic",
    "phase": "Python",
    "topic": "Decorators",
    "story": "A decorator is a function that wraps another function to add extra behavior, without changing its code.",
    "explanation": [
      "@my_decorator above a function is shorthand for say_hello = my_decorator(say_hello).",
      "Inside the decorator, a wrapper() function runs your extra code, then calls the original function.",
      "Decorators are how frameworks add logging, timing, or access checks to any function."
    ],
    "diagram": "<svg viewBox=\"0 0 230 170\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:230px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"200\" height=\"110\" rx=\"6\" fill=\"#16233a\" stroke=\"#4ade80\" stroke-width=\"2\"/><text text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"><tspan x=\"110.0\" y=\"45.8\">def wrapper():</tspan><tspan x=\"110.0\" y=\"61.4\">  print(\"BEFORE\")</tspan><tspan x=\"110.0\" y=\"77.0\">  func()</tspan><tspan x=\"110.0\" y=\"92.6\">  print(\"AFTER\")</tspan></text><rect x=\"60\" y=\"46\" width=\"100\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"110.0\" y=\"66.85\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">say_hello()</text><text x=\"110\" y=\"135\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">wrapper() wraps the original function</text><text x=\"110\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">and runs code before + after it</text></svg>",
    "starterCode": "def my_decorator(func):\n    def wrapper():\n        print(\"Something happens before.\")\n        func()\n        print(\"Something happens after.\")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_decorators_challenge"
    ]
  },
  {
    "id": "py_decorators_challenge",
    "mode": "challenge",
    "title": "The Battle Herald",
    "phase": "Python",
    "topic": "Decorators",
    "story": "Write a decorator announce(func) whose wrapper() prints \"A challenger appears!\" then calls func(), then prints \"The battle ends!\". Apply it to attack() which prints \"Attack!\".",
    "explanation": [],
    "diagram": null,
    "starterCode": "def announce(func):\n    def wrapper():\n        pass\n    return wrapper\n\n@announce\ndef attack():\n    print(\"Attack!\")\n\nattack()",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "A challenger appears!\nAttack!\nThe battle ends!\n"
      }
    ],
    "hints": [
      "wrapper() should print before, call func(), then print after."
    ],
    "xpReward": 45,
    "coinReward": 20,
    "unlocks": [
      "py_enum_zip_teach"
    ]
  },
  {
    "id": "py_enum_zip_teach",
    "mode": "teach",
    "title": "Enumerate and Zip",
    "phase": "Python",
    "topic": "enumerate() and zip()",
    "story": "enumerate() gives index+value pairs; zip() pairs up two lists.",
    "explanation": [
      "enumerate(items) gives you (0, items[0]), (1, items[1]), ... automatically — no manual counter needed.",
      "zip(list1, list2) pairs up items from both lists position by position."
    ],
    "diagram": "<svg viewBox=\"0 0 370 120\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:370px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"90\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">enumerate(items)</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"50.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">sword</text><text x=\"50.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">0</text><rect x=\"98\" y=\"30\" width=\"80\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"138.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">shield</text><text x=\"138.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><text x=\"230\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">zip(names, levels)</text><rect x=\"210\" y=\"30\" width=\"70\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"245.0\" y=\"52.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">Hero</text><rect x=\"210\" y=\"76\" width=\"70\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"245.0\" y=\"98.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">Mage</text><rect x=\"300\" y=\"30\" width=\"50\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"325.0\" y=\"52.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">5</text><rect x=\"300\" y=\"76\" width=\"50\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"325.0\" y=\"98.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><line x1=\"280\" y1=\"48\" x2=\"300\" y2=\"48\" stroke=\"#fbbf24\" stroke-width=\"2\"/><line x1=\"280\" y1=\"94\" x2=\"300\" y2=\"94\" stroke=\"#fbbf24\" stroke-width=\"2\"/></svg>",
    "starterCode": "items = [\"sword\", \"shield\", \"potion\"]\nfor i, item in enumerate(items):\n    print(i, item)\nnames = [\"Hero\", \"Mage\"]\nlevels = [5, 3]\nfor name, level in zip(names, levels):\n    print(name, level)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_enum_zip_challenge"
    ]
  },
  {
    "id": "py_enum_zip_challenge",
    "mode": "challenge",
    "title": "Numbered Inventory",
    "phase": "Python",
    "topic": "enumerate() and zip()",
    "story": "Given items = [\"bow\",\"axe\"], print each as \"0: bow\" and \"1: axe\" using enumerate.",
    "explanation": [],
    "diagram": null,
    "starterCode": "items = [\"bow\", \"axe\"]\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "0: bow\n1: axe\n"
      }
    ],
    "hints": [
      "for i, item in enumerate(items): print(f\"{i}: {item}\")"
    ],
    "xpReward": 30,
    "coinReward": 15,
    "unlocks": [
      "py_slicing_teach"
    ]
  },
  {
    "id": "py_slicing_teach",
    "mode": "teach",
    "title": "Slicing Lists",
    "phase": "Python",
    "topic": "List Slicing",
    "story": "list[start:stop:step] extracts a sub-list, same rules as string slicing.",
    "explanation": [
      "nums[2:5] takes indexes 2,3,4 (stop excluded).",
      "nums[::2] takes every 2nd item (a step of 2).",
      "nums[::-1] walks backwards, reversing the whole list."
    ],
    "diagram": "<svg viewBox=\"0 0 360 135\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"10\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"26.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><text x=\"26.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">0</text><rect x=\"45\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"61.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><text x=\"61.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><rect x=\"80\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"96.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><text x=\"96.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">2</text><rect x=\"115\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"131.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><text x=\"131.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">3</text><rect x=\"150\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"166.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><text x=\"166.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">4</text><rect x=\"185\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"201.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">5</text><text x=\"201.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">5</text><rect x=\"220\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"236.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">6</text><text x=\"236.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">6</text><rect x=\"255\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"271.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">7</text><text x=\"271.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">7</text><rect x=\"290\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"306.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">8</text><text x=\"306.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">8</text><rect x=\"325\" y=\"30\" width=\"32\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"341.0\" y=\"52.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">9</text><text x=\"341.0\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">9</text><text x=\"180\" y=\"15\" text-anchor=\"middle\" font-size=\"13\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">nums[2:5]  -&gt;  [2, 3, 4]</text><text x=\"180\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">highlighted boxes are indices 2, 3, 4 (stop at 5 excluded)</text></svg>",
    "starterCode": "nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint(nums[2:5])\nprint(nums[:3])\nprint(nums[7:])\nprint(nums[::2])\nprint(nums[::-1])",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_listslicing_challenge"
    ]
  },
  {
    "id": "py_listslicing_challenge",
    "mode": "challenge",
    "title": "Middle Treasure",
    "phase": "Python",
    "topic": "List Slicing",
    "story": "Given chest = [1,2,3,4,5,6], print elements at indices 1,2,3 (i.e. chest[1:4]). Expected output: [2, 3, 4]",
    "explanation": [],
    "diagram": null,
    "starterCode": "chest = [1, 2, 3, 4, 5, 6]\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[2, 3, 4]\n"
      }
    ],
    "hints": [
      "chest[1:4] gives indices 1, 2, 3."
    ],
    "xpReward": 30,
    "coinReward": 15,
    "unlocks": [
      "py_ternary_teach"
    ]
  },
  {
    "id": "py_ternary_teach",
    "mode": "teach",
    "title": "One-Line If",
    "phase": "Python",
    "topic": "Conditional Expressions",
    "story": "A conditional expression: value_if_true if condition else value_if_false.",
    "explanation": [
      "It's an if/else that fits in one expression, useful for quick value picks.",
      "Read it left to right: 'this value... if this is true... otherwise this value'."
    ],
    "diagram": null,
    "starterCode": "hp = 30\nstatus = \"Alive\" if hp > 0 else \"Defeated\"\nprint(status)",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_ternary_challenge"
    ]
  },
  {
    "id": "py_ternary_challenge",
    "mode": "challenge",
    "title": "Pass or Fail",
    "phase": "Python",
    "topic": "Conditional Expressions",
    "story": "Given score = 75, print \"Pass\" if score >= 60 else \"Fail\", in one line.",
    "explanation": [],
    "diagram": null,
    "starterCode": "score = 75\n",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Pass\n"
      }
    ],
    "hints": [
      "print(\"Pass\" if score >= 60 else \"Fail\")"
    ],
    "xpReward": 25,
    "coinReward": 10,
    "unlocks": [
      "py_recursion_teach"
    ]
  },
  {
    "id": "py_recursion_teach",
    "mode": "teach",
    "title": "Functions That Call Themselves",
    "phase": "Python",
    "topic": "Recursion",
    "story": "Recursion is a function calling itself on a smaller version of the same problem.",
    "explanation": [
      "Every recursive function needs a BASE CASE — the simplest input where it stops calling itself.",
      "Each recursive call should move CLOSER to the base case, or it never stops.",
      "Python keeps a 'call stack' — a stack of in-progress calls waiting to finish."
    ],
    "diagram": "<svg viewBox=\"0 0 300 228\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"20.0\" y=\"10\" width=\"260\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"150.0\" y=\"32.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">factorial(3)</text><rect x=\"35.0\" y=\"54\" width=\"230\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"150.0\" y=\"76.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">factorial(2)</text><rect x=\"50.0\" y=\"98\" width=\"200\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"150.0\" y=\"120.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">factorial(1)</text><rect x=\"65.0\" y=\"142\" width=\"170\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"150.0\" y=\"164.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">factorial(0) -&gt; returns 1</text><text x=\"150\" y=\"195\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">each call waits for the one below it to finish,</text><text x=\"150\" y=\"212\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">then multiplies as the stack unwinds back up</text></svg>",
    "starterCode": "def factorial(n):\n    if n == 0:       # base case\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 5,
    "unlocks": [
      "py_recursion_challenge"
    ]
  },
  {
    "id": "py_recursion_challenge",
    "mode": "challenge",
    "title": "The Countdown Spell",
    "phase": "Python",
    "topic": "Recursion",
    "story": "Write countdown(n) that prints n, n-1, ..., 1 each on its own line using recursion (base case: n == 0). Called with countdown(3). Expected output: 3 2 1 (one per line)",
    "explanation": [],
    "diagram": null,
    "starterCode": "def countdown(n):\n    pass\n\ncountdown(3)",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n2\n1\n"
      }
    ],
    "hints": [
      "Base case: if n == 0, return (stop). Otherwise print(n) then countdown(n - 1)."
    ],
    "xpReward": 40,
    "coinReward": 15,
    "unlocks": [
      "py_basic_total_1"
    ]
  },
  {
    "id": "py_basic_total_1",
    "mode": "challenge",
    "title": "The Final Python Test",
    "phase": "Python",
    "topic": "Basics",
    "explanation": [],
    "diagram": null,
    "story": "Write is_even(n) returning True if n is even.",
    "starterCode": "def is_even(n):\n    pass\n\nprint(is_even(4))\nprint(is_even(5))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\nFalse\n"
      }
    ],
    "hints": [
      "n % 2 == 0"
    ],
    "xpReward": 50,
    "coinReward": 20,
    "unlocks": [
      "dsa_bigo_teach"
    ]
  },
  {
    "id": "dsa_bigo_teach",
    "mode": "teach",
    "title": "Big O: How Fast Is Fast?",
    "phase": "DSA",
    "topic": "Complexity",
    "story": "Before any quest, every hero must learn to judge how long a spell will take to cast.",
    "explanation": [
      "Big O describes how an algorithm's running time grows as the input gets bigger.",
      "O(1) = constant: same speed no matter the input size (like grabbing array[0]).",
      "O(n) = linear: doubles the input, doubles the work (one loop over everything).",
      "O(n^2) = quadratic: doubles the input, work goes up 4x (a loop inside a loop).",
      "O(log n) = logarithmic: doubles the input, work barely increases (binary search)."
    ],
    "diagram": "<svg viewBox=\"0 0 370 215\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:370px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><line x1=\"40\" y1=\"180\" x2=\"320\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/><line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"180\" y=\"198\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">input size (n)  -&gt;</text><path d=\"M40,178 L66,178 L92,178 L118,178 L144,178 L170,178 L196,178 L222,178 L248,178 L274,178 L300,178\" stroke=\"#4ade80\" stroke-width=\"3\" fill=\"none\"/><text x=\"300\" y=\"168\" text-anchor=\"start\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">O(1)</text><path d=\"M40,162.0 L66,154.54415587728428 L92,148.8230854637602 L118,144.0 L144,139.7507764050038 L170,135.9091846299028 L196,132.37647640083736 L222,129.08831175456856 L248,126.0 L274,123.07900211696918 L300,120.3007537736028\" stroke=\"#38bdf8\" stroke-width=\"3\" fill=\"none\"/><text x=\"300\" y=\"110\" text-anchor=\"start\" font-size=\"12\" fill=\"#38bdf8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">O(log n)</text><path d=\"M40,180 L66,165 L92,150 L118,135 L144,120 L170,105 L196,90 L222,75 L248,60 L274,45 L300,30\" stroke=\"#fbbf24\" stroke-width=\"3\" fill=\"none\"/><text x=\"300\" y=\"30\" text-anchor=\"start\" font-size=\"12\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">O(n)</text><path d=\"M40,180.0 L66,178.5 L92,174.0 L118,166.5 L144,156.0 L170,142.5 L196,126.0 L222,106.5 L248,84.0 L274,58.5 L300,30.0\" stroke=\"#f87171\" stroke-width=\"3\" fill=\"none\"/><text x=\"230\" y=\"15\" text-anchor=\"start\" font-size=\"12\" fill=\"#f87171\" font-family=\"Courier New, monospace\" font-weight=\"normal\">O(n^2)</text></svg>",
    "starterCode": "def linear_search(nums, target):\n    for n in nums:       # O(n): might check every item once\n        if n == target:\n            return True\n    return False\nprint(linear_search([1,2,3,4,5], 4))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_intro"
    ]
  },
  {
    "id": "dsa_intro",
    "mode": "challenge",
    "title": "The Big O",
    "phase": "DSA",
    "topic": "Complexity",
    "story": "Replace ??? with the time complexity of a single loop over n elements.",
    "starterCode": "complexity = \"???\"\nprint(complexity)",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "O(n)\n"
      }
    ],
    "hints": [
      "A single loop over n elements is O(n)."
    ],
    "xpReward": 30,
    "coinReward": 15,
    "unlocks": [
      "dsa_recursion_1"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_recursion_teach",
    "mode": "teach",
    "title": "Recursion: Functions Calling Themselves",
    "phase": "DSA",
    "topic": "Recursion",
    "story": "A recursive function is like a hero who sends a smaller version of themselves to fight a smaller version of the same battle.",
    "explanation": [
      "Every recursive function needs a BASE CASE that stops the recursion.",
      "Each call should shrink the problem, moving toward the base case.",
      "Python tracks each waiting call on a 'call stack' until the base case is hit, then unwinds back up."
    ],
    "diagram": "<svg viewBox=\"0 0 300 205\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"20.0\" y=\"10\" width=\"260\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"150.0\" y=\"31.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">factorial(3)</text><rect x=\"34.0\" y=\"52\" width=\"232\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"150.0\" y=\"73.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">factorial(2)</text><rect x=\"48.0\" y=\"94\" width=\"204\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"150.0\" y=\"115.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">factorial(1)</text><rect x=\"62.0\" y=\"136\" width=\"176\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"150.0\" y=\"157.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">factorial(0) = 1</text><text x=\"150\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">answers multiply back up as calls return</text></svg>",
    "starterCode": "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(5))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_recursion_1"
    ]
  },
  {
    "id": "dsa_recursion_1",
    "mode": "challenge",
    "title": "Factorial Spell",
    "phase": "DSA",
    "topic": "Recursion",
    "story": "Write a recursive factorial(n).",
    "starterCode": "def factorial(n):\n    pass\n\nprint(factorial(5))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "120\n"
      }
    ],
    "hints": [
      "Base case: if n == 0 return 1."
    ],
    "xpReward": 40,
    "coinReward": 15,
    "unlocks": [
      "dsa_recursion_2"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_recursion_2",
    "mode": "challenge",
    "title": "Fibonacci Steps",
    "phase": "DSA",
    "topic": "Recursion",
    "story": "Write a recursive fib(n).",
    "starterCode": "def fib(n):\n    pass\n\nprint(fib(6))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "8\n"
      }
    ],
    "hints": [
      "Base case: if n <= 1 return n."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_recursion_3"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_recursion_3",
    "mode": "challenge",
    "title": "Power of Two",
    "phase": "DSA",
    "topic": "Recursion",
    "story": "Check if n is a power of two, recursively.",
    "starterCode": "def power_of_two(n):\n    pass\n\nprint(power_of_two(16))\nprint(power_of_two(18))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\nFalse\n"
      }
    ],
    "hints": [
      "If n==1 True; if n%2!=0 False; else recurse n//2."
    ],
    "xpReward": 50,
    "coinReward": 15,
    "unlocks": [
      "dsa_contains_duplicate"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_arrays_hashing_teach",
    "mode": "teach",
    "title": "Arrays & Hash Maps",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "An array is a numbered row of boxes. A hash map remembers \"I have already seen this\" in O(1) time.",
    "explanation": [
      "Arrays (Python lists) give O(1) access by index, but O(n) to search for a value.",
      "A hash map (Python dict/set) trades memory for speed: checking 'is X in here?' is O(1) on average.",
      "The classic trick: loop through the array ONCE, storing what you've seen in a dict, so you never need a second nested loop."
    ],
    "diagram": "<svg viewBox=\"0 0 400 215\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"180\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">nums = [2, 7, 11, 15],  target = 9</text><rect x=\"40\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"67.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><text x=\"67.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">0</text><rect x=\"102\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"129.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">7</text><text x=\"129.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><rect x=\"164\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"191.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">11</text><text x=\"191.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">2</text><rect x=\"226\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"253.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">15</text><text x=\"253.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">3</text><rect x=\"150\" y=\"110\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#16233a\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"230.0\" y=\"139.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">{2: 0}</text><text x=\"230\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">hash map \"seen so far\"</text><text x=\"200\" y=\"178\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">at i=1 (value 7): is 9-7=2 in the map?</text><text x=\"200\" y=\"196\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">YES -&gt; answer [0, 1]</text></svg>",
    "starterCode": "seen = {}\nnums = [2, 7, 11, 15]\ntarget = 9\nfor i, n in enumerate(nums):\n    if target - n in seen:\n        print([seen[target - n], i])\n        break\n    seen[n] = i",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_contains_duplicate"
    ]
  },
  {
    "id": "dsa_contains_duplicate",
    "mode": "challenge",
    "title": "Contains Duplicate",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "Return True if any value appears at least twice.",
    "starterCode": "def contains_duplicate(nums):\n    pass\n\nprint(contains_duplicate([1,2,3,1]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Compare len(set(nums)) to len(nums)."
    ],
    "xpReward": 40,
    "coinReward": 15,
    "unlocks": [
      "dsa_valid_anagram"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_valid_anagram",
    "mode": "challenge",
    "title": "Valid Anagram",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "Return True if t is an anagram of s.",
    "starterCode": "def is_anagram(s, t):\n    pass\n\nprint(is_anagram(\"anagram\", \"nagaram\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Sort both strings and compare."
    ],
    "xpReward": 40,
    "coinReward": 15,
    "unlocks": [
      "dsa_two_sum"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_two_sum",
    "mode": "challenge",
    "title": "Two Sum",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "Return indices of the two numbers that add up to target.",
    "starterCode": "def two_sum(nums, target):\n    pass\n\nprint(two_sum([2,7,11,15], 9))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[0, 1]\n"
      }
    ],
    "hints": [
      "Hash map of value -> index."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_group_anagrams"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_group_anagrams",
    "mode": "challenge",
    "title": "Group Anagrams",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "Group a list of strings into anagram groups.",
    "starterCode": "def group_anagrams(strs):\n    pass\n\nprint(group_anagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]\n"
      }
    ],
    "hints": [
      "Use sorted(word) as the dictionary key."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_top_k_frequent"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_top_k_frequent",
    "mode": "challenge",
    "title": "Top K Frequent Elements",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "Return the k most frequent elements.",
    "starterCode": "def top_k_frequent(nums, k):\n    pass\n\nprint(top_k_frequent([1,1,1,2,2,3], 2))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[1, 2]\n"
      }
    ],
    "hints": [
      "collections.Counter has a most_common(k) method."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_product_except_self"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_product_except_self",
    "mode": "challenge",
    "title": "Product of Array Except Self",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "output[i] = product of all elements except nums[i], no division.",
    "starterCode": "def product_except_self(nums):\n    pass\n\nprint(product_except_self([1,2,3,4]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[24, 12, 8, 6]\n"
      }
    ],
    "hints": [
      "Do a prefix-product pass, then a suffix-product pass."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_valid_sudoku"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_valid_sudoku",
    "mode": "challenge",
    "title": "Valid Sudoku",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "Check if a 9x9 sudoku board is valid (rows, cols, 3x3 boxes have no repeats, \".\" is empty).",
    "starterCode": "def is_valid_sudoku(board):\n    pass\n\nboard = [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],\n         [\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],\n         [\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],\n         [\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],\n         [\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],\n         [\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],\n         [\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],\n         [\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],\n         [\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\nprint(is_valid_sudoku(board))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Track seen digits per row, column, and 3x3 box."
    ],
    "xpReward": 65,
    "coinReward": 20,
    "unlocks": [
      "dsa_encode_decode_strings"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_encode_decode_strings",
    "mode": "challenge",
    "title": "Encode and Decode Strings",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "Encode a list of strings into one string, then decode it back.",
    "starterCode": "def encode(strs):\n    pass\n\ndef decode(s):\n    pass\n\nprint(decode(encode([\"lint\",\"code\",\"love\",\"you\"])))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "['lint', 'code', 'love', 'you']\n"
      }
    ],
    "hints": [
      "Prefix each string with its length and a delimiter like \"#\"."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_longest_consecutive"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_longest_consecutive",
    "mode": "challenge",
    "title": "Longest Consecutive Sequence",
    "phase": "DSA",
    "topic": "Arrays & Hashing",
    "story": "Length of the longest run of consecutive integers.",
    "starterCode": "def longest_consecutive(nums):\n    pass\n\nprint(longest_consecutive([100,4,200,1,3,2]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "Only start counting from numbers that have no predecessor in the set."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_valid_palindrome"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_two_pointers_teach",
    "mode": "teach",
    "title": "Two Pointers",
    "phase": "DSA",
    "topic": "Two Pointers",
    "story": "Two pointers walk toward each other (or together) through a sequence, avoiding a slow nested loop.",
    "explanation": [
      "Great for SORTED arrays: one pointer starts at the left, one at the right.",
      "Move the pointer that helps you get closer to the answer; skip the rest.",
      "Turns many O(n^2) brute-force problems into O(n)."
    ],
    "diagram": "<svg viewBox=\"0 0 400 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">nums = [1,2,4,7,11,15], target = 9</text><rect x=\"30\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"57.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"90\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"117.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"150\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"177.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><rect x=\"210\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"237.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">7</text><rect x=\"270\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"297.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">11</text><rect x=\"330\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"357.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">15</text><text x=\"111\" y=\"90\" text-anchor=\"middle\" font-size=\"13\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"bold\">L</text><text x=\"237\" y=\"90\" text-anchor=\"middle\" font-size=\"13\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"bold\">R</text><text x=\"190\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">nums[L] + nums[R] = 2 + 7 = 9  -&gt;  FOUND!</text><text x=\"190\" y=\"135\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">sum too big -&gt; move R left.  sum too small -&gt; move L right.</text></svg>",
    "starterCode": "def two_sum_sorted(nums, target):\n    l, r = 0, len(nums) - 1\n    while l < r:\n        s = nums[l] + nums[r]\n        if s == target:\n            return [l, r]\n        if s < target:\n            l += 1\n        else:\n            r -= 1\nprint(two_sum_sorted([1,2,4,7,11,15], 9))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_valid_palindrome"
    ]
  },
  {
    "id": "dsa_valid_palindrome",
    "mode": "challenge",
    "title": "Valid Palindrome",
    "phase": "DSA",
    "topic": "Two Pointers",
    "story": "Check if a string is a palindrome, ignoring non-alphanumerics and case.",
    "starterCode": "def is_palindrome(s):\n    pass\n\nprint(is_palindrome(\"A man, a plan, a canal: Panama\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Filter with str.isalnum(), then compare to the reverse."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_two_sum_ii"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_two_sum_ii",
    "mode": "challenge",
    "title": "Two Sum II (Sorted Array)",
    "phase": "DSA",
    "topic": "Two Pointers",
    "story": "Return 1-indexed positions of two numbers in a sorted array that sum to target.",
    "starterCode": "def two_sum_sorted(numbers, target):\n    pass\n\nprint(two_sum_sorted([2,7,11,15], 9))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[1, 2]\n"
      }
    ],
    "hints": [
      "Move the left pointer right if sum too small, right pointer left if too big."
    ],
    "xpReward": 50,
    "coinReward": 20,
    "unlocks": [
      "dsa_three_sum"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_three_sum",
    "mode": "challenge",
    "title": "3Sum",
    "phase": "DSA",
    "topic": "Two Pointers",
    "story": "Return all unique triplets that sum to zero.",
    "starterCode": "def three_sum(nums):\n    pass\n\nprint(three_sum([-1,0,1,2,-1,-4]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[-1, -1, 2], [-1, 0, 1]]\n"
      }
    ],
    "hints": [
      "Sort first, fix one number, two-pointer the rest, skip duplicates."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_container_water"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_container_water",
    "mode": "challenge",
    "title": "Container With Most Water",
    "phase": "DSA",
    "topic": "Two Pointers",
    "story": "Max water area between two vertical lines.",
    "starterCode": "def max_area(height):\n    pass\n\nprint(max_area([1,8,6,2,5,4,8,3,7]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "49\n"
      }
    ],
    "hints": [
      "Move the pointer at the shorter line inward."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_trapping_rain"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_trapping_rain",
    "mode": "challenge",
    "title": "Trapping Rain Water",
    "phase": "DSA",
    "topic": "Two Pointers",
    "story": "Total units of rain water trapped between bars.",
    "starterCode": "def trap(height):\n    pass\n\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "6\n"
      }
    ],
    "hints": [
      "Track the running max height from both sides."
    ],
    "xpReward": 80,
    "coinReward": 30,
    "unlocks": [
      "dsa_best_time_stock"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_sliding_window_teach",
    "mode": "teach",
    "title": "Sliding Window",
    "phase": "DSA",
    "topic": "Sliding Window",
    "story": "A window of fixed or flexible size slides across a sequence, expanding and shrinking to track the best answer so far.",
    "explanation": [
      "Instead of re-checking every possible sub-range from scratch (slow), you grow the window on the right and shrink it on the left.",
      "Great for 'longest/shortest substring/subarray that satisfies X' problems.",
      "Keeps things O(n) because each element enters and leaves the window at most once."
    ],
    "diagram": "<svg viewBox=\"0 0 365 148\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:365px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"170\" y=\"16\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">s = \"abcabcbb\"  (find longest unique-char window)</text><rect x=\"20\" y=\"30\" width=\"38\" height=\"40\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"39.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">a</text><rect x=\"62\" y=\"30\" width=\"38\" height=\"40\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"81.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">b</text><rect x=\"104\" y=\"30\" width=\"38\" height=\"40\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"123.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">c</text><rect x=\"146\" y=\"30\" width=\"38\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"165.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">a</text><rect x=\"188\" y=\"30\" width=\"38\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"207.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">b</text><rect x=\"230\" y=\"30\" width=\"38\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"249.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">c</text><rect x=\"272\" y=\"30\" width=\"38\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"291.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">b</text><rect x=\"314\" y=\"30\" width=\"38\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"333.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">b</text><text x=\"77\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">window = \"abc\" (size 3)</text><text x=\"180\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">grow the window right; when a repeat appears,</text><text x=\"180\" y=\"130\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">shrink the window from the left</text></svg>",
    "starterCode": "def longest_unique(s):\n    seen = {}\n    l = 0\n    best = 0\n    for r, c in enumerate(s):\n        if c in seen and seen[c] >= l:\n            l = seen[c] + 1\n        seen[c] = r\n        best = max(best, r - l + 1)\n    return best\nprint(longest_unique(\"abcabcbb\"))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_best_time_stock"
    ]
  },
  {
    "id": "dsa_best_time_stock",
    "mode": "challenge",
    "title": "Best Time to Buy and Sell Stock",
    "phase": "DSA",
    "topic": "Sliding Window",
    "story": "Max profit from a single buy/sell.",
    "starterCode": "def max_profit(prices):\n    pass\n\nprint(max_profit([7,1,5,3,6,4]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "5\n"
      }
    ],
    "hints": [
      "Track the minimum price seen so far."
    ],
    "xpReward": 50,
    "coinReward": 20,
    "unlocks": [
      "dsa_longest_substr_no_repeat"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_longest_substr_no_repeat",
    "mode": "challenge",
    "title": "Longest Substring Without Repeating Characters",
    "phase": "DSA",
    "topic": "Sliding Window",
    "story": "Length of the longest substring with all unique characters.",
    "starterCode": "def length_of_longest_substring(s):\n    pass\n\nprint(length_of_longest_substring(\"abcabcbb\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Sliding window; shrink from the left when you hit a repeat."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_longest_repeat_char_replace"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_longest_repeat_char_replace",
    "mode": "challenge",
    "title": "Longest Repeating Character Replacement",
    "phase": "DSA",
    "topic": "Sliding Window",
    "story": "Longest substring of one repeated char after at most k replacements.",
    "starterCode": "def character_replacement(s, k):\n    pass\n\nprint(character_replacement(\"AABABBA\", 1))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "Window is valid while (window size - most frequent char count) <= k."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_permutation_in_string"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_permutation_in_string",
    "mode": "challenge",
    "title": "Permutation in String",
    "phase": "DSA",
    "topic": "Sliding Window",
    "story": "Return True if s2 contains a permutation of s1.",
    "starterCode": "def check_inclusion(s1, s2):\n    pass\n\nprint(check_inclusion(\"ab\", \"eidbaooo\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Fixed-size sliding window with a character count comparison."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_min_window_substring"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_min_window_substring",
    "mode": "challenge",
    "title": "Minimum Window Substring",
    "phase": "DSA",
    "topic": "Sliding Window",
    "story": "Smallest substring of s containing all characters of t.",
    "starterCode": "def min_window(s, t):\n    pass\n\nprint(min_window(\"ADOBECODEBANC\", \"ABC\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "BANC\n"
      }
    ],
    "hints": [
      "Expand right until the window covers t, then shrink from the left."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_sliding_window_max"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_sliding_window_max",
    "mode": "challenge",
    "title": "Sliding Window Maximum",
    "phase": "DSA",
    "topic": "Sliding Window",
    "story": "Max value in each sliding window of size k.",
    "starterCode": "def max_sliding_window(nums, k):\n    pass\n\nprint(max_sliding_window([1,3,-1,-3,5,3,6,7], 3))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[3, 3, 5, 5, 6, 7]\n"
      }
    ],
    "hints": [
      "Use a monotonic decreasing deque of indices."
    ],
    "xpReward": 85,
    "coinReward": 30,
    "unlocks": [
      "dsa_valid_parentheses"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_stack_teach",
    "mode": "teach",
    "title": "Stacks: Last In, First Out",
    "phase": "DSA",
    "topic": "Stack",
    "story": "A stack is like a pile of plates: you can only add or remove from the top.",
    "explanation": [
      "push adds to the top; pop removes from the top. The last thing pushed is the first thing popped (LIFO).",
      "Perfect for matching pairs (parentheses), undo history, and tracking 'what came before'.",
      "In Python, a plain list works great as a stack: list.append() = push, list.pop() = pop."
    ],
    "diagram": "<svg viewBox=\"0 0 430 165\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:430px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"90\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">push \"(\" then \"[\"</text><rect x=\"30\" y=\"100\" width=\"60\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"60.0\" y=\"121.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">(</text><rect x=\"30\" y=\"62\" width=\"60\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"60.0\" y=\"83.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[</text><text x=\"90\" y=\"148\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">stack grows UP</text><text x=\"240\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">see \"]\" -&gt; pop top, must match</text><rect x=\"210\" y=\"100\" width=\"60\" height=\"34\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"240.0\" y=\"121.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">(</text><rect x=\"210\" y=\"62\" width=\"60\" height=\"34\" rx=\"6\" fill=\"#1e3a2b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"240.0\" y=\"83.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">]</text><line x1=\"270\" y1=\"79\" x2=\"300\" y2=\"79\" stroke=\"#4ade80\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"320\" y=\"74\" text-anchor=\"start\" font-size=\"10\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">matches \"[\",</text><text x=\"320\" y=\"90\" text-anchor=\"start\" font-size=\"10\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">pop it - OK</text></svg>",
    "starterCode": "def is_valid(s):\n    stack = []\n    pairs = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n    for c in s:\n        if c in pairs:\n            if not stack or stack.pop() != pairs[c]:\n                return False\n        else:\n            stack.append(c)\n    return not stack\nprint(is_valid(\"()[]{}\"))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_valid_parentheses"
    ]
  },
  {
    "id": "dsa_valid_parentheses",
    "mode": "challenge",
    "title": "Valid Parentheses",
    "phase": "DSA",
    "topic": "Stack",
    "story": "Check if a string of ()[]{}  is balanced and valid.",
    "starterCode": "def is_valid(s):\n    pass\n\nprint(is_valid(\"()[]{}\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Push openers, pop and match on closers."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_min_stack"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_min_stack",
    "mode": "challenge",
    "title": "Min Stack",
    "phase": "DSA",
    "topic": "Stack",
    "story": "Design a stack supporting push/pop/top/getMin all in O(1).",
    "starterCode": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n    def push(self, val):\n        pass\n    def pop(self):\n        pass\n    def top(self):\n        pass\n    def get_min(self):\n        pass\n\nms = MinStack()\nms.push(-2); ms.push(0); ms.push(-3)\nprint(ms.get_min())\nms.pop()\nprint(ms.top())\nprint(ms.get_min())",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "-3\n0\n-2\n"
      }
    ],
    "hints": [
      "Keep a parallel stack tracking the running minimum."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_eval_rpn"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_eval_rpn",
    "mode": "challenge",
    "title": "Evaluate Reverse Polish Notation",
    "phase": "DSA",
    "topic": "Stack",
    "story": "Evaluate an arithmetic expression given in RPN token list.",
    "starterCode": "def eval_rpn(tokens):\n    pass\n\nprint(eval_rpn([\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "22\n"
      }
    ],
    "hints": [
      "Push numbers, pop two and apply the operator when you see one."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_generate_parentheses"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_generate_parentheses",
    "mode": "challenge",
    "title": "Generate Parentheses",
    "phase": "DSA",
    "topic": "Stack",
    "story": "Generate all combinations of n well-formed pairs of parentheses.",
    "starterCode": "def generate_parenthesis(n):\n    pass\n\nprint(generate_parenthesis(3))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "['((()))', '(()())', '(())()', '()(())', '()()()']\n"
      }
    ],
    "hints": [
      "Backtrack, only add \")\" if it stays valid."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_daily_temperatures"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_daily_temperatures",
    "mode": "challenge",
    "title": "Daily Temperatures",
    "phase": "DSA",
    "topic": "Stack",
    "story": "For each day, how many days until a warmer temperature (0 if none).",
    "starterCode": "def daily_temperatures(temps):\n    pass\n\nprint(daily_temperatures([73,74,75,71,69,72,76,73]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[1, 1, 4, 2, 1, 1, 0, 0]\n"
      }
    ],
    "hints": [
      "Monotonic decreasing stack of indices."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_car_fleet"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_car_fleet",
    "mode": "challenge",
    "title": "Car Fleet",
    "phase": "DSA",
    "topic": "Stack",
    "story": "Count how many car fleets reach the destination target.",
    "starterCode": "def car_fleet(target, position, speed):\n    pass\n\nprint(car_fleet(12, [10,8,0,5,3], [2,4,1,1,3]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Sort by position descending, track arrival time; a slower fleet in front absorbs faster ones behind."
    ],
    "xpReward": 80,
    "coinReward": 30,
    "unlocks": [
      "dsa_largest_rectangle"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_largest_rectangle",
    "mode": "challenge",
    "title": "Largest Rectangle in Histogram",
    "phase": "DSA",
    "topic": "Stack",
    "story": "Largest rectangular area in a histogram.",
    "starterCode": "def largest_rectangle_area(heights):\n    pass\n\nprint(largest_rectangle_area([2,1,5,6,2,3]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "10\n"
      }
    ],
    "hints": [
      "Monotonic increasing stack of (start_index, height)."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_binary_search"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_binary_search_teach",
    "mode": "teach",
    "title": "Binary Search: Divide and Conquer",
    "phase": "DSA",
    "topic": "Binary Search",
    "story": "On a SORTED list, binary search finds a target by repeatedly cutting the search area in half.",
    "explanation": [
      "Look at the middle element. Too big? The answer must be to the left. Too small? It must be to the right.",
      "Each check eliminates HALF the remaining possibilities — that's what makes it O(log n), incredibly fast.",
      "Requires the data to be sorted first!"
    ],
    "diagram": "<svg viewBox=\"0 0 400 130\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">nums = [-1,0,3,5,9,12], target = 9</text><rect x=\"40\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"67.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">-1</text><rect x=\"98\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"125.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"156\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"183.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><rect x=\"214\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"241.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">5</text><rect x=\"272\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"299.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">9</text><rect x=\"330\" y=\"30\" width=\"54\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"357.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">12</text><text x=\"241\" y=\"90\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">mid (step 1) = 5, too small -&gt; go right</text><text x=\"299\" y=\"108\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">mid (step 2) = 9  -&gt;  FOUND!</text></svg>",
    "starterCode": "def binary_search(nums, target):\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1\nprint(binary_search([-1,0,3,5,9,12], 9))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_binary_search"
    ]
  },
  {
    "id": "dsa_binary_search",
    "mode": "challenge",
    "title": "Binary Search",
    "phase": "DSA",
    "topic": "Binary Search",
    "story": "Return index of target in a sorted array, or -1.",
    "starterCode": "def binary_search(nums, target):\n    pass\n\nprint(binary_search([-1,0,3,5,9,12], 9))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "mid = (lo + hi) // 2."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_search_2d_matrix"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_search_2d_matrix",
    "mode": "challenge",
    "title": "Search a 2D Matrix",
    "phase": "DSA",
    "topic": "Binary Search",
    "story": "Search a target in a row-and-column sorted matrix.",
    "starterCode": "def search_matrix(matrix, target):\n    pass\n\nprint(search_matrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Treat the matrix as one flat sorted array using mid // cols and mid % cols."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_koko_bananas"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_koko_bananas",
    "mode": "challenge",
    "title": "Koko Eating Bananas",
    "phase": "DSA",
    "topic": "Binary Search",
    "story": "Minimum eating speed k so Koko finishes all piles within h hours.",
    "starterCode": "def min_eating_speed(piles, h):\n    pass\n\nprint(min_eating_speed([3,6,7,11], 8))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "Binary search the answer space (possible eating speeds)."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_find_min_rotated"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_find_min_rotated",
    "mode": "challenge",
    "title": "Find Minimum in Rotated Sorted Array",
    "phase": "DSA",
    "topic": "Binary Search",
    "story": "Find the minimum element in a rotated sorted array.",
    "starterCode": "def find_min(nums):\n    pass\n\nprint(find_min([3,4,5,1,2]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1\n"
      }
    ],
    "hints": [
      "Compare nums[mid] to nums[hi] to decide which half is sorted."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_search_rotated"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_search_rotated",
    "mode": "challenge",
    "title": "Search in Rotated Sorted Array",
    "phase": "DSA",
    "topic": "Binary Search",
    "story": "Find target index in a rotated sorted array, or -1.",
    "starterCode": "def search(nums, target):\n    pass\n\nprint(search([4,5,6,7,0,1,2], 0))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "Figure out which half is sorted, then decide which side to search."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_time_based_kv"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_time_based_kv",
    "mode": "challenge",
    "title": "Time Based Key-Value Store",
    "phase": "DSA",
    "topic": "Binary Search",
    "story": "Store (key, value) with timestamps; get the value at or before a given timestamp.",
    "starterCode": "class TimeMap:\n    def __init__(self):\n        self.store = {}\n    def set(self, key, value, timestamp):\n        pass\n    def get(self, key, timestamp):\n        pass\n\ntm = TimeMap()\ntm.set(\"foo\", \"bar\", 1)\nprint(tm.get(\"foo\", 1))\nprint(tm.get(\"foo\", 3))\ntm.set(\"foo\", \"bar2\", 4)\nprint(tm.get(\"foo\", 4))\nprint(tm.get(\"foo\", 5))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "bar\nbar\nbar2\nbar2\n"
      }
    ],
    "hints": [
      "Timestamps are inserted in increasing order, so binary search per key."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_median_two_sorted"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_median_two_sorted",
    "mode": "challenge",
    "title": "Median of Two Sorted Arrays",
    "phase": "DSA",
    "topic": "Binary Search",
    "story": "Return the median of two sorted arrays.",
    "starterCode": "def find_median_sorted_arrays(nums1, nums2):\n    pass\n\nprint(find_median_sorted_arrays([1,3], [2]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2.0\n"
      }
    ],
    "hints": [
      "Merging then indexing the middle is a simple correct approach."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_reverse_linked_list"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_linked_list_teach",
    "mode": "teach",
    "title": "Linked Lists: Chains of Nodes",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "A linked list is a chain of nodes, where each node holds a value and a pointer to the NEXT node.",
    "explanation": [
      "Unlike an array, nodes aren't stored next to each other in memory — they're connected by .next pointers.",
      "Inserting/removing a node is fast (just rewire pointers), but you can't jump straight to index 5 like an array — you must walk from the head.",
      "A classic trick: two pointers moving at different speeds (slow/fast) can detect cycles or find the middle."
    ],
    "diagram": "<svg viewBox=\"0 0 360 205\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"40\" y=\"16\" text-anchor=\"start\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">head</text><rect x=\"10\" y=\"30\" width=\"60\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"40.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><line x1=\"70\" y1=\"50\" x2=\"100\" y2=\"50\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"100\" y=\"30\" width=\"60\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"130.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><line x1=\"160\" y1=\"50\" x2=\"190\" y2=\"50\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"30\" width=\"60\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"220.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><line x1=\"250\" y1=\"50\" x2=\"280\" y2=\"50\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"295\" y=\"55\" text-anchor=\"start\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">None</text><text x=\"150\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">reversed:</text><text x=\"30\" y=\"125\" text-anchor=\"start\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">None</text><line x1=\"280\" y1=\"145\" x2=\"250\" y2=\"145\" stroke=\"#4ade80\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"125\" width=\"60\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"220.0\" y=\"149.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><line x1=\"190\" y1=\"145\" x2=\"160\" y2=\"145\" stroke=\"#4ade80\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"100\" y=\"125\" width=\"60\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"130.0\" y=\"149.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><line x1=\"100\" y1=\"145\" x2=\"70\" y2=\"145\" stroke=\"#4ade80\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"125\" width=\"60\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"40.0\" y=\"149.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><text x=\"60\" y=\"190\" text-anchor=\"middle\" font-size=\"10\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">new head</text></svg>",
    "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_list(head):\n    prev = None\n    while head:\n        nxt = head.next\n        head.next = prev\n        prev = head\n        head = nxt\n    return prev\n\nhead = ListNode(1, ListNode(2, ListNode(3)))\nrev = reverse_list(head)\nwhile rev:\n    print(rev.val, end=\" \")\n    rev = rev.next\nprint()",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_reverse_linked_list"
    ]
  },
  {
    "id": "dsa_reverse_linked_list",
    "mode": "challenge",
    "title": "Reverse Linked List",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Reverse a singly linked list.",
    "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_list(head):\n    pass\n\nhead = ListNode(1, ListNode(2, ListNode(3)))\nrev = reverse_list(head)\nwhile rev:\n    print(rev.val, end=\" \")\n    rev = rev.next\nprint()",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3 2 1 \n"
      }
    ],
    "hints": [
      "Track prev, curr, next and flip the pointer each step."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_merge_two_lists"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_merge_two_lists",
    "mode": "challenge",
    "title": "Merge Two Sorted Lists",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Merge two sorted linked lists into one sorted list.",
    "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef merge_two_lists(l1, l2):\n    pass\n\nl1 = ListNode(1, ListNode(2, ListNode(4)))\nl2 = ListNode(1, ListNode(3, ListNode(4)))\nm = merge_two_lists(l1, l2)\nwhile m:\n    print(m.val, end=\" \")\n    m = m.next\nprint()",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1 1 2 3 4 4 \n"
      }
    ],
    "hints": [
      "Use a dummy head node to simplify merging."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_reorder_list"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_reorder_list",
    "mode": "challenge",
    "title": "Reorder List",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Reorder the list so it zig-zags: first, last, second, second-last, ...",
    "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reorder_list(head):\n    pass\n\nhead = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))\nreorder_list(head)\nwhile head:\n    print(head.val, end=\" \")\n    head = head.next\nprint()",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1 4 2 3 \n"
      }
    ],
    "hints": [
      "Find the middle, reverse the second half, then merge alternately."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_remove_nth_from_end"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_remove_nth_from_end",
    "mode": "challenge",
    "title": "Remove Nth Node From End of List",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Remove the nth node counting from the end of the list.",
    "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef remove_nth_from_end(head, n):\n    pass\n\nhead = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))\nnew_head = remove_nth_from_end(head, 2)\nwhile new_head:\n    print(new_head.val, end=\" \")\n    new_head = new_head.next\nprint()",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1 2 3 5 \n"
      }
    ],
    "hints": [
      "Two pointers, fast one starts n steps ahead."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_copy_random_list"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_copy_random_list",
    "mode": "challenge",
    "title": "Copy List with Random Pointer",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Deep-copy a linked list where each node also has a random pointer.",
    "starterCode": "class Node:\n    def __init__(self, x, next=None, random=None):\n        self.val = x\n        self.next = next\n        self.random = random\n\ndef copy_random_list(head):\n    pass\n\na = Node(1); b = Node(2); a.next = b; a.random = b; b.random = b\ncopied = copy_random_list(a)\nprint(copied.val, copied.next.val, copied.random.val)",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1 2 2\n"
      }
    ],
    "hints": [
      "Map original nodes to their clones in a dict first."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_add_two_numbers"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_add_two_numbers",
    "mode": "challenge",
    "title": "Add Two Numbers",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Add two numbers represented as reversed-digit linked lists.",
    "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef add_two_numbers(l1, l2):\n    pass\n\nl1 = ListNode(2, ListNode(4, ListNode(3)))\nl2 = ListNode(5, ListNode(6, ListNode(4)))\nres = add_two_numbers(l1, l2)\nwhile res:\n    print(res.val, end=\" \")\n    res = res.next\nprint()",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "7 0 8 \n"
      }
    ],
    "hints": [
      "Digits are stored in reverse order; add with carry like grade-school addition."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_linked_list_cycle"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_linked_list_cycle",
    "mode": "challenge",
    "title": "Linked List Cycle",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Detect if a linked list has a cycle.",
    "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef has_cycle(head):\n    pass\n\nhead = ListNode(3)\nnode2 = ListNode(2)\nhead.next = node2\nnode2.next = ListNode(0, ListNode(-4, node2))\nprint(has_cycle(head))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Floyd's algorithm: fast pointer moves 2 steps, slow moves 1."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_find_duplicate_number"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_find_duplicate_number",
    "mode": "challenge",
    "title": "Find the Duplicate Number",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Find the one repeated number in an array of n+1 integers in range [1,n].",
    "starterCode": "def find_duplicate(nums):\n    pass\n\nprint(find_duplicate([1,3,4,2,2]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2\n"
      }
    ],
    "hints": [
      "Treat the array as a linked list via indices; use cycle detection."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_lru_cache"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_lru_cache",
    "mode": "challenge",
    "title": "LRU Cache",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Design a Least Recently Used cache with O(1) get and put.",
    "starterCode": "from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cap = capacity\n        self.cache = OrderedDict()\n    def get(self, key):\n        pass\n    def put(self, key, value):\n        pass\n\nc = LRUCache(2)\nc.put(1, 1)\nc.put(2, 2)\nprint(c.get(1))\nc.put(3, 3)\nprint(c.get(2))\nc.put(4, 4)\nprint(c.get(1))\nprint(c.get(3))\nprint(c.get(4))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1\n-1\n-1\n3\n4\n"
      }
    ],
    "hints": [
      "OrderedDict.move_to_end() and popitem(last=False) give O(1) LRU behavior."
    ],
    "xpReward": 85,
    "coinReward": 30,
    "unlocks": [
      "dsa_merge_k_lists"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_merge_k_lists",
    "mode": "challenge",
    "title": "Merge K Sorted Lists",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Merge k sorted linked lists into one sorted list.",
    "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef merge_k_lists(lists):\n    pass\n\nl1 = ListNode(1, ListNode(4, ListNode(5)))\nl2 = ListNode(1, ListNode(3, ListNode(4)))\nl3 = ListNode(2, ListNode(6))\nres = merge_k_lists([l1, l2, l3])\nwhile res:\n    print(res.val, end=\" \")\n    res = res.next\nprint()",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1 1 2 3 4 4 5 6 \n"
      }
    ],
    "hints": [
      "A min-heap of (value, list_index, node) merges all lists efficiently."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_reverse_k_group"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_reverse_k_group",
    "mode": "challenge",
    "title": "Reverse Nodes in K Group",
    "phase": "DSA",
    "topic": "Linked List",
    "story": "Reverse the nodes of a linked list k at a time.",
    "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_k_group(head, k):\n    pass\n\nhead = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))\nres = reverse_k_group(head, 2)\nwhile res:\n    print(res.val, end=\" \")\n    res = res.next\nprint()",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2 1 4 3 5 \n"
      }
    ],
    "hints": [
      "Reverse each group of k, recursing on the remainder first."
    ],
    "xpReward": 95,
    "coinReward": 30,
    "unlocks": [
      "dsa_invert_tree"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_trees_teach",
    "mode": "teach",
    "title": "Binary Trees",
    "phase": "DSA",
    "topic": "Trees",
    "story": "A binary tree is a node with up to two children: left and right. Most tree problems are solved with recursion.",
    "explanation": [
      "Each node has .val, .left, and .right. A node with no children is called a 'leaf'.",
      "The recursive pattern: solve the problem for the left subtree, solve it for the right subtree, combine the two answers.",
      "A Binary Search Tree (BST) keeps left < node < right at every level, making search O(log n) on average."
    ],
    "diagram": "<svg viewBox=\"0 0 360 205\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><circle cx=\"180\" cy=\"20\" r=\"20\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"180\" y=\"24.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><line x1=\"165\" y1=\"35\" x2=\"100\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"2\"/><line x1=\"195\" y1=\"35\" x2=\"260\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"80\" r=\"20\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"100\" y=\"84.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><circle cx=\"260\" cy=\"80\" r=\"20\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"260\" y=\"84.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">7</text><line x1=\"88\" y1=\"95\" x2=\"50\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2\"/><line x1=\"112\" y1=\"95\" x2=\"150\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2\"/><line x1=\"248\" y1=\"95\" x2=\"220\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2\"/><line x1=\"272\" y1=\"95\" x2=\"300\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"145\" r=\"18\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"50\" y=\"149.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><circle cx=\"150\" cy=\"145\" r=\"18\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"150\" y=\"149.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><circle cx=\"220\" cy=\"145\" r=\"18\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"220\" y=\"149.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">6</text><circle cx=\"300\" cy=\"145\" r=\"18\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"300\" y=\"149.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">9</text><text x=\"180\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">max_depth(4) = 1 + max(depth(2), depth(7)) = 3</text></svg>",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef max_depth(root):\n    if not root:\n        return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))\n\nroot = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(7))\nprint(max_depth(root))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_invert_tree"
    ]
  },
  {
    "id": "dsa_invert_tree",
    "mode": "challenge",
    "title": "Invert Binary Tree",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Invert Binary Tree.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef invert_tree(root):\n    pass\n\ndef preorder(node):\n    if not node:\n        return \"\"\n    return str(node.val) + \" \" + preorder(node.left) + preorder(node.right)\n\nroot = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(7, TreeNode(6), TreeNode(9)))\ninv = invert_tree(root)\nprint(preorder(inv).strip())",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4 7 9 6 2 3 1\n"
      }
    ],
    "hints": [
      "Swap left and right recursively."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_max_depth"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_max_depth",
    "mode": "challenge",
    "title": "Maximum Depth of Binary Tree",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Maximum Depth of Binary Tree.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef max_depth(root):\n    pass\n\nroot = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))\nprint(max_depth(root))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "1 + max(left depth, right depth)."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_diameter_tree"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_diameter_tree",
    "mode": "challenge",
    "title": "Diameter of Binary Tree",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Diameter of Binary Tree.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef diameter_of_binary_tree(root):\n    pass\n\nroot = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))\nprint(diameter_of_binary_tree(root))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "At every node, track left depth + right depth as a candidate diameter."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_balanced_tree"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_balanced_tree",
    "mode": "challenge",
    "title": "Balanced Binary Tree",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Balanced Binary Tree.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef is_balanced(root):\n    pass\n\nroot = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))\nprint(is_balanced(root))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Return -1 as a sentinel for \"already unbalanced\" to short-circuit."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_same_tree"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_same_tree",
    "mode": "challenge",
    "title": "Same Tree",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Same Tree.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef is_same_tree(p, q):\n    pass\n\na = TreeNode(1, TreeNode(2), TreeNode(3))\nb = TreeNode(1, TreeNode(2), TreeNode(3))\nprint(is_same_tree(a, b))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Both None -> True; compare val then recurse on children."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_subtree"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_subtree",
    "mode": "challenge",
    "title": "Subtree of Another Tree",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Subtree of Another Tree.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef is_same_tree(p, q):\n    if not p and not q:\n        return True\n    if not p or not q or p.val != q.val:\n        return False\n    return is_same_tree(p.left, q.left) and is_same_tree(p.right, q.right)\n\ndef is_subtree(root, sub_root):\n    pass\n\nroot = TreeNode(3, TreeNode(4, TreeNode(1), TreeNode(2)), TreeNode(5))\nsub = TreeNode(4, TreeNode(1), TreeNode(2))\nprint(is_subtree(root, sub))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Check is_same_tree starting from every node of root."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_lca_bst"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_lca_bst",
    "mode": "challenge",
    "title": "Lowest Common Ancestor of a BST",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Lowest Common Ancestor of a BST.",
    "starterCode": "class TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\n\ndef lowest_common_ancestor(root, p, q):\n    pass\n\nroot = TreeNode(6)\nroot.left = TreeNode(2); root.right = TreeNode(8)\nroot.left.left = TreeNode(0); root.left.right = TreeNode(4)\nroot.right.left = TreeNode(7); root.right.right = TreeNode(9)\nroot.left.right.left = TreeNode(3); root.left.right.right = TreeNode(5)\np = root.left; q = root.left.right\nprint(lowest_common_ancestor(root, p, q).val)",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2\n"
      }
    ],
    "hints": [
      "If both p and q are smaller, go left; both larger, go right; else you found the split point."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_level_order"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_level_order",
    "mode": "challenge",
    "title": "Binary Tree Level Order Traversal",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Binary Tree Level Order Traversal.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef level_order(root):\n    pass\n\nroot = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))\nprint(level_order(root))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[3], [9, 20], [15, 7]]\n"
      }
    ],
    "hints": [
      "BFS with a queue, process one full level at a time."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_right_side_view"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_right_side_view",
    "mode": "challenge",
    "title": "Binary Tree Right Side View",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Binary Tree Right Side View.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef right_side_view(root):\n    pass\n\nroot = TreeNode(1, TreeNode(2, None, TreeNode(5)), TreeNode(3, None, TreeNode(4)))\nprint(right_side_view(root))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[1, 3, 4]\n"
      }
    ],
    "hints": [
      "BFS by level, keep the last node value seen in each level."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_good_nodes"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_good_nodes",
    "mode": "challenge",
    "title": "Count Good Nodes in Binary Tree",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Count Good Nodes in Binary Tree.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef good_nodes(root):\n    pass\n\nroot = TreeNode(3, TreeNode(1, None, TreeNode(3)), TreeNode(4, TreeNode(1), TreeNode(5)))\nprint(good_nodes(root))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "A node is \"good\" if its value >= the max value seen on the path from root."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_validate_bst"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_validate_bst",
    "mode": "challenge",
    "title": "Validate Binary Search Tree",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Validate Binary Search Tree.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef is_valid_bst(root):\n    pass\n\nroot = TreeNode(2, TreeNode(1), TreeNode(3))\nprint(is_valid_bst(root))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Pass down a valid (low, high) range for each node."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_kth_smallest_bst"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_kth_smallest_bst",
    "mode": "challenge",
    "title": "Kth Smallest Element in a BST",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Kth Smallest Element in a BST.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef kth_smallest(root, k):\n    pass\n\nroot = TreeNode(3, TreeNode(1, None, TreeNode(2)), TreeNode(4))\nprint(kth_smallest(root, 1))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1\n"
      }
    ],
    "hints": [
      "In-order traversal of a BST visits values in ascending order."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_build_tree_pre_in"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_build_tree_pre_in",
    "mode": "challenge",
    "title": "Construct Binary Tree from Preorder and Inorder",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Construct Binary Tree from Preorder and Inorder.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef build_tree(preorder, inorder):\n    pass\n\ndef preorder_str(node):\n    if not node:\n        return \"\"\n    return str(node.val) + \" \" + preorder_str(node.left) + preorder_str(node.right)\n\nroot = build_tree([3,9,20,15,7], [9,3,15,20,7])\nprint(preorder_str(root).strip())",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3 9 20 15 7\n"
      }
    ],
    "hints": [
      "The first preorder element is always the root; find it in inorder to split left/right subtrees."
    ],
    "xpReward": 85,
    "coinReward": 30,
    "unlocks": [
      "dsa_max_path_sum"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_max_path_sum",
    "mode": "challenge",
    "title": "Binary Tree Maximum Path Sum",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Binary Tree Maximum Path Sum.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef max_path_sum(root):\n    pass\n\nroot = TreeNode(-10, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))\nprint(max_path_sum(root))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "42\n"
      }
    ],
    "hints": [
      "At each node, the best \"through\" path is node.val + best left gain + best right gain."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_serialize_tree"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_serialize_tree",
    "mode": "challenge",
    "title": "Serialize and Deserialize Binary Tree",
    "phase": "DSA",
    "topic": "Trees",
    "story": "Solve: Serialize and Deserialize Binary Tree.",
    "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef serialize(root):\n    pass\n\ndef deserialize(data):\n    pass\n\nroot = TreeNode(1, TreeNode(2), TreeNode(3, TreeNode(4), TreeNode(5)))\ndata = serialize(root)\nback = deserialize(data)\nprint(serialize(back))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1,2,N,N,3,4,N,N,5,N,N\n"
      }
    ],
    "hints": [
      "Preorder DFS with \"N\" markers for None children round-trips cleanly."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_implement_trie"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_tries_teach",
    "mode": "teach",
    "title": "Tries: Trees for Words",
    "phase": "DSA",
    "topic": "Tries",
    "story": "A trie (prefix tree) stores words letter by letter, sharing common prefixes between words.",
    "explanation": [
      "Each node is a dict of {letter: child_node}, plus a flag marking 'a full word ends here'.",
      "Looking up a word or a prefix takes O(word length) — completely independent of how many words are stored!",
      "Used for autocomplete, spell-check, and word-search puzzles."
    ],
    "diagram": "<svg viewBox=\"0 0 400 315\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><circle cx=\"60\" cy=\"20\" r=\"16\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"60\" y=\"23.5\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">root</text><line x1=\"60\" y1=\"36\" x2=\"60\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"76\" r=\"16\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"60\" y=\"80.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">a</text><line x1=\"60\" y1=\"92\" x2=\"60\" y2=\"116\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"132\" r=\"16\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"60\" y=\"136.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">p</text><line x1=\"60\" y1=\"148\" x2=\"60\" y2=\"172\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"188\" r=\"16\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"60\" y=\"192.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">p</text><text x=\"100\" y=\"192\" text-anchor=\"start\" font-size=\"10\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">&lt;- end of \"app\"</text><line x1=\"70\" y1=\"195\" x2=\"130\" y2=\"225\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"235\" r=\"16\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"150\" y=\"239.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">l</text><line x1=\"160\" y1=\"245\" x2=\"190\" y2=\"265\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"210\" cy=\"270\" r=\"16\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"210\" y=\"274.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">e</text><text x=\"250\" y=\"274\" text-anchor=\"start\" font-size=\"10\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">&lt;- end of \"apple\"</text><text x=\"20\" y=\"300\" text-anchor=\"start\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">\"app\" and \"apple\" share the same a-p-p path</text></svg>",
    "starterCode": "class Trie:\n    def __init__(self):\n        self.children = {}\n        self.end = False\n    def insert(self, word):\n        node = self\n        for c in word:\n            node = node.children.setdefault(c, Trie())\n        node.end = True\n    def search(self, word):\n        node = self\n        for c in word:\n            if c not in node.children:\n                return False\n            node = node.children[c]\n        return node.end\n\nt = Trie()\nt.insert(\"app\")\nprint(t.search(\"app\"))\nprint(t.search(\"ap\"))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_implement_trie"
    ]
  },
  {
    "id": "dsa_implement_trie",
    "mode": "challenge",
    "title": "Implement Trie (Prefix Tree)",
    "phase": "DSA",
    "topic": "Tries",
    "story": "Solve: Implement Trie (Prefix Tree).",
    "starterCode": "class Trie:\n    def __init__(self):\n        self.children = {}\n        self.end = False\n    def insert(self, word):\n        pass\n    def search(self, word):\n        pass\n    def starts_with(self, prefix):\n        pass\n\ntrie = Trie()\ntrie.insert(\"apple\")\nprint(trie.search(\"apple\"))\nprint(trie.search(\"app\"))\nprint(trie.starts_with(\"app\"))\ntrie.insert(\"app\")\nprint(trie.search(\"app\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\nFalse\nTrue\nTrue\n"
      }
    ],
    "hints": [
      "Each Trie node is itself a dict of children plus an end-of-word flag."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_word_dictionary"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_word_dictionary",
    "mode": "challenge",
    "title": "Design Add and Search Words Data Structure",
    "phase": "DSA",
    "topic": "Tries",
    "story": "Solve: Design Add and Search Words Data Structure.",
    "starterCode": "class WordDictionary:\n    def __init__(self):\n        self.children = {}\n        self.end = False\n    def add_word(self, word):\n        pass\n    def search(self, word):\n        pass\n\nwd = WordDictionary()\nwd.add_word(\"bad\")\nwd.add_word(\"dad\")\nwd.add_word(\"mad\")\nprint(wd.search(\"pad\"))\nprint(wd.search(\"bad\"))\nprint(wd.search(\".ad\"))\nprint(wd.search(\"b..\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "False\nTrue\nTrue\nTrue\n"
      }
    ],
    "hints": [
      "\".\" wildcards mean: try every child branch at that trie level."
    ],
    "xpReward": 80,
    "coinReward": 30,
    "unlocks": [
      "dsa_word_search_ii"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_word_search_ii",
    "mode": "challenge",
    "title": "Word Search II",
    "phase": "DSA",
    "topic": "Tries",
    "story": "Solve: Word Search II.",
    "starterCode": "def find_words(board, words):\n    pass\n\nboard = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]]\nwords = [\"oath\",\"pea\",\"eat\",\"rain\"]\nprint(find_words(board, words))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "['eat', 'oath']\n"
      }
    ],
    "hints": [
      "Build a trie of all target words, then DFS the board while walking the trie."
    ],
    "xpReward": 100,
    "coinReward": 35,
    "unlocks": [
      "dsa_kth_largest_stream"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_heap_teach",
    "mode": "teach",
    "title": "Heaps: Always Know the Extreme",
    "phase": "DSA",
    "topic": "Heap",
    "story": "A heap is a tree-shaped structure that always keeps the smallest (or largest) item instantly accessible at the top.",
    "explanation": [
      "Python's heapq module gives you a MIN-heap: heap[0] is always the smallest item.",
      "Push and pop are both O(log n) — much faster than re-sorting the whole thing every time.",
      "Want a max-heap? Just push negative numbers, then negate them back when you read them out."
    ],
    "diagram": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><circle cx=\"150\" cy=\"20\" r=\"20\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"150\" y=\"24.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><line x1=\"138\" y1=\"36\" x2=\"90\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"2\"/><line x1=\"162\" y1=\"36\" x2=\"210\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"80\" r=\"18\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"90\" y=\"84.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><circle cx=\"210\" cy=\"80\" r=\"18\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"210\" y=\"84.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">8</text><line x1=\"80\" y1=\"95\" x2=\"55\" y2=\"125\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"55\" cy=\"140\" r=\"16\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"55\" y=\"144.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">5</text><text x=\"150\" y=\"175\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">heap[0] is always the current minimum</text></svg>",
    "starterCode": "import heapq\nnums = [5, 1, 8, 2]\nheapq.heapify(nums)\nprint(nums[0])\nheapq.heappush(nums, 0)\nprint(nums[0])\nprint(heapq.heappop(nums))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_kth_largest_stream"
    ]
  },
  {
    "id": "dsa_kth_largest_stream",
    "mode": "challenge",
    "title": "Kth Largest Element in a Stream",
    "phase": "DSA",
    "topic": "Heap",
    "story": "Solve: Kth Largest Element in a Stream.",
    "starterCode": "import heapq\nclass KthLargest:\n    def __init__(self, k, nums):\n        pass\n    def add(self, val):\n        pass\n\nkth = KthLargest(3, [4,5,8,2])\nprint(kth.add(3))\nprint(kth.add(5))\nprint(kth.add(10))\nprint(kth.add(9))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n5\n5\n8\n"
      }
    ],
    "hints": [
      "Keep a min-heap of size k; its top is the kth largest."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_last_stone_weight"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_last_stone_weight",
    "mode": "challenge",
    "title": "Last Stone Weight",
    "phase": "DSA",
    "topic": "Heap",
    "story": "Solve: Last Stone Weight.",
    "starterCode": "def last_stone_weight(stones):\n    pass\n\nprint(last_stone_weight([2,7,4,1,8,1]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1\n"
      }
    ],
    "hints": [
      "Python heapq is a min-heap; negate values to simulate a max-heap."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_k_closest_points"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_k_closest_points",
    "mode": "challenge",
    "title": "K Closest Points to Origin",
    "phase": "DSA",
    "topic": "Heap",
    "story": "Solve: K Closest Points to Origin.",
    "starterCode": "def k_closest(points, k):\n    pass\n\nprint(k_closest([[1,3],[-2,2]], 1))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[-2, 2]]\n"
      }
    ],
    "hints": [
      "Sort (or heap) by squared distance from origin."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_kth_largest_array"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_kth_largest_array",
    "mode": "challenge",
    "title": "Kth Largest Element in an Array",
    "phase": "DSA",
    "topic": "Heap",
    "story": "Solve: Kth Largest Element in an Array.",
    "starterCode": "def find_kth_largest(nums, k):\n    pass\n\nprint(find_kth_largest([3,2,1,5,6,4], 2))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "5\n"
      }
    ],
    "hints": [
      "heapq.nlargest(k, nums) gives the k largest values, sorted descending."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_task_scheduler"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_task_scheduler",
    "mode": "challenge",
    "title": "Task Scheduler",
    "phase": "DSA",
    "topic": "Heap",
    "story": "Solve: Task Scheduler.",
    "starterCode": "def least_interval(tasks, n):\n    pass\n\nprint(least_interval([\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], 2))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "8\n"
      }
    ],
    "hints": [
      "Always run the most frequent remaining task; a cooldown queue holds ones waiting to return."
    ],
    "xpReward": 85,
    "coinReward": 30,
    "unlocks": [
      "dsa_design_twitter"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_design_twitter",
    "mode": "challenge",
    "title": "Design Twitter",
    "phase": "DSA",
    "topic": "Heap",
    "story": "Solve: Design Twitter.",
    "starterCode": "class Twitter:\n    def __init__(self):\n        self.time = 0\n        self.tweets = {}\n        self.following = {}\n    def post_tweet(self, user_id, tweet_id):\n        pass\n    def get_news_feed(self, user_id):\n        pass\n    def follow(self, follower_id, followee_id):\n        pass\n    def unfollow(self, follower_id, followee_id):\n        pass\n\ntw = Twitter()\ntw.post_tweet(1, 5)\nprint(tw.get_news_feed(1))\ntw.follow(1, 2)\ntw.post_tweet(2, 6)\nprint(tw.get_news_feed(1))\ntw.unfollow(1, 2)\nprint(tw.get_news_feed(1))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[5]\n[6, 5]\n[5]\n"
      }
    ],
    "hints": [
      "Store a decreasing timestamp per tweet so the newest sorts first."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_find_median_stream"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_find_median_stream",
    "mode": "challenge",
    "title": "Find Median from Data Stream",
    "phase": "DSA",
    "topic": "Heap",
    "story": "Solve: Find Median from Data Stream.",
    "starterCode": "import heapq\nclass MedianFinder:\n    def __init__(self):\n        self.small = []\n        self.large = []\n    def add_num(self, num):\n        pass\n    def find_median(self):\n        pass\n\nmf = MedianFinder()\nmf.add_num(1)\nmf.add_num(2)\nprint(mf.find_median())\nmf.add_num(3)\nprint(mf.find_median())",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1.5\n2.0\n"
      }
    ],
    "hints": [
      "Two heaps: a max-heap for the smaller half, a min-heap for the larger half."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_subsets"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_backtracking_teach",
    "mode": "teach",
    "title": "Backtracking: Try, Undo, Try Again",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Backtracking explores every possible choice, undoing (\"backtracking\") whenever a path doesn't work out.",
    "explanation": [
      "Pattern: make a choice -> recurse deeper -> undo the choice -> try the next choice.",
      "Used whenever you need ALL possible combinations, permutations, or valid arrangements.",
      "The 'undo' step (path.pop()) is what makes it backtracking instead of just plain recursion."
    ],
    "diagram": "<svg viewBox=\"0 0 360 225\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"130\" y=\"10\" width=\"60\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"160.0\" y=\"30.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[]</text><line x1=\"150\" y1=\"42\" x2=\"90\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"105\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">skip 1</text><line x1=\"180\" y1=\"42\" x2=\"240\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"220\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">take 1</text><rect x=\"60\" y=\"78\" width=\"60\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"90.0\" y=\"97.85\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[]</text><rect x=\"210\" y=\"78\" width=\"60\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"240.0\" y=\"97.85\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[1]</text><line x1=\"90\" y1=\"110\" x2=\"60\" y2=\"140\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"240\" y1=\"110\" x2=\"270\" y2=\"140\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"20\" y=\"143\" width=\"70\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"55.0\" y=\"162.5\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[]</text><rect x=\"250\" y=\"143\" width=\"70\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"285.0\" y=\"162.5\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[1,2]</text><text x=\"160\" y=\"195\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">each choice: include the number, or skip it -</text><text x=\"160\" y=\"210\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">then undo and try the other</text></svg>",
    "starterCode": "def subsets(nums):\n    res = []\n    def backtrack(start, path):\n        res.append(path[:])\n        for i in range(start, len(nums)):\n            path.append(nums[i])   # choose\n            backtrack(i + 1, path)  # explore\n            path.pop()               # un-choose (backtrack!)\n    backtrack(0, [])\n    return res\nprint(subsets([1,2]))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_subsets"
    ]
  },
  {
    "id": "dsa_subsets",
    "mode": "challenge",
    "title": "Subsets",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Solve: Subsets.",
    "starterCode": "def subsets(nums):\n    pass\n\nprint(subsets([1,2,3]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]\n"
      }
    ],
    "hints": [
      "At each step, decide to include or skip the current number."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_combination_sum"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_combination_sum",
    "mode": "challenge",
    "title": "Combination Sum",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Solve: Combination Sum.",
    "starterCode": "def combination_sum(candidates, target):\n    pass\n\nprint(combination_sum([2,3,6,7], 7))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[2, 2, 3], [7]]\n"
      }
    ],
    "hints": [
      "Numbers can repeat, so recurse with the same start index (not i+1)."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_permutations"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_permutations",
    "mode": "challenge",
    "title": "Permutations",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Solve: Permutations.",
    "starterCode": "def permute(nums):\n    pass\n\nprint(permute([1,2,3]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]\n"
      }
    ],
    "hints": [
      "At each level, try each remaining unused number."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_subsets_ii"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_subsets_ii",
    "mode": "challenge",
    "title": "Subsets II",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Solve: Subsets II.",
    "starterCode": "def subsets_with_dup(nums):\n    pass\n\nprint(subsets_with_dup([1,2,2]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]\n"
      }
    ],
    "hints": [
      "Sort first, then skip duplicate values at the same recursion depth."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_combination_sum_ii"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_combination_sum_ii",
    "mode": "challenge",
    "title": "Combination Sum II",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Solve: Combination Sum II.",
    "starterCode": "def combination_sum2(candidates, target):\n    pass\n\nprint(combination_sum2([10,1,2,7,6,1,5], 8))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]\n"
      }
    ],
    "hints": [
      "Sort, skip same-value siblings, and each candidate can only be used once (i+1)."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_word_search"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_word_search",
    "mode": "challenge",
    "title": "Word Search",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Solve: Word Search.",
    "starterCode": "def exist(board, word):\n    pass\n\nboard = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nprint(exist(board, \"ABCCED\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "DFS from every cell, marking visited cells temporarily."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_palindrome_partition"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_palindrome_partition",
    "mode": "challenge",
    "title": "Palindrome Partitioning",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Solve: Palindrome Partitioning.",
    "starterCode": "def partition(s):\n    pass\n\nprint(partition(\"aab\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[['a', 'a', 'b'], ['aa', 'b']]\n"
      }
    ],
    "hints": [
      "Try every prefix that is a palindrome, recurse on the rest."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_letter_combinations"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_letter_combinations",
    "mode": "challenge",
    "title": "Letter Combinations of a Phone Number",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Solve: Letter Combinations of a Phone Number.",
    "starterCode": "def letter_combinations(digits):\n    pass\n\nprint(letter_combinations(\"23\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']\n"
      }
    ],
    "hints": [
      "Standard phone keypad mapping, one digit at a time."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_n_queens"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_n_queens",
    "mode": "challenge",
    "title": "N-Queens",
    "phase": "DSA",
    "topic": "Backtracking",
    "story": "Solve: N-Queens.",
    "starterCode": "def solve_n_queens(n):\n    pass\n\nprint(solve_n_queens(4))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2\n"
      }
    ],
    "hints": [
      "Track used columns and both diagonals (r-c and r+c) as sets."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_num_islands"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_graphs_teach",
    "mode": "teach",
    "title": "Graphs: Nodes and Connections",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "A graph is a set of nodes connected by edges — think a map of cities connected by roads.",
    "explanation": [
      "DFS (Depth-First Search) dives as deep as possible down one path before backtracking — great with recursion or a stack.",
      "BFS (Breadth-First Search) explores level by level using a queue — finds the SHORTEST path in an unweighted graph.",
      "Always track 'visited' nodes, or you'll loop forever in a graph with cycles."
    ],
    "diagram": "<svg viewBox=\"0 0 420 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:420px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"90\" y=\"12\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">grid (1=land, 0=water)</text><rect x=\"30\" y=\"20\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#1e3a2b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"48.0\" y=\"42.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"70\" y=\"20\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#1e3a2b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"88.0\" y=\"42.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"110\" y=\"20\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"128.0\" y=\"42.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"30\" y=\"60\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#1e3a2b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"48.0\" y=\"82.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"70\" y=\"60\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"88.0\" y=\"82.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"110\" y=\"60\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"128.0\" y=\"82.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"30\" y=\"100\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"48.0\" y=\"122.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"70\" y=\"100\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"88.0\" y=\"122.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"110\" y=\"100\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#1e3a2b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"128.0\" y=\"122.55\" text-anchor=\"middle\" font-size=\"13\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><text x=\"230\" y=\"40\" text-anchor=\"start\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">DFS from a \"1\" visits every</text><text x=\"230\" y=\"58\" text-anchor=\"start\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">connected \"1\" -&gt; one island</text><text x=\"230\" y=\"90\" text-anchor=\"start\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">this grid has 2 islands:</text><text x=\"230\" y=\"108\" text-anchor=\"start\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">top-left blob +</text><text x=\"230\" y=\"124\" text-anchor=\"start\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">bottom-right cell</text></svg>",
    "starterCode": "def count_islands(grid):\n    rows, cols = len(grid), len(grid[0])\n    visited = set()\n    def dfs(r, c):\n        if r<0 or c<0 or r>=rows or c>=cols or grid[r][c]==0 or (r,c) in visited:\n            return\n        visited.add((r, c))\n        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n            dfs(r+dr, c+dc)\n    count = 0\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c]==1 and (r,c) not in visited:\n                dfs(r, c)\n                count += 1\n    return count\nprint(count_islands([[1,1,0],[1,0,0],[0,0,1]]))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_num_islands"
    ]
  },
  {
    "id": "dsa_num_islands",
    "mode": "challenge",
    "title": "Number of Islands",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Number of Islands.",
    "starterCode": "def num_islands(grid):\n    pass\n\ngrid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]\nprint(num_islands(grid))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "DFS/BFS flood-fill from every unvisited land cell."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_clone_graph"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_clone_graph",
    "mode": "challenge",
    "title": "Clone Graph",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Clone Graph.",
    "starterCode": "class Node:\n    def __init__(self, val=0, neighbors=None):\n        self.val = val\n        self.neighbors = neighbors if neighbors else []\n\ndef clone_graph(node):\n    pass\n\nn1 = Node(1); n2 = Node(2); n3 = Node(3)\nn1.neighbors = [n2, n3]; n2.neighbors = [n1, n3]; n3.neighbors = [n1, n2]\ncloned = clone_graph(n1)\nprint([cloned.val, len(cloned.neighbors)])",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[1, 2]\n"
      }
    ],
    "hints": [
      "DFS with a hash map from original node to its clone."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_max_area_island"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_max_area_island",
    "mode": "challenge",
    "title": "Max Area of Island",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Max Area of Island.",
    "starterCode": "def max_area_of_island(grid):\n    pass\n\ngrid = [[0,0,1,0],[0,1,1,0],[0,0,0,1]]\nprint(max_area_of_island(grid))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "DFS returns the area of the island it explores from (r, c)."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_pacific_atlantic"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_pacific_atlantic",
    "mode": "challenge",
    "title": "Pacific Atlantic Water Flow",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Pacific Atlantic Water Flow.",
    "starterCode": "def pacific_atlantic(heights):\n    pass\n\nheights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\nprint(pacific_atlantic(heights))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]\n"
      }
    ],
    "hints": [
      "DFS inward from both oceans' border cells; answer is the intersection."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_surrounded_regions"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_surrounded_regions",
    "mode": "challenge",
    "title": "Surrounded Regions",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Surrounded Regions.",
    "starterCode": "def solve(board):\n    pass\n\nboard = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]\nprint(solve(board))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'O', 'X', 'X']]\n"
      }
    ],
    "hints": [
      "Mark border-connected \"O\"s safe first, then flip the rest."
    ],
    "xpReward": 80,
    "coinReward": 25,
    "unlocks": [
      "dsa_rotting_oranges"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_rotting_oranges",
    "mode": "challenge",
    "title": "Rotting Oranges",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Rotting Oranges.",
    "starterCode": "def oranges_rotting(grid):\n    pass\n\ngrid = [[2,1,1],[1,1,0],[0,1,1]]\nprint(oranges_rotting(grid))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "Multi-source BFS starting from every rotten orange at once."
    ],
    "xpReward": 80,
    "coinReward": 30,
    "unlocks": [
      "dsa_walls_and_gates"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_walls_and_gates",
    "mode": "challenge",
    "title": "Walls and Gates",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Walls and Gates.",
    "starterCode": "def walls_and_gates(rooms):\n    pass\n\nINF = 2147483647\nrooms = [[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]]\nprint(walls_and_gates(rooms))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4]]\n"
      }
    ],
    "hints": [
      "Multi-source BFS from every gate (value 0) simultaneously."
    ],
    "xpReward": 80,
    "coinReward": 30,
    "unlocks": [
      "dsa_course_schedule"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_course_schedule",
    "mode": "challenge",
    "title": "Course Schedule",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Course Schedule.",
    "starterCode": "def can_finish(num_courses, prerequisites):\n    pass\n\nprint(can_finish(2, [[1,0]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "DFS cycle detection: 0=unvisited, 1=visiting, 2=done."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_course_schedule_ii"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_course_schedule_ii",
    "mode": "challenge",
    "title": "Course Schedule II",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Course Schedule II.",
    "starterCode": "def find_order(num_courses, prerequisites):\n    pass\n\nprint(find_order(4, [[1,0],[2,0],[3,1],[3,2]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[0, 1, 2, 3]\n"
      }
    ],
    "hints": [
      "Same cycle-detection DFS as Course Schedule, append to order after finishing a node."
    ],
    "xpReward": 85,
    "coinReward": 30,
    "unlocks": [
      "dsa_redundant_connection"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_redundant_connection",
    "mode": "challenge",
    "title": "Redundant Connection",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Redundant Connection.",
    "starterCode": "def find_redundant_connection(edges):\n    pass\n\nprint(find_redundant_connection([[1,2],[1,3],[2,3]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[2, 3]\n"
      }
    ],
    "hints": [
      "Union-Find: the edge that connects two already-connected nodes is the answer."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_num_connected_components"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_num_connected_components",
    "mode": "challenge",
    "title": "Number of Connected Components in an Undirected Graph",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Number of Connected Components in an Undirected Graph.",
    "starterCode": "def count_components(n, edges):\n    pass\n\nprint(count_components(5, [[0,1],[1,2],[3,4]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2\n"
      }
    ],
    "hints": [
      "Union-Find: each successful union merges two components into one."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_graph_valid_tree"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_graph_valid_tree",
    "mode": "challenge",
    "title": "Graph Valid Tree",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Graph Valid Tree.",
    "starterCode": "def valid_tree(n, edges):\n    pass\n\nprint(valid_tree(5, [[0,1],[0,2],[0,3],[1,4]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "A valid tree has exactly n-1 edges and no cycles."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_word_ladder"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_word_ladder",
    "mode": "challenge",
    "title": "Word Ladder",
    "phase": "DSA",
    "topic": "Graphs",
    "story": "Solve: Word Ladder.",
    "starterCode": "def ladder_length(begin_word, end_word, word_list):\n    pass\n\nprint(ladder_length(\"hit\", \"cog\", [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "5\n"
      }
    ],
    "hints": [
      "BFS where each move changes exactly one letter."
    ],
    "xpReward": 95,
    "coinReward": 35,
    "unlocks": [
      "dsa_reconstruct_itinerary"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_advanced_graphs_teach",
    "mode": "teach",
    "title": "Weighted Graphs & Shortest Paths",
    "phase": "DSA",
    "topic": "Advanced Graphs",
    "story": "When edges have a 'cost' (weight), finding the shortest path needs smarter tools than plain BFS.",
    "explanation": [
      "Dijkstra's algorithm uses a min-heap to always expand the currently-cheapest-known path first.",
      "It's basically BFS, but instead of a plain queue, a priority queue orders exploration by total cost so far.",
      "Prim's/Kruskal's build a Minimum Spanning Tree — the cheapest way to connect every node together."
    ],
    "diagram": "<svg viewBox=\"0 0 360 165\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><circle cx=\"50\" cy=\"80\" r=\"22\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"50\" y=\"84.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">A</text><circle cx=\"180\" cy=\"30\" r=\"22\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"180\" y=\"34.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">B</text><circle cx=\"310\" cy=\"80\" r=\"22\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"310\" y=\"84.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">C</text><line x1=\"70\" y1=\"65\" x2=\"160\" y2=\"40\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"110\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><line x1=\"200\" y1=\"40\" x2=\"290\" y2=\"68\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"250\" y=\"42\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><path d=\"M65,95 Q180,150 290,95\" stroke=\"#f87171\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#arrow)\" stroke-dasharray=\"5,4\"/><text x=\"180\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" fill=\"#f87171\" font-family=\"Courier New, monospace\" font-weight=\"normal\">direct A-&gt;C costs 5 (dashed)</text><text x=\"180\" y=\"12\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">A-&gt;B-&gt;C costs 1+1=2 (cheaper!)</text></svg>",
    "starterCode": "import heapq\ndef dijkstra(graph, start, n):\n    dist = {start: 0}\n    heap = [(0, start)]\n    while heap:\n        d, node = heapq.heappop(heap)\n        if d > dist.get(node, float(\"inf\")):\n            continue\n        for nxt, w in graph.get(node, []):\n            nd = d + w\n            if nd < dist.get(nxt, float(\"inf\")):\n                dist[nxt] = nd\n                heapq.heappush(heap, (nd, nxt))\n    return dist\ngraph = {0: [(1, 1), (2, 5)], 1: [(2, 1)]}\nprint(dijkstra(graph, 0, 3))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_reconstruct_itinerary"
    ]
  },
  {
    "id": "dsa_reconstruct_itinerary",
    "mode": "challenge",
    "title": "Reconstruct Itinerary",
    "phase": "DSA",
    "topic": "Advanced Graphs",
    "story": "Solve: Reconstruct Itinerary.",
    "starterCode": "def find_itinerary(tickets):\n    pass\n\nprint(find_itinerary([[\"MUC\",\"LHR\"],[\"JFK\",\"MUC\"],[\"SFO\",\"SJC\"],[\"LHR\",\"SFO\"]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "['JFK', 'MUC', 'LHR', 'SFO', 'SJC']\n"
      }
    ],
    "hints": [
      "Hierholzer's algorithm: sort destinations reverse-alphabetically, pop the smallest last (DFS + postorder reverse)."
    ],
    "xpReward": 95,
    "coinReward": 35,
    "unlocks": [
      "dsa_min_cost_connect_points"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_min_cost_connect_points",
    "mode": "challenge",
    "title": "Min Cost to Connect All Points",
    "phase": "DSA",
    "topic": "Advanced Graphs",
    "story": "Solve: Min Cost to Connect All Points.",
    "starterCode": "def min_cost_connect_points(points):\n    pass\n\nprint(min_cost_connect_points([[0,0],[2,2],[3,10],[5,2],[7,0]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "20\n"
      }
    ],
    "hints": [
      "Prim's algorithm: greedily grow a minimum spanning tree with a min-heap."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_network_delay_time"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_network_delay_time",
    "mode": "challenge",
    "title": "Network Delay Time",
    "phase": "DSA",
    "topic": "Advanced Graphs",
    "story": "Solve: Network Delay Time.",
    "starterCode": "def network_delay_time(times, n, k):\n    pass\n\nprint(network_delay_time([[2,1,1],[2,3,1],[3,4,1]], 4, 2))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2\n"
      }
    ],
    "hints": [
      "Dijkstra's algorithm from the source node k."
    ],
    "xpReward": 85,
    "coinReward": 30,
    "unlocks": [
      "dsa_swim_rising_water"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_swim_rising_water",
    "mode": "challenge",
    "title": "Swim in Rising Water",
    "phase": "DSA",
    "topic": "Advanced Graphs",
    "story": "Solve: Swim in Rising Water.",
    "starterCode": "def swim_in_water(grid):\n    pass\n\nprint(swim_in_water([[0,2],[1,3]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Dijkstra-style: always expand the path with the smallest 'max height so far'."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_alien_dictionary"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_alien_dictionary",
    "mode": "challenge",
    "title": "Alien Dictionary",
    "phase": "DSA",
    "topic": "Advanced Graphs",
    "story": "Solve: Alien Dictionary.",
    "starterCode": "def alien_order(words):\n    pass\n\nprint(alien_order([\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "wertf\n"
      }
    ],
    "hints": [
      "Build a \"comes before\" graph from adjacent word pairs, then topological sort."
    ],
    "xpReward": 100,
    "coinReward": 35,
    "unlocks": [
      "dsa_cheapest_flights"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_cheapest_flights",
    "mode": "challenge",
    "title": "Cheapest Flights Within K Stops",
    "phase": "DSA",
    "topic": "Advanced Graphs",
    "story": "Solve: Cheapest Flights Within K Stops.",
    "starterCode": "def find_cheapest_price(n, flights, src, dst, k):\n    pass\n\nprint(find_cheapest_price(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "700\n"
      }
    ],
    "hints": [
      "Bellman-Ford limited to k+1 relaxation rounds (Bellman-Ford naturally bounds stops)."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_climbing_stairs"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_1d_dp_teach",
    "mode": "teach",
    "title": "Dynamic Programming: Remember Your Answers",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Dynamic Programming (DP) solves a big problem by combining answers to smaller subproblems — and NEVER recomputes the same subproblem twice.",
    "explanation": [
      "If a recursive solution recalculates the same smaller problem many times, that's a sign DP can help.",
      "Bottom-up DP builds a table (dp[]) starting from the smallest subproblem up to the full answer.",
      "Climbing Stairs is the simplest example: dp[i] = dp[i-1] + dp[i-2], exactly like Fibonacci."
    ],
    "diagram": "<svg viewBox=\"0 0 400 118\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">Climbing Stairs: dp[i] = dp[i-1] + dp[i-2]</text><rect x=\"40\" y=\"30\" width=\"50\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"65.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><text x=\"65.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">0</text><rect x=\"98\" y=\"30\" width=\"50\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"123.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><text x=\"123.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><rect x=\"156\" y=\"30\" width=\"50\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"181.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><text x=\"181.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">2</text><rect x=\"214\" y=\"30\" width=\"50\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"239.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><text x=\"239.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">3</text><rect x=\"272\" y=\"30\" width=\"50\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"297.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">5</text><text x=\"297.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">4</text><rect x=\"330\" y=\"30\" width=\"50\" height=\"40\" rx=\"6\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"355.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">8</text><text x=\"355.0\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">5</text><text x=\"190\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">dp[5] = dp[4] + dp[3] = 5 + 3 = 8</text></svg>",
    "starterCode": "def climb_stairs(n):\n    a, b = 1, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\nprint(climb_stairs(5))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_climbing_stairs"
    ]
  },
  {
    "id": "dsa_climbing_stairs",
    "mode": "challenge",
    "title": "Climbing Stairs",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Climbing Stairs.",
    "starterCode": "def climb_stairs(n):\n    pass\n\nprint(climb_stairs(5))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "8\n"
      }
    ],
    "hints": [
      "Same recurrence as Fibonacci: dp[i] = dp[i-1] + dp[i-2]."
    ],
    "xpReward": 50,
    "coinReward": 20,
    "unlocks": [
      "dsa_min_cost_climbing_stairs"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_min_cost_climbing_stairs",
    "mode": "challenge",
    "title": "Min Cost Climbing Stairs",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Min Cost Climbing Stairs.",
    "starterCode": "def min_cost_climbing_stairs(cost):\n    pass\n\nprint(min_cost_climbing_stairs([10,15,20]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "15\n"
      }
    ],
    "hints": [
      "You can start at step 0 or 1 for free; dp[i] is min cost to reach step i."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_house_robber"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_house_robber",
    "mode": "challenge",
    "title": "House Robber",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: House Robber.",
    "starterCode": "def rob(nums):\n    pass\n\nprint(rob([1,2,3,1]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "dp[i] = max(dp[i-1], dp[i-2] + nums[i])."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_house_robber_ii"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_house_robber_ii",
    "mode": "challenge",
    "title": "House Robber II",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: House Robber II.",
    "starterCode": "def rob_ii(nums):\n    pass\n\nprint(rob_ii([2,3,2]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Houses are in a circle: solve House Robber twice, excluding first or last house."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_longest_palindromic_substring"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_longest_palindromic_substring",
    "mode": "challenge",
    "title": "Longest Palindromic Substring",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Longest Palindromic Substring.",
    "starterCode": "def longest_palindrome(s):\n    pass\n\nprint(longest_palindrome(\"babad\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "bab\n"
      }
    ],
    "hints": [
      "Expand around every center (odd and even length)."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_palindromic_substrings"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_palindromic_substrings",
    "mode": "challenge",
    "title": "Palindromic Substrings",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Palindromic Substrings.",
    "starterCode": "def count_substrings(s):\n    pass\n\nprint(count_substrings(\"abc\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Expand around center, counting every valid palindrome found."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_decode_ways"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_decode_ways",
    "mode": "challenge",
    "title": "Decode Ways",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Decode Ways.",
    "starterCode": "def num_decodings(s):\n    pass\n\nprint(num_decodings(\"226\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "dp[i] counts ways using the last 1 digit and/or the last 2 digits (if 10-26)."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_coin_change"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_coin_change",
    "mode": "challenge",
    "title": "Coin Change",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Coin Change.",
    "starterCode": "def coin_change(coins, amount):\n    pass\n\nprint(coin_change([1,2,5], 11))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "dp[amount] = min(dp[amount - coin] + 1) over all coins."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_max_product_subarray"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_max_product_subarray",
    "mode": "challenge",
    "title": "Maximum Product Subarray",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Maximum Product Subarray.",
    "starterCode": "def max_product(nums):\n    pass\n\nprint(max_product([2,3,-2,4]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "6\n"
      }
    ],
    "hints": [
      "Track both running max and running min (a negative number can flip them)."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_word_break"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_word_break",
    "mode": "challenge",
    "title": "Word Break",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Word Break.",
    "starterCode": "def word_break(s, word_dict):\n    pass\n\nprint(word_break(\"leetcode\", [\"leet\",\"code\"]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "dp[i] is True if some split point j has dp[j] True and s[j:i] is a valid word."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_longest_increasing_subseq"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_longest_increasing_subseq",
    "mode": "challenge",
    "title": "Longest Increasing Subsequence",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Longest Increasing Subsequence.",
    "starterCode": "def length_of_lis(nums):\n    pass\n\nprint(length_of_lis([10,9,2,5,3,7,101,18]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "dp[i] = max(dp[j] + 1) for all j < i where nums[j] < nums[i]."
    ],
    "xpReward": 80,
    "coinReward": 25,
    "unlocks": [
      "dsa_partition_equal_subset"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_partition_equal_subset",
    "mode": "challenge",
    "title": "Partition Equal Subset Sum",
    "phase": "DSA",
    "topic": "1-D DP",
    "story": "Solve: Partition Equal Subset Sum.",
    "starterCode": "def can_partition(nums):\n    pass\n\nprint(can_partition([1,5,11,5]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "This is a subset-sum problem: can some subset reach total/2?"
    ],
    "xpReward": 80,
    "coinReward": 25,
    "unlocks": [
      "dsa_unique_paths"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_2d_dp_teach",
    "mode": "teach",
    "title": "Dynamic Programming on a Grid",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Some DP problems need TWO changing variables at once (like two strings, or a grid position), so the DP table becomes a 2D grid.",
    "explanation": [
      "dp[i][j] usually means 'the best answer using the first i items of one thing and the first j of another'.",
      "Fill the table row by row (or diagonal by diagonal), using already-computed neighboring cells.",
      "Longest Common Subsequence is the classic example: compare characters of two strings cell by cell."
    ],
    "diagram": "<svg viewBox=\"0 0 400 225\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"20\" y=\"10\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#16233a\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"40.0\" y=\"29.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><rect x=\"64\" y=\"10\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#16233a\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"84.0\" y=\"29.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"\"</text><rect x=\"108\" y=\"10\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#16233a\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"128.0\" y=\"29.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">a</text><rect x=\"152\" y=\"10\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#16233a\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"172.0\" y=\"29.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">c</text><rect x=\"196\" y=\"10\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#16233a\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"216.0\" y=\"29.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">e</text><rect x=\"20\" y=\"44\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#16233a\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"40.0\" y=\"63.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">\"\"</text><rect x=\"64\" y=\"44\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"84.0\" y=\"63.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"108\" y=\"44\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"128.0\" y=\"63.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"152\" y=\"44\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"172.0\" y=\"63.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"196\" y=\"44\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"216.0\" y=\"63.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"20\" y=\"78\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#16233a\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"40.0\" y=\"97.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">a</text><rect x=\"64\" y=\"78\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"84.0\" y=\"97.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"108\" y=\"78\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"128.0\" y=\"97.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"152\" y=\"78\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"172.0\" y=\"97.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"196\" y=\"78\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"216.0\" y=\"97.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"20\" y=\"112\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#16233a\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"40.0\" y=\"131.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">c</text><rect x=\"64\" y=\"112\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"84.0\" y=\"131.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"108\" y=\"112\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"128.0\" y=\"131.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"152\" y=\"112\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"172.0\" y=\"131.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"196\" y=\"112\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"216.0\" y=\"131.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"20\" y=\"146\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#16233a\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"40.0\" y=\"165.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">e</text><rect x=\"64\" y=\"146\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"84.0\" y=\"165.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">0</text><rect x=\"108\" y=\"146\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"128.0\" y=\"165.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"152\" y=\"146\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"172.0\" y=\"165.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"196\" y=\"146\" width=\"40\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"216.0\" y=\"165.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><text x=\"200\" y=\"205\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">LCS(\"abcde\",\"ace\") = dp[bottom-right] = 3</text></svg>",
    "starterCode": "def lcs(a, b):\n    m, n = len(a), len(b)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if a[i-1] == b[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]\nprint(lcs(\"abcde\", \"ace\"))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_unique_paths"
    ]
  },
  {
    "id": "dsa_unique_paths",
    "mode": "challenge",
    "title": "Unique Paths",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Unique Paths.",
    "starterCode": "def unique_paths(m, n):\n    pass\n\nprint(unique_paths(3, 7))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "28\n"
      }
    ],
    "hints": [
      "Each cell = paths from above + paths from the left."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_longest_common_subseq"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_longest_common_subseq",
    "mode": "challenge",
    "title": "Longest Common Subsequence",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Longest Common Subsequence.",
    "starterCode": "def longest_common_subsequence(text1, text2):\n    pass\n\nprint(longest_common_subsequence(\"abcde\", \"ace\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Classic 2D DP table comparing characters of both strings."
    ],
    "xpReward": 80,
    "coinReward": 25,
    "unlocks": [
      "dsa_stock_cooldown"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_stock_cooldown",
    "mode": "challenge",
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Best Time to Buy and Sell Stock with Cooldown.",
    "starterCode": "def max_profit_cooldown(prices):\n    pass\n\nprint(max_profit_cooldown([1,2,3,0,2]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Track three states each day: holding, sold today, resting/cooldown."
    ],
    "xpReward": 85,
    "coinReward": 30,
    "unlocks": [
      "dsa_coin_change_ii"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_coin_change_ii",
    "mode": "challenge",
    "title": "Coin Change II",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Coin Change II.",
    "starterCode": "def change(amount, coins):\n    pass\n\nprint(change(5, [1,2,5]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "Iterate coins in the outer loop so combinations (not permutations) are counted."
    ],
    "xpReward": 80,
    "coinReward": 25,
    "unlocks": [
      "dsa_target_sum"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_target_sum",
    "mode": "challenge",
    "title": "Target Sum",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Target Sum.",
    "starterCode": "def find_target_sum_ways(nums, target):\n    pass\n\nprint(find_target_sum_ways([1,1,1,1,1], 3))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "5\n"
      }
    ],
    "hints": [
      "Track a running dict of {achievable_sum: number_of_ways}."
    ],
    "xpReward": 85,
    "coinReward": 30,
    "unlocks": [
      "dsa_interleaving_string"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_interleaving_string",
    "mode": "challenge",
    "title": "Interleaving String",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Interleaving String.",
    "starterCode": "def is_interleave(s1, s2, s3):\n    pass\n\nprint(is_interleave(\"aabcc\", \"dbbca\", \"aadbbcbcac\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "dp[i][j] = can s3[:i+j] be formed from s1[:i] and s2[:j]?"
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_longest_inc_path_matrix"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_longest_inc_path_matrix",
    "mode": "challenge",
    "title": "Longest Increasing Path in a Matrix",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Longest Increasing Path in a Matrix.",
    "starterCode": "def longest_increasing_path(matrix):\n    pass\n\nprint(longest_increasing_path([[9,9,4],[6,6,8],[2,1,1]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "DFS + memoization: cache the longest path starting from each cell."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_distinct_subsequences"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_distinct_subsequences",
    "mode": "challenge",
    "title": "Distinct Subsequences",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Distinct Subsequences.",
    "starterCode": "def num_distinct(s, t):\n    pass\n\nprint(num_distinct(\"rabbbit\", \"rabbit\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "dp[i][j] = ways to form t[:j] using s[:i], matching or skipping s[i-1]."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_edit_distance"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_edit_distance",
    "mode": "challenge",
    "title": "Edit Distance",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Edit Distance.",
    "starterCode": "def min_distance(word1, word2):\n    pass\n\nprint(min_distance(\"horse\", \"ros\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "dp[i][j] = min(delete, insert, replace) using the previous subproblems."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_burst_balloons"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_burst_balloons",
    "mode": "challenge",
    "title": "Burst Balloons",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Burst Balloons.",
    "starterCode": "def max_coins(nums):\n    pass\n\nprint(max_coins([3,1,5,8]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "167\n"
      }
    ],
    "hints": [
      "Think in reverse: for each interval, k is the LAST balloon burst in it."
    ],
    "xpReward": 100,
    "coinReward": 35,
    "unlocks": [
      "dsa_regex_matching"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_regex_matching",
    "mode": "challenge",
    "title": "Regular Expression Matching",
    "phase": "DSA",
    "topic": "2-D DP",
    "story": "Solve: Regular Expression Matching.",
    "starterCode": "def is_match(s, p):\n    pass\n\nprint(is_match(\"aa\", \"a*\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "\"*\" means zero or more of the preceding character; handle it as a special case in the DP transition."
    ],
    "xpReward": 100,
    "coinReward": 35,
    "unlocks": [
      "dsa_maximum_subarray"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_greedy_teach",
    "mode": "teach",
    "title": "Greedy Algorithms",
    "phase": "DSA",
    "topic": "Greedy",
    "story": "A greedy algorithm makes the locally-best choice at every step, hoping (and sometimes proving) it leads to the global best answer.",
    "explanation": [
      "No backtracking, no trying every option — just the best-looking move right now.",
      "Works when a problem has 'optimal substructure' — the best overall answer is built from best local choices.",
      "Kadane's algorithm for max subarray: at each step, either extend the current run or start fresh, whichever is bigger."
    ],
    "diagram": "<svg viewBox=\"0 0 340 155\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"160\" y=\"12\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">Kadane's algorithm: running sum, reset when it drops below 0</text><line x1=\"15\" y1=\"100\" x2=\"320\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"2\"/><rect x=\"20\" y=\"100\" width=\"26\" height=\"20\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"33.0\" y=\"114.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"33\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">-2</text><rect x=\"54\" y=\"90\" width=\"26\" height=\"10\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"67.0\" y=\"99.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"67\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><rect x=\"88\" y=\"100\" width=\"26\" height=\"20\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"101.0\" y=\"114.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"101\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">-2</text><rect x=\"122\" y=\"60\" width=\"26\" height=\"40\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"135.0\" y=\"84.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"135\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">4</text><rect x=\"156\" y=\"70\" width=\"26\" height=\"30\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"169.0\" y=\"89.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"169\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">3</text><rect x=\"190\" y=\"50\" width=\"26\" height=\"50\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"203.0\" y=\"79.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"203\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">5</text><rect x=\"224\" y=\"40\" width=\"26\" height=\"60\" rx=\"2\" fill=\"#4ade80\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"237.0\" y=\"74.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"237\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">6</text><rect x=\"258\" y=\"90\" width=\"26\" height=\"10\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"271.0\" y=\"99.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"271\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1</text><rect x=\"292\" y=\"50\" width=\"26\" height=\"50\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"305.0\" y=\"79.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\"></text><text x=\"305\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">5</text><text x=\"160\" y=\"140\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">best subarray sum = 6  ([4,-1,2,1])</text></svg>",
    "starterCode": "def max_subarray(nums):\n    best = nums[0]\n    cur = 0\n    for n in nums:\n        cur = max(cur, 0) + n\n        best = max(best, cur)\n    return best\nprint(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_maximum_subarray"
    ]
  },
  {
    "id": "dsa_maximum_subarray",
    "mode": "challenge",
    "title": "Maximum Subarray",
    "phase": "DSA",
    "topic": "Greedy",
    "story": "Solve: Maximum Subarray.",
    "starterCode": "def max_subarray(nums):\n    pass\n\nprint(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "6\n"
      }
    ],
    "hints": [
      "Kadane's algorithm: drop a negative running sum instead of carrying it."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_jump_game"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_jump_game",
    "mode": "challenge",
    "title": "Jump Game",
    "phase": "DSA",
    "topic": "Greedy",
    "story": "Solve: Jump Game.",
    "starterCode": "def can_jump(nums):\n    pass\n\nprint(can_jump([2,3,1,1,4]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Track the farthest index reachable so far."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_jump_game_ii"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_jump_game_ii",
    "mode": "challenge",
    "title": "Jump Game II",
    "phase": "DSA",
    "topic": "Greedy",
    "story": "Solve: Jump Game II.",
    "starterCode": "def jump(nums):\n    pass\n\nprint(jump([2,3,1,1,4]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2\n"
      }
    ],
    "hints": [
      "BFS-like greedy: jump when you reach the end of the current reachable window."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_gas_station"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_gas_station",
    "mode": "challenge",
    "title": "Gas Station",
    "phase": "DSA",
    "topic": "Greedy",
    "story": "Solve: Gas Station.",
    "starterCode": "def can_complete_circuit(gas, cost):\n    pass\n\nprint(can_complete_circuit([1,2,3,4,5], [3,4,5,1,2]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "If total gas >= total cost a solution exists; reset the start whenever the running tank goes negative."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_hand_of_straights"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_hand_of_straights",
    "mode": "challenge",
    "title": "Hand of Straights",
    "phase": "DSA",
    "topic": "Greedy",
    "story": "Solve: Hand of Straights.",
    "starterCode": "def is_n_straight_hand(hand, group_size):\n    pass\n\nprint(is_n_straight_hand([1,2,3,6,2,3,4,7,8], 3))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Always start a new group at the smallest remaining card."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_merge_triplets"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_merge_triplets",
    "mode": "challenge",
    "title": "Merge Triplets to Form Target Triplet",
    "phase": "DSA",
    "topic": "Greedy",
    "story": "Solve: Merge Triplets to Form Target Triplet.",
    "starterCode": "def merge_triplets(triplets, target):\n    pass\n\nprint(merge_triplets([[2,5,3],[1,8,4],[1,7,5]], [2,7,5]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Only usable triplets (no coordinate exceeds target) can ever contribute a maxed-out coordinate."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_partition_labels"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_partition_labels",
    "mode": "challenge",
    "title": "Partition Labels",
    "phase": "DSA",
    "topic": "Greedy",
    "story": "Solve: Partition Labels.",
    "starterCode": "def partition_labels(s):\n    pass\n\nprint(partition_labels(\"ababcbacadefegdehijhklij\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[9, 7, 8]\n"
      }
    ],
    "hints": [
      "A partition ends once the current index reaches the last occurrence seen so far."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_valid_paren_string"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_valid_paren_string",
    "mode": "challenge",
    "title": "Valid Parenthesis String",
    "phase": "DSA",
    "topic": "Greedy",
    "story": "Solve: Valid Parenthesis String.",
    "starterCode": "def check_valid_string(s):\n    pass\n\nprint(check_valid_string(\"(*))\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Track a range [lo, hi] of possible open-paren counts, treating '*' as wildcard."
    ],
    "xpReward": 80,
    "coinReward": 25,
    "unlocks": [
      "dsa_insert_interval"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_intervals_teach",
    "mode": "teach",
    "title": "Interval Problems",
    "phase": "DSA",
    "topic": "Intervals",
    "story": "Interval problems deal with ranges like [start, end] — meetings, bookings, or spans of time.",
    "explanation": [
      "The #1 trick: SORT the intervals first (usually by start time), which makes overlaps easy to spot.",
      "Two intervals overlap when one's start is before the other's end.",
      "Merging overlapping intervals is just one linear pass after sorting."
    ],
    "diagram": "<svg viewBox=\"0 0 380 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"180\" y=\"12\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">sort by start, merge when next.start &lt;= current.end</text><rect x=\"38\" y=\"30\" width=\"36\" height=\"26\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"56.0\" y=\"46.5\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[1,3]</text><rect x=\"56\" y=\"30\" width=\"72\" height=\"26\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"92.0\" y=\"46.5\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[2,6]</text><rect x=\"164\" y=\"70\" width=\"36\" height=\"26\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"182.0\" y=\"86.5\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[8,10]</text><text x=\"20\" y=\"115\" text-anchor=\"start\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">merged:</text><rect x=\"38\" y=\"120\" width=\"90\" height=\"26\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"83.0\" y=\"136.5\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[1,6]</text><rect x=\"164\" y=\"120\" width=\"36\" height=\"26\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"182.0\" y=\"136.5\" text-anchor=\"middle\" font-size=\"10\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">[8,10]</text></svg>",
    "starterCode": "def merge(intervals):\n    intervals = sorted(intervals)\n    res = [intervals[0]]\n    for start, end in intervals[1:]:\n        if start <= res[-1][1]:\n            res[-1][1] = max(res[-1][1], end)\n        else:\n            res.append([start, end])\n    return res\nprint(merge([[1,3],[2,6],[8,10],[15,18]]))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_insert_interval"
    ]
  },
  {
    "id": "dsa_insert_interval",
    "mode": "challenge",
    "title": "Insert Interval",
    "phase": "DSA",
    "topic": "Intervals",
    "story": "Solve: Insert Interval.",
    "starterCode": "def insert(intervals, new_interval):\n    pass\n\nprint(insert([[1,3],[6,9]], [2,5]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[1, 5], [6, 9]]\n"
      }
    ],
    "hints": [
      "Add non-overlapping intervals before, merge overlapping ones, then add the rest."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_merge_intervals"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_merge_intervals",
    "mode": "challenge",
    "title": "Merge Intervals",
    "phase": "DSA",
    "topic": "Intervals",
    "story": "Solve: Merge Intervals.",
    "starterCode": "def merge(intervals):\n    pass\n\nprint(merge([[1,3],[2,6],[8,10],[15,18]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[1, 6], [8, 10], [15, 18]]\n"
      }
    ],
    "hints": [
      "Sort by start time, merge whenever the next start is inside the current interval."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_non_overlapping_intervals"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_non_overlapping_intervals",
    "mode": "challenge",
    "title": "Non-overlapping Intervals",
    "phase": "DSA",
    "topic": "Intervals",
    "story": "Solve: Non-overlapping Intervals.",
    "starterCode": "def erase_overlap_intervals(intervals):\n    pass\n\nprint(erase_overlap_intervals([[1,2],[2,3],[3,4],[1,3]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1\n"
      }
    ],
    "hints": [
      "Sort by end time; greedily keep the interval that finishes earliest."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_meeting_rooms"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_meeting_rooms",
    "mode": "challenge",
    "title": "Meeting Rooms",
    "phase": "DSA",
    "topic": "Intervals",
    "story": "Solve: Meeting Rooms.",
    "starterCode": "def can_attend_meetings(intervals):\n    pass\n\nprint(can_attend_meetings([[0,30],[5,10],[15,20]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "False\n"
      }
    ],
    "hints": [
      "Sort by start time, check for any overlap between consecutive meetings."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_meeting_rooms_ii"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_meeting_rooms_ii",
    "mode": "challenge",
    "title": "Meeting Rooms II",
    "phase": "DSA",
    "topic": "Intervals",
    "story": "Solve: Meeting Rooms II.",
    "starterCode": "def min_meeting_rooms(intervals):\n    pass\n\nprint(min_meeting_rooms([[0,30],[5,10],[15,20]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2\n"
      }
    ],
    "hints": [
      "Min-heap of end times; reuse a room if its meeting has already ended."
    ],
    "xpReward": 75,
    "coinReward": 25,
    "unlocks": [
      "dsa_min_interval_queries"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_min_interval_queries",
    "mode": "challenge",
    "title": "Minimum Interval to Include Each Query",
    "phase": "DSA",
    "topic": "Intervals",
    "story": "Solve: Minimum Interval to Include Each Query.",
    "starterCode": "def min_interval(intervals, queries):\n    pass\n\nprint(min_interval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[3, 3, 1, 4]\n"
      }
    ],
    "hints": [
      "Sort queries, push eligible intervals into a min-heap keyed by size, pop expired ones."
    ],
    "xpReward": 90,
    "coinReward": 30,
    "unlocks": [
      "dsa_rotate_image"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_math_geometry_teach",
    "mode": "teach",
    "title": "Math & Geometry Tricks",
    "phase": "DSA",
    "topic": "Math & Geometry",
    "story": "Some problems are really about spotting a mathematical pattern or manipulating a grid/matrix directly.",
    "explanation": [
      "Matrix rotation: transpose (flip across the diagonal) then reverse each row — a neat two-step trick.",
      "Modular arithmetic (%) and integer math often replace what looks like it needs floating point.",
      "These problems reward drawing the grid out by hand before coding — visualize first, code second."
    ],
    "diagram": "<svg viewBox=\"0 0 480 140\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:480px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><rect x=\"10\" y=\"30\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"26.0\" y=\"50.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"46\" y=\"30\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"62.0\" y=\"50.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"82\" y=\"30\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"98.0\" y=\"50.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><rect x=\"10\" y=\"66\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"26.0\" y=\"86.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><rect x=\"46\" y=\"66\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"62.0\" y=\"86.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">5</text><rect x=\"82\" y=\"66\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"98.0\" y=\"86.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">6</text><rect x=\"10\" y=\"102\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"26.0\" y=\"122.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">7</text><rect x=\"46\" y=\"102\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"62.0\" y=\"122.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">8</text><rect x=\"82\" y=\"102\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"98.0\" y=\"122.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">9</text><text x=\"64\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">original</text><line x1=\"120\" y1=\"96\" x2=\"160\" y2=\"96\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"140\" y=\"86\" text-anchor=\"middle\" font-size=\"9\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">transpose</text><rect x=\"170\" y=\"30\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"186.0\" y=\"50.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"206\" y=\"30\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"222.0\" y=\"50.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><rect x=\"242\" y=\"30\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"258.0\" y=\"50.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">7</text><rect x=\"170\" y=\"66\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"186.0\" y=\"86.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"206\" y=\"66\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"222.0\" y=\"86.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">5</text><rect x=\"242\" y=\"66\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"258.0\" y=\"86.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">8</text><rect x=\"170\" y=\"102\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"186.0\" y=\"122.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><rect x=\"206\" y=\"102\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"222.0\" y=\"122.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">6</text><rect x=\"242\" y=\"102\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"258.0\" y=\"122.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">9</text><text x=\"224\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">transposed</text><line x1=\"280\" y1=\"96\" x2=\"320\" y2=\"96\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"300\" y=\"86\" text-anchor=\"middle\" font-size=\"9\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">reverse rows</text><rect x=\"330\" y=\"30\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"346.0\" y=\"50.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">7</text><rect x=\"366\" y=\"30\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"382.0\" y=\"50.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><rect x=\"402\" y=\"30\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"418.0\" y=\"50.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"330\" y=\"66\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"346.0\" y=\"86.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">8</text><rect x=\"366\" y=\"66\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"382.0\" y=\"86.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">5</text><rect x=\"402\" y=\"66\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"418.0\" y=\"86.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"330\" y=\"102\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"346.0\" y=\"122.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">9</text><rect x=\"366\" y=\"102\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"382.0\" y=\"122.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">6</text><rect x=\"402\" y=\"102\" width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"418.0\" y=\"122.2\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">3</text><text x=\"384\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\" font-family=\"Courier New, monospace\" font-weight=\"normal\">rotated 90</text></svg>",
    "starterCode": "def rotate(matrix):\n    n = len(matrix)\n    for i in range(n):\n        for j in range(i+1, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    for row in matrix:\n        row.reverse()\n    return matrix\nprint(rotate([[1,2,3],[4,5,6],[7,8,9]]))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_rotate_image"
    ]
  },
  {
    "id": "dsa_rotate_image",
    "mode": "challenge",
    "title": "Rotate Image",
    "phase": "DSA",
    "topic": "Math & Geometry",
    "story": "Solve: Rotate Image.",
    "starterCode": "def rotate(matrix):\n    pass\n\nprint(rotate([[1,2,3],[4,5,6],[7,8,9]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n"
      }
    ],
    "hints": [
      "Transpose the matrix, then reverse each row."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_spiral_matrix"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_spiral_matrix",
    "mode": "challenge",
    "title": "Spiral Matrix",
    "phase": "DSA",
    "topic": "Math & Geometry",
    "story": "Solve: Spiral Matrix.",
    "starterCode": "def spiral_order(matrix):\n    pass\n\nprint(spiral_order([[1,2,3],[4,5,6],[7,8,9]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n"
      }
    ],
    "hints": [
      "Shrink four boundaries (top/bottom/left/right) after each side is walked."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_set_matrix_zeroes"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_set_matrix_zeroes",
    "mode": "challenge",
    "title": "Set Matrix Zeroes",
    "phase": "DSA",
    "topic": "Math & Geometry",
    "story": "Solve: Set Matrix Zeroes.",
    "starterCode": "def set_zeroes(matrix):\n    pass\n\nprint(set_zeroes([[1,1,1],[1,0,1],[1,1,1]]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n"
      }
    ],
    "hints": [
      "Record which rows/cols contain a zero first, then zero them out in a second pass."
    ],
    "xpReward": 60,
    "coinReward": 20,
    "unlocks": [
      "dsa_happy_number"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_happy_number",
    "mode": "challenge",
    "title": "Happy Number",
    "phase": "DSA",
    "topic": "Math & Geometry",
    "story": "Solve: Happy Number.",
    "starterCode": "def is_happy(n):\n    pass\n\nprint(is_happy(19))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n"
      }
    ],
    "hints": [
      "Cycle detection: keep a set of numbers already seen."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_plus_one"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_plus_one",
    "mode": "challenge",
    "title": "Plus One",
    "phase": "DSA",
    "topic": "Math & Geometry",
    "story": "Solve: Plus One.",
    "starterCode": "def plus_one(digits):\n    pass\n\nprint(plus_one([1,2,3]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[1, 2, 4]\n"
      }
    ],
    "hints": [
      "You can join the digits into a number, add one, and split back into digits."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_pow_x_n"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_pow_x_n",
    "mode": "challenge",
    "title": "Pow(x, n)",
    "phase": "DSA",
    "topic": "Math & Geometry",
    "story": "Solve: Pow(x, n).",
    "starterCode": "def my_pow(x, n):\n    pass\n\nprint(my_pow(2.0, 10))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1024.0\n"
      }
    ],
    "hints": [
      "Fast exponentiation: square the base and halve the exponent each step."
    ],
    "xpReward": 65,
    "coinReward": 25,
    "unlocks": [
      "dsa_multiply_strings"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_multiply_strings",
    "mode": "challenge",
    "title": "Multiply Strings",
    "phase": "DSA",
    "topic": "Math & Geometry",
    "story": "Solve: Multiply Strings.",
    "starterCode": "def multiply(num1, num2):\n    pass\n\nprint(multiply(\"123\", \"456\"))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "56088\n"
      }
    ],
    "hints": [
      "Grade-school multiplication using an array of partial digit sums."
    ],
    "xpReward": 80,
    "coinReward": 25,
    "unlocks": [
      "dsa_detect_squares"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_detect_squares",
    "mode": "challenge",
    "title": "Detect Squares",
    "phase": "DSA",
    "topic": "Math & Geometry",
    "story": "Solve: Detect Squares.",
    "starterCode": "from collections import Counter\nclass DetectSquares:\n    def __init__(self):\n        self.counts = Counter()\n    def add(self, point):\n        pass\n    def count(self, point):\n        pass\n\nds = DetectSquares()\nds.add([3,10])\nds.add([11,2])\nds.add([3,2])\nprint(ds.count([11,10]))\nprint(ds.count([14,8]))\nds.add([11,2])\nprint(ds.count([11,10]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1\n0\n2\n"
      }
    ],
    "hints": [
      "For a fixed corner, check every other added point as a possible diagonal corner."
    ],
    "xpReward": 85,
    "coinReward": 30,
    "unlocks": [
      "dsa_single_number"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_bit_manipulation_teach",
    "mode": "teach",
    "title": "Bit Manipulation",
    "phase": "DSA",
    "topic": "Bit Manipulation",
    "story": "Every number is secretly a row of 1s and 0s (bits). Bitwise tricks let you manipulate numbers at lightning speed.",
    "explanation": [
      "XOR (^) cancels identical pairs: a ^ a = 0, and a ^ 0 = a. XOR-ing a whole list cancels every pair, leaving the odd one out.",
      "& (AND) checks specific bits; >> and << shift bits right/left (like multiplying/dividing by 2).",
      "n & 1 tells you if n is odd (1) or even (0) — no % needed."
    ],
    "diagram": "<svg viewBox=\"0 0 320 140\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:0 auto;\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#38bdf8\"/></marker><marker id=\"arrowGreen\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4ade80\"/></marker></defs><text x=\"150\" y=\"14\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\" font-weight=\"normal\">XOR every number together:</text><rect x=\"30\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"52.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">4</text><rect x=\"82\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"104.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"134\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"156.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><rect x=\"186\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"208.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">1</text><rect x=\"238\" y=\"30\" width=\"44\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"260.0\" y=\"54.9\" text-anchor=\"middle\" font-size=\"14\" fill=\"#e2e8f0\" font-family=\"Courier New, monospace\">2</text><text x=\"150\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" fill=\"#4ade80\" font-family=\"Courier New, monospace\" font-weight=\"normal\">1^1=0 and 2^2=0 (pairs cancel), only 4 survives</text><text x=\"150\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" fill=\"#fbbf24\" font-family=\"Courier New, monospace\" font-weight=\"normal\">single_number([4,1,2,1,2]) = 4</text></svg>",
    "starterCode": "def single_number(nums):\n    res = 0\n    for n in nums:\n        res ^= n\n    return res\nprint(single_number([4,1,2,1,2]))",
    "testCases": [],
    "hints": [],
    "xpReward": 0,
    "coinReward": 10,
    "unlocks": [
      "dsa_single_number"
    ]
  },
  {
    "id": "dsa_single_number",
    "mode": "challenge",
    "title": "Single Number",
    "phase": "DSA",
    "topic": "Bit Manipulation",
    "story": "Solve: Single Number.",
    "starterCode": "def single_number(nums):\n    pass\n\nprint(single_number([4,1,2,1,2]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "4\n"
      }
    ],
    "hints": [
      "XOR-ing every number cancels out all pairs, leaving the single one."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_number_of_1_bits"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_number_of_1_bits",
    "mode": "challenge",
    "title": "Number of 1 Bits",
    "phase": "DSA",
    "topic": "Bit Manipulation",
    "story": "Solve: Number of 1 Bits.",
    "starterCode": "def hamming_weight(n):\n    pass\n\nprint(hamming_weight(11))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Check the lowest bit with n & 1, then shift right."
    ],
    "xpReward": 40,
    "coinReward": 15,
    "unlocks": [
      "dsa_counting_bits"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_counting_bits",
    "mode": "challenge",
    "title": "Counting Bits",
    "phase": "DSA",
    "topic": "Bit Manipulation",
    "story": "Solve: Counting Bits.",
    "starterCode": "def count_bits(n):\n    pass\n\nprint(count_bits(5))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "[0, 1, 1, 2, 1, 2]\n"
      }
    ],
    "hints": [
      "dp[i] = dp[i >> 1] + (i & 1) reuses previously computed bit counts."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_reverse_bits"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_reverse_bits",
    "mode": "challenge",
    "title": "Reverse Bits",
    "phase": "DSA",
    "topic": "Bit Manipulation",
    "story": "Solve: Reverse Bits.",
    "starterCode": "def reverse_bits(n):\n    pass\n\nprint(reverse_bits(43261596))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "964176192\n"
      }
    ],
    "hints": [
      "Read each of the 32 bits and place it in the mirrored position."
    ],
    "xpReward": 55,
    "coinReward": 20,
    "unlocks": [
      "dsa_missing_number"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_missing_number",
    "mode": "challenge",
    "title": "Missing Number",
    "phase": "DSA",
    "topic": "Bit Manipulation",
    "story": "Solve: Missing Number.",
    "starterCode": "def missing_number(nums):\n    pass\n\nprint(missing_number([3,0,1]))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "2\n"
      }
    ],
    "hints": [
      "Expected sum 0..n minus actual sum gives the missing number."
    ],
    "xpReward": 45,
    "coinReward": 15,
    "unlocks": [
      "dsa_sum_two_integers"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_sum_two_integers",
    "mode": "challenge",
    "title": "Sum of Two Integers",
    "phase": "DSA",
    "topic": "Bit Manipulation",
    "story": "Solve: Sum of Two Integers.",
    "starterCode": "def get_sum(a, b):\n    pass\n\nprint(get_sum(1, 2))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "3\n"
      }
    ],
    "hints": [
      "Add without + using XOR (sum without carry) and AND+shift (carry) in a loop."
    ],
    "xpReward": 70,
    "coinReward": 25,
    "unlocks": [
      "dsa_reverse_integer"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_reverse_integer",
    "mode": "challenge",
    "title": "Reverse Integer",
    "phase": "DSA",
    "topic": "Bit Manipulation",
    "story": "Solve: Reverse Integer.",
    "starterCode": "def reverse_integer(x):\n    pass\n\nprint(reverse_integer(123))",
    "testCases": [
      {
        "input": "",
        "expectedOutput": "321\n"
      }
    ],
    "hints": [
      "Reverse the digit string, watch for 32-bit signed overflow."
    ],
    "xpReward": 50,
    "coinReward": 20,
    "unlocks": [
      "dsa_final_exam"
    ],
    "explanation": [],
    "diagram": null
  },
  {
    "id": "dsa_final_exam",
    "mode": "challenge",
    "title": "The Grand Algorithmic Trial",
    "phase": "DSA",
    "topic": "Final Exam",
    "explanation": [],
    "diagram": null,
    "story": "Implement all required methods in CodeQuestMaster.",
    "starterCode": "class CodeQuestMaster:\n    def two_sum(self, nums, target):\n        pass\n\n    def reverse_list(self, lst):\n        pass\n\n    def is_palindrome(self, s):\n        pass\n\n    def fibonacci(self, n):\n        pass\n\nmaster = CodeQuestMaster()\n",
    "testCases": [
      {
        "input": "print(master.two_sum([2,7,11,15], 9))",
        "expectedOutput": "[0, 1]\n"
      },
      {
        "input": "print(master.reverse_list([1,2,3,4]))",
        "expectedOutput": "[4, 3, 2, 1]\n"
      },
      {
        "input": "print(master.is_palindrome(\"A man, a plan, a canal: Panama\"))",
        "expectedOutput": "True\n"
      },
      {
        "input": "print(master.fibonacci(6))",
        "expectedOutput": "8\n"
      }
    ],
    "hints": [
      "two_sum: hash map",
      "reverse_list: slicing",
      "is_palindrome: clean and compare",
      "fibonacci: iteration/recursion"
    ],
    "xpReward": 200,
    "coinReward": 50,
    "unlocks": []
  }
];

export function getLevelById(id) {
  return levels.find(l => l.id === id);
}
