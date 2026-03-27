const mockData = {
    courses: [
    {
      id: 2,
      title: "Microsoft Office Essentials",
      progress: 0,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
      lessons: [
        { id: 201, title: "MS Word", desc: "Learn the basics of Microsoft Word, including formatting, saving documents, and essential tools.", videoId: "2MCmnr2L50o" },
        { id: 202, title: "MS Excel", desc: "Master spreadsheets, data entry, basic formulas, and functions in Microsoft Excel.", videoId: "wbJcJCkBcMg" },
        { id: 203, title: "MS PowerPoint", desc: "Learn how to create engaging presentations, add slides, and use transitions in Microsoft PowerPoint.", videoId: "KqgyvGxISxk" }
      ]
    },
    {
      id: 3,
      title: "Mastering Gmail",
      progress: 0,
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=400&q=80",
      lessons: [
        { 
          id: 301, 
          title: "Creating a Gmail Account & Interface Overview", 
          desc: "Learn how to set up a new Gmail account and navigate the main interface.", 
          videoId: "XBq6kPYe_9w", 
          transcript: {
            en: "Welcome to this tutorial on creating a Gmail account. First, go to gmail.com and click 'Create account'. Fill in your details including your name, desired email address, and a strong password. Once created, you will be taken to the main interface where you can see your inbox, sidebar, and compose button.",
            rw: "Murakaza neza muri ubu bushakashatsi bwo gukora konti ya Gmail. Mbere na mbere, jya kuri gmail.com hanyuma ukande 'Kora konti'. Uzuza imyirondoro yawe harimo izina ryawe, imeli wifuza, n'ijambo ryibanga rikomeye. Numara kuyikora, uzajyanwa ahabanza aho ushobora kubona ubutumwa bwawe, uruhande, n'akabuto ko kwandika."
          },
          exercise: {
            question: "Which button do you click to start writing a new email in Gmail?",
            options: ["Inbox", "Compose", "Sent", "Drafts"],
            answer: 1
          }
        },
        { 
          id: 302, 
          title: "Composing and Sending Emails", 
          desc: "Understand how to write emails, use CC and BCC, and attach files.", 
          videoId: "7V6oUzoLFoA", 
          transcript: {
            en: "To send an email, click the 'Compose' button. Enter the recipient's email address in the 'To' field. You can also use 'CC' to copy others, or 'BCC' to blind copy them so their email addresses are hidden. Type your subject and message, attach any files using the paperclip icon, and hit 'Send'.",
            rw: "Kugira ngo wohereze imeli, kanda akabuto 'Compose'. Andika imeli y'uwo woherereza mu mwanya wa 'To'. Ushobora no gukoresha 'CC' kugira ngo uhe abandi kopi, cyangwa 'BCC' kugira ngo uhe kopi abandi ariko imeli zabo zihishe. Andika impamvu n'ubutumwa, shyiraho dosiye ukoresheje agashushanyo k'impapuro, hanyuma ukande 'Ohereza'."
          },
          exercise: {
            question: "What does BCC stand for?",
            options: ["Blind Carbon Copy", "Basic Carbon Copy", "Before Carbon Copy", "Behind Carbon Copy"],
            answer: 0
          }
        },
        { 
          id: 303, 
          title: "Organizing Your Inbox", 
          desc: "Keep your inbox clean using labels, folders, and stars.", 
          videoId: "oLdHnWLbn4A",
          transcript: {
            en: "Keeping your inbox organized is crucial. You can create labels to categorize your emails, much like folders. To highlight important emails, click the star icon next to them. You can also archive emails you no longer need in your inbox but want to keep for future reference.",
            rw: "Gutunganya ubutumwa bwawe ni ingenzi. Ushobora gukora ibirango (labels) kugira ngo ushyire ubutumwa mu byiciro, kimwe n'amafoda. Kugira ngo ugaragaze ubutumwa bw'ingenzi, kanda inyenyeri iri iruhande rwabwo. Ushobora no kubika (archive) ubutumwa utagikeneye ahabanza ariko wifuza kubika."
          },
          exercise: {
            question: "Which feature allows you to categorize emails without moving them out of the inbox?",
            options: ["Spam", "Trash", "Labels", "Archive"],
            answer: 2
          }
        },
        { 
          id: 304, 
          title: "Searching and Filtering", 
          desc: "Find any email quickly using advanced search operators and filters.", 
          videoId: "bONCjKZenQw", 
          transcript: {
            en: "Gmail has a powerful search bar at the top. You can type keywords, or use operators like 'from:' or 'to:' to find specific emails. To automate things, you can create filters that automatically apply labels, archive, or delete incoming emails based on criteria you set.",
            rw: "Gmail ifite ahashakirwa hakomeye hejuru. Ushobora kwandika amagambo y'ingenzi, cyangwa ugakoresha amagambo nka 'from:' cyangwa 'to:' kugira ngo ubone ubutumwa runaka. Kugira ngo wikorere ibintu, ushobora gukora akayunguruzo (filters) gashyiraho ibirango, kubika, cyangwa gusiba ubutumwa bwinjira ukurikije ibyo washyizeho."
          },
          exercise: {
            question: "Which search operator finds emails from a specific person?",
            options: ["to:", "from:", "subject:", "has:"],
            answer: 1
          }
        },
        { 
          id: 305, 
          title: "Settings & Security", 
          desc: "Set up email signatures, vacation responders, and 2-Factor Authentication.", 
          videoId: "7HL---5eKlI",
          transcript: {
            en: "In the settings menu, you can customize your Gmail experience. You can set up a professional email signature that appears at the bottom of your emails. If you are away, turn on the vacation responder. Most importantly, secure your account by enabling 2-Step Verification in your Google Account settings.",
            rw: "Mu igenamiterere (settings), ushobora guhindura uko ukoresha Gmail. Ushobora gushyiraho umukono w'imeli ugaragara hasi y'ubutumwa bwawe. Niba udahari, fungura igisubizo cy'ikiruhuko (vacation responder). Ik'ingenzi kurushaho, rinda konti yawe ufungura kwemeza mu byiciro bibiri (2-Step Verification) mu igenamiterere rya Konti ya Google."
          },
          exercise: {
            question: "What feature automatically replies to emails when you are away?",
            options: ["Auto-Forward", "Vacation Responder", "Spam Filter", "Signature"],
            answer: 1
          }
        }
      ]
    },
    {
      id: 4,
      title: "HTML & CSS for Beginners",
      progress: 0,
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80",
      lessons: [
        {
          id: 401,
          type: "visual",
          title: "1.1 Introduction to HTML",
          desc: "Understand what HTML is and how it works.",
          instructions: "<h3>What is HTML?</h3><p>HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using markup.</p><img src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80' alt='HTML Structure' style='width:100%; border-radius:8px; margin: 1rem 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'><p>HTML elements are the building blocks of HTML pages. They are represented by tags, like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, etc.</p><p>Click <strong>Continue</strong> to start writing your first HTML code!</p>"
        },
        {
          id: 402,
          type: "code",
          title: "1.2 HTML Document Structure",
          desc: "Learn the basic skeleton of an HTML document.",
          instructions: "<h3>HTML Skeleton</h3><p>Every HTML document needs a basic structure. It starts with <code>&lt;!DOCTYPE html&gt;</code>, followed by an <code>&lt;html&gt;</code> tag containing <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>.</p><ul><li>Add a <code>&lt;title&gt;</code> tag inside the <code>&lt;head&gt;</code> with the text 'My First Webpage'.</li><li>Add an <code>&lt;h1&gt;</code> tag inside the <code>&lt;body&gt;</code> with the text 'Hello World'.</li></ul>",
          starterCode: "<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Add title here -->\n    \n  </head>\n  <body>\n    <!-- Add h1 here -->\n    \n  </body>\n</html>",
          solution: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Webpage</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>",
          validationRegex: /<title>.*?<\/title>[\s\S]*<h1>.*?<\/h1>/i,
          successMessage: "Great job! You've created a valid HTML document."
        },
        {
          id: 403,
          type: "code",
          title: "1.3 Headings",
          desc: "Learn about HTML headings from h1 to h6.",
          instructions: "<h3>Headings</h3><p>HTML has 6 levels of headings, from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).</p><ul><li>Add an <code>&lt;h2&gt;</code> tag with the text 'Subheading'.</li><li>Add an <code>&lt;h3&gt;</code> tag with the text 'Smaller Heading'.</li></ul>",
          starterCode: "<h1>Main Heading</h1>\n<!-- Add h2 and h3 below -->\n",
          solution: "<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Smaller Heading</h3>",
          validationRegex: /<h2.*?>.*?<\/h2>[\s\S]*<h3.*?>.*?<\/h3>/i,
          successMessage: "Awesome! You've added subheadings."
        },
        {
          id: 404,
          type: "code",
          title: "1.4 Paragraphs",
          desc: "Learn how to add paragraphs of text.",
          instructions: "<h3>Paragraphs</h3><p>The <code>&lt;p&gt;</code> tag is used to define a paragraph of text.</p><ul><li>Add a <code>&lt;p&gt;</code> tag with some text below the heading.</li><li>Add a second <code>&lt;p&gt;</code> tag with more text.</li></ul>",
          starterCode: "<h1>About Me</h1>\n<!-- Add paragraphs below -->\n",
          solution: "<h1>About Me</h1>\n<p>I am learning HTML.</p>\n<p>It is very fun!</p>",
          validationRegex: /<p.*?>.*?<\/p>[\s\S]*<p.*?>.*?<\/p>/i,
          successMessage: "Perfect! You've added paragraphs."
        },
        {
          id: 405,
          type: "code",
          title: "1.5 Formatting Text",
          desc: "Learn to use bold and italics.",
          instructions: "<h3>Formatting Text</h3><p>Let's make our text stand out.</p><ul><li>Make a word <b>bold</b> using the <code>&lt;strong&gt;</code> tag.</li><li>Make a word <i>italic</i> using the <code>&lt;em&gt;</code> tag.</li></ul>",
          starterCode: "<p>This text should have a strong word, and an emphasized word.</p>",
          solution: "<p>This text should have a <strong>strong</strong> word, and an <em>emphasized</em> word.</p>",
          validationRegex: /<strong.*?>.*?<\/strong>[\s\S]*<em.*?>.*?<\/em>/i,
          successMessage: "Awesome! Your text is now formatted."
        },
        {
          id: 406,
          type: "code",
          title: "1.6 Line Breaks and Horizontal Rules",
          desc: "Learn how to add line breaks and horizontal lines.",
          instructions: "<h3>Breaks and Rules</h3><p>The <code>&lt;br&gt;</code> tag adds a line break, and the <code>&lt;hr&gt;</code> tag adds a horizontal line.</p><ul><li>Add a <code>&lt;br&gt;</code> tag between the two sentences in the paragraph.</li><li>Add an <code>&lt;hr&gt;</code> tag below the paragraph.</li></ul>",
          starterCode: "<p>This is the first sentence. This is the second sentence.</p>\n<!-- Add hr below -->\n",
          solution: "<p>This is the first sentence.<br>This is the second sentence.</p>\n<hr>",
          validationRegex: /<br\s*\/?>[\s\S]*<hr\s*\/?>/i,
          successMessage: "Great! You've added breaks and rules."
        },
        {
          id: 407,
          type: "code",
          title: "1.7 Unordered Lists",
          desc: "Create bulleted lists.",
          instructions: "<h3>Unordered Lists</h3><p>Unordered lists are bulleted lists. They use the <code>&lt;ul&gt;</code> tag, and each item uses the <code>&lt;li&gt;</code> tag.</p><ul><li>Create an unordered list using <code>&lt;ul&gt;</code>.</li><li>Add at least two list items using <code>&lt;li&gt;</code> inside the <code>&lt;ul&gt;</code>.</li></ul>",
          starterCode: "<h2>My Favorite Foods</h2>\n<!-- Add your unordered list here -->\n",
          solution: "<h2>My Favorite Foods</h2>\n<ul>\n  <li>Pizza</li>\n  <li>Apples</li>\n</ul>",
          validationRegex: /<ul.*?>[\s\S]*<li.*?>.*?<\/li>[\s\S]*<li.*?>.*?<\/li>[\s\S]*<\/ul>/i,
          successMessage: "Perfect! You've mastered unordered lists."
        },
        {
          id: 408,
          type: "code",
          title: "1.8 Ordered Lists",
          desc: "Create numbered lists.",
          instructions: "<h3>Ordered Lists</h3><p>Ordered lists are numbered lists. They use the <code>&lt;ol&gt;</code> tag.</p><ul><li>Create an ordered list using <code>&lt;ol&gt;</code>.</li><li>Add at least two list items using <code>&lt;li&gt;</code> inside the <code>&lt;ol&gt;</code>.</li></ul>",
          starterCode: "<h2>Top 3 Movies</h2>\n<!-- Add your ordered list here -->\n",
          solution: "<h2>Top 3 Movies</h2>\n<ol>\n  <li>The Matrix</li>\n  <li>Inception</li>\n</ol>",
          validationRegex: /<ol.*?>[\s\S]*<li.*?>.*?<\/li>[\s\S]*<li.*?>.*?<\/li>[\s\S]*<\/ol>/i,
          successMessage: "Excellent! You've created an ordered list."
        },
        {
          id: 409,
          type: "code",
          title: "1.9 Images",
          desc: "Learn how to add images to your webpage.",
          instructions: "<h3>Images</h3><p>The <code>&lt;img&gt;</code> tag is used to embed an image. It requires a <code>src</code> attribute.</p><ul><li>Add an <code>&lt;img&gt;</code> tag.</li><li>Set the <code>src</code> attribute to <code>https://picsum.photos/200</code>.</li></ul>",
          starterCode: "<h2>A Random Image</h2>\n<!-- Add your image here -->\n",
          solution: "<h2>A Random Image</h2>\n<img src=\"https://picsum.photos/200\">",
          validationRegex: /<img\s+[^>]*src=["']https:\/\/picsum\.photos\/200["'][^>]*>/i,
          successMessage: "Beautiful! You've added an image."
        },
        {
          id: 410,
          type: "code",
          title: "1.10 Image Alt Text",
          desc: "Learn how to add alternative text to images.",
          instructions: "<h3>Alt Text</h3><p>The <code>alt</code> attribute provides alternative text for an image if it cannot be displayed, and is important for accessibility.</p><ul><li>Add an <code>alt</code> attribute to the image with the value 'A random photo'.</li></ul>",
          starterCode: "<h2>A Random Image</h2>\n<img src=\"https://picsum.photos/200\">\n",
          solution: "<h2>A Random Image</h2>\n<img src=\"https://picsum.photos/200\" alt=\"A random photo\">",
          validationRegex: /<img\s+[^>]*alt=["']A random photo["'][^>]*>/i,
          successMessage: "Great! Your image is now accessible."
        },
        {
          id: 411,
          type: "code",
          title: "1.11 Links",
          desc: "Learn how to create hyperlinks.",
          instructions: "<h3>Links</h3><p>The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL.</p><ul><li>Create a link using the <code>&lt;a&gt;</code> tag.</li><li>Set the <code>href</code> to <code>https://example.com</code>.</li><li>Set the link text to 'Visit Example'.</li></ul>",
          starterCode: "<p>Check out this website: <!-- Add link here --></p>\n",
          solution: "<p>Check out this website: <a href=\"https://example.com\">Visit Example</a></p>",
          validationRegex: /<a\s+[^>]*href=["']https:\/\/example\.com["'][^>]*>Visit Example<\/a>/i,
          successMessage: "Awesome! You've created a link."
        },
        {
          id: 412,
          type: "code",
          title: "1.12 Linking to other pages",
          desc: "Learn how to link to other pages on the same website.",
          instructions: "<h3>Relative Links</h3><p>You can link to other pages on your website using relative paths.</p><ul><li>Create a link to <code>about.html</code>.</li><li>Set the link text to 'About Us'.</li></ul>",
          starterCode: "<nav>\n  <!-- Add link here -->\n</nav>\n",
          solution: "<nav>\n  <a href=\"about.html\">About Us</a>\n</nav>",
          validationRegex: /<a\s+[^>]*href=["']about\.html["'][^>]*>About Us<\/a>/i,
          successMessage: "Perfect! You've created a relative link."
        },
        {
          id: 413,
          type: "code",
          title: "1.13 Opening Links in New Tabs",
          desc: "Learn how to open links in a new browser tab.",
          instructions: "<h3>Target Attribute</h3><p>The <code>target=\"_blank\"</code> attribute opens the linked document in a new window or tab.</p><ul><li>Add <code>target=\"_blank\"</code> to the existing link.</li></ul>",
          starterCode: "<p>Visit <a href=\"https://example.com\">Example</a>.</p>\n",
          solution: "<p>Visit <a href=\"https://example.com\" target=\"_blank\">Example</a>.</p>",
          validationRegex: /<a\s+[^>]*target=["']_blank["'][^>]*>/i,
          successMessage: "Great! The link will now open in a new tab."
        },
        {
          id: 414,
          type: "code",
          title: "1.14 Comments in HTML",
          desc: "Learn how to add comments to your code.",
          instructions: "<h3>Comments</h3><p>Comments are not displayed in the browser, but they help document your HTML source code.</p><ul><li>Add an HTML comment <code>&lt;!-- This is a comment --&gt;</code> anywhere in the code.</li></ul>",
          starterCode: "<h1>My Page</h1>\n<p>Some text.</p>\n",
          solution: "<h1>My Page</h1>\n<!-- This is a comment -->\n<p>Some text.</p>",
          validationRegex: /<!--.*?This is a comment.*?-->/i,
          successMessage: "Awesome! You've added a comment."
        },
        {
          id: 415,
          type: "quiz",
          title: "1.15 HTML Quiz",
          desc: "Test your HTML knowledge.",
          instructions: "<h3>HTML Section Complete!</h3><p>Congratulations on completing the HTML section of this course.</p><p>It's time to test your knowledge with a 15-question quiz.</p><p>Click the button below to start the HTML Quiz.</p>",
          quizId: "html"
        },
        {
          id: 416,
          type: "visual",
          title: "2.1 Introduction to CSS",
          desc: "Understand what CSS is and how it styles HTML.",
          instructions: "<h3>What is CSS?</h3><p>CSS (Cascading Style Sheets) is used to style and layout web pages. While HTML provides the structure, CSS provides the visual design.</p><img src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\" width=\"100%\" height=\"100%\" style=\"background:%231e1e1e; font-family:monospace;\"><rect width=\"100%\" height=\"100%\" fill=\"%231e1e1e\"/><text x=\"20\" y=\"50\" fill=\"%23d7ba7d\">h1 <tspan fill=\"%23d4d4d4\">{</tspan></text><text x=\"40\" y=\"80\" fill=\"%239cdcfe\">color<tspan fill=\"%23d4d4d4\">: </tspan><tspan fill=\"%23ce9178\">blue</tspan><tspan fill=\"%23d4d4d4\">;</tspan></text><text x=\"40\" y=\"110\" fill=\"%239cdcfe\">font-size<tspan fill=\"%23d4d4d4\">: </tspan><tspan fill=\"%23b5cea8\">24px</tspan><tspan fill=\"%23d4d4d4\">;</tspan></text><text x=\"20\" y=\"140\" fill=\"%23d4d4d4\">}</text><text x=\"20\" y=\"190\" fill=\"%23d7ba7d\">.box <tspan fill=\"%23d4d4d4\">{</tspan></text><text x=\"40\" y=\"220\" fill=\"%239cdcfe\">background-color<tspan fill=\"%23d4d4d4\">: </tspan><tspan fill=\"%23ce9178\">%23f0f0f0</tspan><tspan fill=\"%23d4d4d4\">;</tspan></text><text x=\"40\" y=\"250\" fill=\"%239cdcfe\">border<tspan fill=\"%23d4d4d4\">: </tspan><tspan fill=\"%23ce9178\">1px solid black</tspan><tspan fill=\"%23d4d4d4\">;</tspan></text><text x=\"20\" y=\"280\" fill=\"%23d4d4d4\">}</text></svg>' alt='CSS Styling' style='width:100%; border-radius:8px; margin: 1rem 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'><p>With CSS, you can change colors, fonts, spacing, and even create animations!</p><p>Click <strong>Continue</strong> to write some CSS.</p>"
        },
        {
          id: 417,
          type: "code",
          title: "2.2 Inline Styles",
          desc: "Learn how to add styles directly to HTML elements.",
          instructions: "<h3>Inline Styles</h3><p>You can add CSS directly to an HTML element using the <code>style</code> attribute.</p><ul><li>Add a <code>style</code> attribute to the <code>&lt;h1&gt;</code> tag.</li><li>Set the <code>color</code> to <code>red</code>.</li></ul>",
          starterCode: "<h1>This is a heading</h1>\n<p>This is a paragraph.</p>",
          solution: "<h1 style=\"color: red;\">This is a heading</h1>\n<p>This is a paragraph.</p>",
          validationRegex: /<h1\s+[^>]*style=["']color:\s*red;?["'][^>]*>/i,
          successMessage: "Great! You've added an inline style."
        },
        {
          id: 418,
          type: "code",
          title: "2.3 The <style> Tag",
          desc: "Learn how to use internal CSS.",
          instructions: "<h3>Internal CSS</h3><p>Instead of inline styles, you can put CSS rules inside a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section.</p><ul><li>Add a <code>&lt;style&gt;</code> block.</li><li>Inside it, write a rule to make all <code>&lt;p&gt;</code> tags blue.</li></ul>",
          starterCode: "<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Add style block here -->\n    \n  </head>\n  <body>\n    <p>This is paragraph 1.</p>\n    <p>This is paragraph 2.</p>\n  </body>\n</html>",
          solution: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      p {\n        color: blue;\n      }\n    </style>\n  </head>\n  <body>\n    <p>This is paragraph 1.</p>\n    <p>This is paragraph 2.</p>\n  </body>\n</html>",
          validationRegex: /<style>[\s\S]*p\s*{[\s\S]*color:\s*blue;?[\s\S]*}[\s\S]*<\/style>/i,
          successMessage: "Awesome! You've used internal CSS."
        },
        {
          id: 419,
          type: "code",
          title: "2.4 CSS Selectors: Element",
          desc: "Learn how to select elements by tag name.",
          instructions: "<h3>Element Selectors</h3><p>Element selectors target all HTML elements of a specific type.</p><ul><li>In the <code>&lt;style&gt;</code> block, select the <code>h2</code> element.</li><li>Set its <code>font-size</code> to <code>30px</code>.</li></ul>",
          starterCode: "<style>\n  /* Add your CSS here */\n  \n</style>\n<h2>Heading 2</h2>\n<h2>Another Heading 2</h2>",
          solution: "<style>\n  h2 {\n    font-size: 30px;\n  }\n</style>\n<h2>Heading 2</h2>\n<h2>Another Heading 2</h2>",
          validationRegex: /h2\s*{[\s\S]*font-size:\s*30px;?[\s\S]*}/i,
          successMessage: "Perfect! You've used an element selector."
        },
        {
          id: 420,
          type: "code",
          title: "2.5 CSS Selectors: Class",
          desc: "Learn how to select elements by class name.",
          instructions: "<h3>Class Selectors</h3><p>Class selectors target elements with a specific class attribute. They start with a dot (<code>.</code>).</p><ul><li>In the <code>&lt;style&gt;</code> block, select the <code>.highlight</code> class.</li><li>Set its <code>background-color</code> to <code>yellow</code>.</li></ul>",
          starterCode: "<style>\n  /* Add your CSS here */\n  \n</style>\n<p>Normal text.</p>\n<p class=\"highlight\">Highlighted text.</p>\n<p class=\"highlight\">More highlighted text.</p>",
          solution: "<style>\n  .highlight {\n    background-color: yellow;\n  }\n</style>\n<p>Normal text.</p>\n<p class=\"highlight\">Highlighted text.</p>\n<p class=\"highlight\">More highlighted text.</p>",
          validationRegex: /\.highlight\s*{[\s\S]*background-color:\s*yellow;?[\s\S]*}/i,
          successMessage: "Great! You've used a class selector."
        },
        {
          id: 421,
          type: "code",
          title: "2.6 CSS Selectors: ID",
          desc: "Learn how to select elements by ID.",
          instructions: "<h3>ID Selectors</h3><p>ID selectors target a single element with a specific id attribute. They start with a hash (<code>#</code>).</p><ul><li>In the <code>&lt;style&gt;</code> block, select the <code>#special</code> ID.</li><li>Set its <code>font-weight</code> to <code>bold</code>.</li></ul>",
          starterCode: "<style>\n  /* Add your CSS here */\n  \n</style>\n<p id=\"special\">This is a special paragraph.</p>\n<p>This is a normal paragraph.</p>",
          solution: "<style>\n  #special {\n    font-weight: bold;\n  }\n</style>\n<p id=\"special\">This is a special paragraph.</p>\n<p>This is a normal paragraph.</p>",
          validationRegex: /#special\s*{[\s\S]*font-weight:\s*bold;?[\s\S]*}/i,
          successMessage: "Awesome! You've used an ID selector."
        },
        {
          id: 422,
          type: "code",
          title: "2.7 Colors",
          desc: "Learn how to use colors in CSS.",
          instructions: "<h3>Colors</h3><p>You can use color names, HEX codes, or RGB values in CSS.</p><ul><li>Set the <code>color</code> of the <code>h1</code> to <code>#ff0000</code> (red).</li><li>Set the <code>background-color</code> of the <code>body</code> to <code>rgb(240, 240, 240)</code>.</li></ul>",
          starterCode: "<style>\n  body {\n    /* Add background-color here */\n    \n  }\n  h1 {\n    /* Add color here */\n    \n  }\n</style>\n<h1>Colorful Heading</h1>",
          solution: "<style>\n  body {\n    background-color: rgb(240, 240, 240);\n  }\n  h1 {\n    color: #ff0000;\n  }\n</style>\n<h1>Colorful Heading</h1>",
          validationRegex: /body\s*{[\s\S]*background-color:\s*rgb\(240,\s*240,\s*240\);?[\s\S]*}[\s\S]*h1\s*{[\s\S]*color:\s*#ff0000;?[\s\S]*}/i,
          successMessage: "Beautiful! You've added colors."
        },
        {
          id: 423,
          type: "code",
          title: "2.8 Fonts and Text Styles",
          desc: "Learn how to change fonts and text alignment.",
          instructions: "<h3>Fonts and Text</h3><p>You can change the font family and text alignment.</p><ul><li>Set the <code>font-family</code> of the <code>body</code> to <code>Arial, sans-serif</code>.</li><li>Set the <code>text-align</code> of the <code>h1</code> to <code>center</code>.</li></ul>",
          starterCode: "<style>\n  body {\n    /* Add font-family here */\n    \n  }\n  h1 {\n    /* Add text-align here */\n    \n  }\n</style>\n<h1>Centered Heading</h1>\n<p>Some text in Arial.</p>",
          solution: "<style>\n  body {\n    font-family: Arial, sans-serif;\n  }\n  h1 {\n    text-align: center;\n  }\n</style>\n<h1>Centered Heading</h1>\n<p>Some text in Arial.</p>",
          validationRegex: /body\s*{[\s\S]*font-family:\s*Arial,\s*sans-serif;?[\s\S]*}[\s\S]*h1\s*{[\s\S]*text-align:\s*center;?[\s\S]*}/i,
          successMessage: "Great! You've styled the text."
        },
        {
          id: 424,
          type: "visual",
          title: "2.9 The Box Model",
          desc: "Learn how margins, borders, and padding work.",
          instructions: "<h3>The CSS Box Model</h3><p>Every HTML element is essentially a box. The CSS box model consists of: margins, borders, padding, and the actual content.</p><img src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\" width=\"100%\" height=\"100%\" style=\"font-family:sans-serif;\"><rect width=\"100%\" height=\"100%\" fill=\"%23ffffff\"/><rect x=\"50\" y=\"20\" width=\"500\" height=\"260\" fill=\"%23f9cc9d\" stroke=\"%23e5b587\" stroke-width=\"2\"/><text x=\"60\" y=\"40\" fill=\"%23000\" font-size=\"14\" font-weight=\"bold\">Margin</text><rect x=\"100\" y=\"60\" width=\"400\" height=\"180\" fill=\"%23fdd085\" stroke=\"%23e5bc75\" stroke-width=\"2\"/><text x=\"110\" y=\"80\" fill=\"%23000\" font-size=\"14\" font-weight=\"bold\">Border</text><rect x=\"150\" y=\"100\" width=\"300\" height=\"100\" fill=\"%23c3d08b\" stroke=\"%23b0bc7d\" stroke-width=\"2\"/><text x=\"160\" y=\"120\" fill=\"%23000\" font-size=\"14\" font-weight=\"bold\">Padding</text><rect x=\"200\" y=\"140\" width=\"200\" height=\"20\" fill=\"%238cb6c0\" stroke=\"%237e9fa8\" stroke-width=\"2\"/><text x=\"210\" y=\"155\" fill=\"%23000\" font-size=\"14\" font-weight=\"bold\">Content</text></svg>' alt='Box Model' style='width:100%; border-radius:8px; margin: 1rem 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'><ul><li><strong>Content:</strong> The text or image.</li><li><strong>Padding:</strong> Clears an area around the content (inside the border).</li><li><strong>Border:</strong> A border that goes around the padding and content.</li><li><strong>Margin:</strong> Clears an area outside the border.</li></ul><p>Click <strong>Continue</strong> to practice layout and spacing.</p>"
        },
        {
          id: 425,
          type: "code",
          title: "2.10 Padding",
          desc: "Learn how to add space inside an element.",
          instructions: "<h3>Padding</h3><p>Padding is the space between the content and the border.</p><ul><li>Give the <code>.box</code> class a <code>padding</code> of <code>20px</code>.</li></ul>",
          starterCode: "<style>\n  .box {\n    border: 2px solid black;\n    background-color: lightblue;\n    /* Add padding here */\n    \n  }\n</style>\n<div class=\"box\">I have padding!</div>",
          solution: "<style>\n  .box {\n    border: 2px solid black;\n    background-color: lightblue;\n    padding: 20px;\n  }\n</style>\n<div class=\"box\">I have padding!</div>",
          validationRegex: /\.box\s*{[\s\S]*padding:\s*20px;?[\s\S]*}/i,
          successMessage: "Awesome! You've added padding."
        },
        {
          id: 426,
          type: "code",
          title: "2.11 Margin",
          desc: "Learn how to add space outside an element.",
          instructions: "<h3>Margin</h3><p>Margin is the space outside the border.</p><ul><li>Give the <code>.box</code> class a <code>margin</code> of <code>30px</code>.</li></ul>",
          starterCode: "<style>\n  .box {\n    border: 2px solid black;\n    background-color: lightgreen;\n    /* Add margin here */\n    \n  }\n</style>\n<div class=\"box\">I have margin!</div>\n<div class=\"box\">Me too!</div>",
          solution: "<style>\n  .box {\n    border: 2px solid black;\n    background-color: lightgreen;\n    margin: 30px;\n  }\n</style>\n<div class=\"box\">I have margin!</div>\n<div class=\"box\">Me too!</div>",
          validationRegex: /\.box\s*{[\s\S]*margin:\s*30px;?[\s\S]*}/i,
          successMessage: "Perfect! You've added margins."
        },
        {
          id: 427,
          type: "code",
          title: "2.12 Borders",
          desc: "Learn how to style borders.",
          instructions: "<h3>Borders</h3><p>You can change the width, style, and color of borders.</p><ul><li>Give the <code>.box</code> class a <code>border</code> of <code>5px dashed red</code>.</li><li>Give it a <code>border-radius</code> of <code>10px</code> to round the corners.</li></ul>",
          starterCode: "<style>\n  .box {\n    padding: 20px;\n    /* Add border and border-radius here */\n    \n  }\n</style>\n<div class=\"box\">I have a dashed red border!</div>",
          solution: "<style>\n  .box {\n    padding: 20px;\n    border: 5px dashed red;\n    border-radius: 10px;\n  }\n</style>\n<div class=\"box\">I have a dashed red border!</div>",
          validationRegex: /\.box\s*{[\s\S]*border:\s*5px\s+dashed\s+red;?[\s\S]*border-radius:\s*10px;?[\s\S]*}/i,
          successMessage: "Great! You've styled the border."
        },
        {
          id: 428,
          type: "code",
          title: "2.13 CSS Hover Effects",
          desc: "Make elements interactive with hover states.",
          instructions: "<h3>Hover Effects</h3><p>You can change how an element looks when the mouse hovers over it using the <code>:hover</code> pseudo-class.</p><ul><li>In the <code>&lt;style&gt;</code> block, add a rule for <code>button:hover</code>.</li><li>Change the <code>background-color</code> to <code>green</code> when hovered.</li></ul>",
          starterCode: "<style>\n  button {\n    background-color: blue;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    cursor: pointer;\n  }\n  /* Add your hover rule below */\n  \n</style>\n\n<button>Hover Me!</button>",
          solution: "<style>\n  button {\n    background-color: blue;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    cursor: pointer;\n  }\n  button:hover {\n    background-color: green;\n  }\n</style>\n\n<button>Hover Me!</button>",
          validationRegex: /button:hover\s*{[\s\S]*background-color:\s*green;?[\s\S]*}/i,
          successMessage: "Awesome! Try hovering over the button in the preview."
        },
        {
          id: 429,
          type: "quiz",
          title: "2.14 CSS Quiz",
          desc: "Test your CSS knowledge.",
          instructions: "<h3>CSS Section Complete!</h3><p>Congratulations on completing the CSS section of this course.</p><p>It's time to test your knowledge with a 15-question quiz.</p><p>Click the button below to start the CSS Quiz.</p>",
          quizId: "css"
        }
      ]
    },
  
  ],
  assignments: [
    {
      id: 1,
      title: "Build a Portfolio Website",
      course: "Web Development",
      deadline: "2026-03-15",
      status: "pending",
    },
    {
      id: 2,
      title: "Business Plan Draft",
      course: "Entrepreneurship",
      deadline: "2026-03-20",
      status: "pending",
    },
    {
      id: 3,
      title: "Email Etiquette Quiz",
      course: "Digital Literacy",
      deadline: "2026-03-10",
      status: "completed",
    },
  ],
  communityPosts: [],
};


let storedCourses = JSON.parse(localStorage.getItem("digirwa_courses") || "[]");
if (storedCourses.length === 0) {
  localStorage.setItem("digirwa_courses", JSON.stringify(mockData.courses));
}

window.renderCourses = (containerId, limit = null) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  const render = () => {
    let courses = JSON.parse(localStorage.getItem("digirwa_courses") || "[]");
    if (limit) courses = courses.slice(0, limit);

    container.innerHTML = courses
      .map(
        (course) => {
          let progressPercent = 0;
          let isUnlocked = true;
          
          if (typeof ProgressManager !== 'undefined') {
            const totalLessons = course.lessons ? course.lessons.length : 0;
            progressPercent = ProgressManager.getCourseCompletionPercentage(course.id, totalLessons);
            
            isUnlocked = true;
          } else {
            progressPercent = course.progress || 0;
          }

          const lockOverlay = !isUnlocked ? `
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; border-radius: var(--radius); z-index: 10;">
              <i data-lucide="lock" style="color: white; width: 48px; height: 48px;"></i>
            </div>
          ` : '';

          const link = isUnlocked ? ((course.id === 4 || course.id === 5) ? '/pages/interactive-course.html' : (course.id === 2 ? '/pages/word.html' : (course.id === 3 ? '/pages/gmail.html' : '/pages/course.html'))) + `?id=${course.id}` : '#';
          const btnClass = isUnlocked ? 'continue-button btn btn-outline' : 'btn btn-outline disabled';
          const pointerEvents = isUnlocked ? 'auto' : 'none';

          return `
            <div class="course-card card" style="position: relative; pointer-events: ${pointerEvents}; opacity: ${isUnlocked ? 1 : 0.7};">
                ${lockOverlay}
                <img src="${course.image || 'https://picsum.photos/seed/' + course.id + '/400/250'}" alt="${course.title}" class="course-image" referrerPolicy="no-referrer">
                <h3 class="course-title">${course.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${course.desc || (course.lessons && course.lessons.length > 0 ? course.lessons[0].desc : 'A great course to learn new skills.')}</p>
                <div class="course-progress progress-wrapper">
                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <div style="display: flex; justify-content: space-between; color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1rem;">
                    <span>${progressPercent}% Completed</span>
                </div>
                <a href="${link}" onclick="trackActiveCourse('${course.id}')" class="${btnClass}" data-i18n="continue_learning">Continue Learning</a>
            </div>
          `;
        }
      )
      .join("");
      
    if (window.lucide) window.lucide.createIcons();
  };

  render();

  
  window.addEventListener("storage", (e) => {
    if (e.key === "digirwa_courses" || e.key === "userProgress") {
      render();
    }
  });
  

  window.addEventListener("digirwa_courses_updated", () => {
    render();
  });
};
