var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " To Tillye, without whose patience this book would not exist.  and  John Davis who's enthusiasm to learn pushed me to actually sit down and write this book!  and  My Students who's questions have shaped this book!  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This book has had amazing friends and students edit and they have my eternal thanks:   Benjo    Caitlin    Jim     This book has had inspiration of many many many many professors and instructors, I am sure I will miss someone, and I am sorry, I'm getting old...   Annalisa Calini    Oleg Smirnov    Alex Kasman    Bob Mignone    Garrett Mitchener    Kate Owens    Andrew Przeworski    Liz Jurisich    Ben Cox    Stephane Lafortune    George McNulty    Matthew Ballard    Joshua Cooper    Ralph Howard    Anton R. Schep    Sean Yee    Frank Thorne    Alexander Duncan     "
},
{
  "id": "teacher_preface",
  "level": "1",
  "url": "teacher_preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " The purpose for this course\/book is to help the student that is about to transition from the traditional calculative courses, such as the calculus sequence, and begin their journey into the more abstract mathematics where proofs become prevalent.  Most students that would venture this far into the mathematics major have been enjoying these calculative classes, enjoying the comfort of an algorithm. Perhaps they were the student that loved Calculus III, where they pictured three dimensional shapes and loved the visualization. Whatever it was, I have seen far too many students then reach the more \"rigorous\" classes and lose interest, change majors, or just stop enjoying mathematics. In my opinion this is just a shame! And this text tries to give students an algorithm to hold on to as they move deeper and deeper into the muddle.  This transition from calculative to proving is why I choose instead of a combinatorial based course, such as discrete mathematics, to take our trip in the calculus student's favorite past time of numbers. So the student can rest assured that numbers are at the forefront of this course, even though we are exploring new and exciting paths where numbers may not take a leading role.  To the Teacher:  I don't know how you stumbled upon this book, but if you are reading this you are most likely deciding if you should adopt this textbook in your class. I'll save you the work: DO IT!  What? Are you still reading? Ohhh... you want more of an explanation. Well, first this book is free - stop making your students pay for expensive books!  Still here I see... You are more discerning. Well, if you want to know if my exercises are of your taste, I assure you I broke no molds in the exercises. In this textbook, students will prove the traditional even, odd, divides, etc.  Wait... you are still reading... ok people might ask what you are doing... quick giggle and say:  \"That's a funny tiktok.\"  That was close... didn't want your colleagues walking by to think you actually cared about student learning... so you want to know if this is different than those other introduction to proofs books... Well let me tell you a story...  I've had nights out at conferences with fellow mathematicians and have listened to these brilliant mathematicians lament on not understanding the purpose of a course on proof writing. And when these pillars of our mathematics community ever taught such a class it was with the outlook that someone learned to write proofs by seeing a lot of proofs. So the instructor would show off some proofs, never really motivating why or how one would move from one line to the next, then grab some questions from the exercise section, and just hope their students would figure it out.  By my flippant description of this interaction you probably put together that I don't feel this way. I feel like students can be led on the proving journey the same as they are led on their calculative journey, just that more care should be taken. I have attempted to create a text that allows the instructor to just \"follow the chapters\" in their present order and hopefully give the students this journey!  Ok... but you are still reading... Yes, you may be asking why are my examples so \"basic\" I never once mention derivative like the popular texts in this subject by the big publishers... well this is because I save that for analysis... in this course I am just trying to introduce proving, not introduce topics that cannot be picked up (almost) immediately. While these pithy examples can mislead the students that are still trying to \"just get the answer\" it is my hope that the treatment of these examples is what sets it apart.  Now, if you are curious of my ethos\/outlook on proofs or that of advanced\/abstract mathematics to see if it aligns with yours and you have yet been scared away by this preface, then I can only assume that you either know me personally and are wondering if this rampant rambling will ever end, or did he just blindly type on a keyboard and expect no one to ever read this. But perhaps brave traveler, you are like me and are actually wondering... If you continue to read you will see that I wax poetic about undefined terms and tracing back conclusions to our assumptions, axioms and definitions... if this is all true then why not just teach a student to prove with a course in geometry? Or if this approach is too archaic, start with a discrete math course where you can introduce them to fun brand new concepts like graphs and latin squares where they can start from first principles?  These are both amazing thoughts and in my personal opinion amazing classes, yet to go a little deeper than I had earlier in this preface, to me a discrete math course can take a lot of time playing with and learning these new concepts, and the proofs are a side-kick to the combinatorics, which is awesome to the combinatorics lover, and this indeed can often soften the blow between the calculus and the notorious math major courses. The problem is that the student will still feel lost in their algebra and analysis and what happens a lot is the student shy's away from these subjects and clings to combinatorics where they first got those good grades or where they first felt smart . Yet, in this weird class which feels like it teaches them nothing new, its real goal is to make them look at the things they already knew differently, by giving them their college algebra to play with not only for a safety blanket ()as I will quite often refer to it) but in hopes to give them the space and time needed to see the deepness of the pond of proofs they are now peering into.  But... of course the critical reader, as I am sure you are, combined with years of mathematical knowledge, as I also assume you have, might just say, \"Wait - isn't this just a baby's first number theory course?\"  To which I scoff, a scoff more deeply than I have ever scoffed...  If you have read this far, I'm sure you have already looked me up... but I'm definitely not a number theorist... sorry in advance!  "
},
{
  "id": "sec-1-1-axioms",
  "level": "1",
  "url": "sec-1-1-axioms.html",
  "type": "Section",
  "number": "0.1",
  "title": "In the Beginning We Had Shapes",
  "body": " In the Beginning We Had Shapes   As was true in ancient Athens, seems to ring true still in our sacred halls of academia, even more true after Bourbaki came in with their wrecking ball, and that is:  ΑΓΕΩΜΕΤΡΗΤΟΣ ΜΗΔΕΙΣ ΕΙΣΙΤΩ  Of course if that was \"all Greek to you,\" do not fret fair Caesar, that was simply the author paying tribute to those that came before...  The history of math books are littered with reference to tax collectors and assessors, but besides the lousy adjectives that we call numbers we have had Geometry!     Undefined Terms  It is our intention to be able to agree, beyond a shadow of doubt, on the truth of a litany of statements. These agreements are called proofs. As one first ventures on this journey they often take many things for granted, perhaps the most important is that we have a mutual agreement\/understanding of the words and symbols being used in the discourse. This is easier said than done, as when one is defining a word they must of course use more words , then those words would of course need even more words to define them... and so on.... and so forth.  When would this pattern end? To ever have a discussion that went forward we would eventually need to stop. The stopping words, are commonly referred to as undefined terms . For example, the almost universally agreed upon undefined terms for geometry are: point , line , and incident .   Surprisingly, as Aristotle had already explained the necessity of undefined terms, Euclid did attempt to define the words such as point and line. Luckily, this did not effect his discourse, as the definitions were vague and used at best to visualize a geometry, rather than fix them with an immutable meaning.     Axioms  After we have all agreed on the undefined terms, we would then need to set some ground rules . These rules that our new undefined terms must follow are known as axioms . Using our geometry example from above, one common axiom of euclidean geometry is:     For any two points there exists a line incident to both.     The etymology of the word axiom comes from a Greek word meaning \"to require.\" I find this apropos as axioms are required - otherwise we would have no footing to begin a discourse.    Definitions  Now once we have our undefined terms and axioms, we begin building perhaps the most important part of all proofs: the definitions . One of the major take-aways from this course is that I would like the student to understand the importance of a definition. You can only prove something is true when you know that thing, when you know that thing's definition.    Proofs  There are two interpretations of what has been presented before you. One, hopefully how it has been presented here, is that there is no other way one could argue\/debate without this structure. Otherwise, a party could simply keep going backwards and backwards with no assumptions\/axioms to back stop the debate.  The other point of view, perhaps most popular in textbooks, is to call this approach deductive reasoning , and draw contrast to that of inductive reasoning , somehow pitting the two against each other. The epitome of physicists versus mathematicians - even applied mathematicians vs theoretical mathematicians.  The differences attempting to be drawn between the world we have just set forward and that of collecting data and observing specific instances or phenomena, striving to form a theory, a model , that reveals patterns or relationships among quantities and structures in nature. This process labeled as inductive reasoning, drawing general conclusions from particular cases\/patterns. Which is supposed to be in stark opposition to deductive reasoning, where we draw conclusions based on statements accepted as true, our axioms and undefined terms. After which proofs are built, to ensure that conclusions are drawn logically to arrive at truth. Yet, it is impossible to separate these. It is the phenomena of our surrounding universe that Euclid yearned to define and describe in his geometries.  Yet, do not take these abstractions as something to be taken for granted. To quote Russell, \"It is only at a high stage of civilization that we could take this series as a starting point.\" Or perhaps to quote another, \"undoubtedly it took a million years to get the taste of an oyster just right.\"  In this class we will not explore the amazing world of tracing back every single conclusion to an undefined term or axiom, but instead we will start with A LOT of assumptions, assumptions students at this stage are used to making, namely \"college algebra.\" Then later we will use fewer and fewer assumptions, only dipping our toe in the endless pond of abstraction.   "
},
{
  "id": "subsec-0-1-1-undefined-terms-3",
  "level": "2",
  "url": "sec-1-1-axioms.html#subsec-0-1-1-undefined-terms-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "point line incident "
},
{
  "id": "subsec-1-1-2-axioms-2",
  "level": "2",
  "url": "sec-1-1-axioms.html#subsec-1-1-2-axioms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axioms "
},
{
  "id": "subsec-0-1-3-defns-2",
  "level": "2",
  "url": "sec-1-1-axioms.html#subsec-0-1-3-defns-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definitions "
},
{
  "id": "subsec-0-1-4-proofs-3",
  "level": "2",
  "url": "sec-1-1-axioms.html#subsec-0-1-4-proofs-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deductive reasoning inductive reasoning "
},
{
  "id": "sec-1-2-checking",
  "level": "1",
  "url": "sec-1-2-checking.html",
  "type": "Section",
  "number": "0.2",
  "title": "Just Check a Bunch",
  "body": " Just Check a Bunch  Students are probably most familiar with the natural and social sciences, where theories are tested by comparing what happens in experiments to what was predicted, and checking that the results stay the same when the experiment is repeated. In math, the goal is often to figure out whether a statement is always true. Even if a statement works for a lot of examples, there's still the chance that one example we haven't tested could show it's false. For example, you might notice that the expression   This example is inspired by an example that I absolutely fell in love with. I first came across the inspirational example in Smith, Douglas, Maurice Eggen, and Richard St Andre. \"A transition to advanced mathematics.\" (1983).      produces a prime number for many values of . The diligent student will check that for the first 10, 20, 30 or even 40 positive integers, when we substitute our number for , we arrive at a prime number such as     which is prime! If this hard working student were to check with other numbers like 41, 42, and 43 they would also discover prime numbers as the solution.  However, this is not a conclusive proof, as it fails for , where the result is 1681, which is actually a square, that is it factors as .  I know for almost all of you, at least at one time in your life, it is enticing to just try specific examples. As well, it is undeniable that exploring these examples can, at times, offer valuable insights into mathematical concepts and relationships, it is not sufficient as a proof unless every possible case can be examined.  "
},
{
  "id": "sec-1-3-obvioulsy",
  "level": "1",
  "url": "sec-1-3-obvioulsy.html",
  "type": "Section",
  "number": "0.3",
  "title": "Obviously",
  "body": " Obviously  When writing a proof a challenging task is to decipher what is obvious. The rule I make in my class is that you should write so that ANYONE in the class would have no questions as to how you got to the next step.  Just to make things extra fun (and by fun, I mean slightly confusing), there will be moments when I'm pretty sure every single one of you will look at a step and think, \"Well, obviously!\" But then the next homework assignment will be to prove that very statement.  There will be moments where you are absolutely NOT allowed to just say, \"Oh, that's obvious!\" Furthermore, I will be very clear (especially at the beginning) on what you are allowed to take as given\/obvious and everything else must be proven!  "
},
{
  "id": "sec-2-1-propositions",
  "level": "1",
  "url": "sec-2-1-propositions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Propositions and Connectives",
  "body": " Propositions and Connectives   I have heard many students say things like \"I'm a math major not an English major.\" This sentiment becomes further and further from the truth as you continue your journey in the major of mathematics. For one, you begin to see mathematics as a language itself, with its own grammar and rules. And in particular in this course, you begin to only write paragraphs in exchange for the string of symbols and numbers from your calculus courses. As we begin our journey into abstract mathematics we need to do the exact opposite of this sentiment, and instead examine how language works, specifically how language handles truth.  In English, as in many languages, there are many types of sentences - some more complicated than others. We will now be concerning ourselves with the truth of sentence. This is the hallmark of proving: only writing sentences that are true, so that our conclusions are then true.    Propositions and Negation  Even though many statements\/sentences can be true or can be false, it doesn't make sense to say that any sentence that you could write is true or not. For example there are questions such as \"Where is my phone?\" or exclamations like \"Oh no!\" Both of these examples are indeed complete sentences, as in, they express a complete thought, but are neither true nor false.   Proposition  proposition  A proposition is a sentence that can take only one of two values: truth or false.     Some Examples of Propostions  proposition  The following are examples of propositions:    The gazel will become the only living animal on earth by the year 2525.  Galileo Galilei had bacon on his eleventh birthday.    Some propositions, like (A) in have clear truth values, that is, we can easily determine if the statement is either True or False (but not both). Perhaps, to untangle the last sentence, it is clear that (A) in is False.  Yet, the remaining (B) and (C) in , cannot be easily determined if they are True or False (unless of course you are reading this after 2525) but nonetheless they are either True or False (and not both) whether or not we can determine which one.    Some Examples of Sentences that are not Propositions  The following are sentences that are NOT propositions:   Stop!  She has my phone.   This sentence is false.      paradox For examples (B) and (C) in are not propositions because (B) depends on who \"She\" is to determine its truth value, while in (C) it depends on what \" \" is, for example when is 2 it is True, but when is 3 it is False. Example (A) from is an exclamation and is neither True nor False. Finally, (D) from is known as a paradox . If the statement “This sentence is false” is true, then by its meaning it must be false. On the other hand, if the given statement is false, then what it claims is false, so it must be true.  In our journey of learning propositional logic we will often find it necessary to discuss arbitrary propositions. To do so we will try and use capital letters such as: , , , , and .  There are many ways to create new propositions from old ones. Our first tool to do just that is the logical negation .     Negation  negation  Given a proposition ,   The negation of , denoted , is the proposition  \" not  \"   is true exactly when is false.     It is noteworthy that the symbol can be found in many texts for the negation as well. The negation is simply the opposite of the proposition.    Some Negation Examples  negation      : The sky is purple.   : The sky is not purple.     : It is raining right now at SMWC.   : It is not raining right now at SMWC.         Connectives and Compound Propositions   simple  compound  atomic In the propositions are all simple or atomic in the sense that they do not have any other propositions as components. Compound propositions can be formed by using connective words, connecting more than one proposition.    Conjunction  conjunction  and  Given propositions and ,   The conjunction of and , denoted , is the proposition:  \"  and  \"   is true exactly when both  and are true!    We will see throughout this course that many different words in English can be used for our propositions with the same meaning. For example, but, while, and although are usually translated symbolically with the conjunction connective. An example of this, using the propositions from (A) in below, is we could write \"It is not raining outside but I do have my umbrella\" symbolically as \" .\"    Some Conjunction Examples  conjunction  and    : \"It is raining outside.\"  : \"I have an umbrella.\"  : It is raining outside and I have an umbrella.     : \"Leonardo di ser Piero da Vinci was born in Italy.\"   : \" is rational.\"   : \"Leonardo di ser Piero da Vinci was born in Italy and is rational.\"     : \"DNA stores information about how to build cells\"   : \"Archaea are prokaryotes\"   : \"DNA stores information about how to build cells and Archaea are prokaryotes\"        Disjunction  disjunction  or  Given propositions and ,   The disjunction of and , denoted , is the proposition:  \"  or  \"  is true exactly when at least one of  or are true.     inclusive or  exclusive or The logical disjunction is often referred to as the inclusive or , as it is still true when both propositions are true. In English we often assume the use of the exclusive or , that is, when we use the word or we most often mean only one of two choices. For example \"would you like chicken or steak.\" When someone says this to you, you know immediately they do not mean that you can have both chicken and steak, that is not the case for the logical disjunction.    Some Disjunction Examples  disjunction  or      : 10 is a composite.   : 4 is a prime.   : 10 is a composite or 4 is prime.    : \"I will do my homework.\"  : \"I will watch Star Wars.\"  : \"I will do my homework or I will watch Star Wars.\"    : \"I will do the dishes tonight.\"  : \"I am cooking tonight.\"  : \"I will do the dishes tonight or I am cooking tonight.\"         "
},
{
  "id": "sec-2-1-1-props-and-neg-3",
  "level": "2",
  "url": "sec-2-1-propositions.html#sec-2-1-1-props-and-neg-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Proposition.",
  "body": " Proposition  proposition  A proposition is a sentence that can take only one of two values: truth or false.  "
},
{
  "id": "prop-example",
  "level": "2",
  "url": "sec-2-1-propositions.html#prop-example",
  "type": "Example",
  "number": "1.1.2",
  "title": "Some Examples of Propostions.",
  "body": " Some Examples of Propostions  proposition  The following are examples of propositions:    The gazel will become the only living animal on earth by the year 2525.  Galileo Galilei had bacon on his eleventh birthday.   "
},
{
  "id": "not-prop-example",
  "level": "2",
  "url": "sec-2-1-propositions.html#not-prop-example",
  "type": "Example",
  "number": "1.1.3",
  "title": "Some Examples of Sentences that are not Propositions.",
  "body": " Some Examples of Sentences that are not Propositions  The following are sentences that are NOT propositions:   Stop!  She has my phone.   This sentence is false.   "
},
{
  "id": "sec-2-1-1-props-and-neg-8",
  "level": "2",
  "url": "sec-2-1-propositions.html#sec-2-1-1-props-and-neg-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paradox "
},
{
  "id": "sec-2-1-1-props-and-neg-10",
  "level": "2",
  "url": "sec-2-1-propositions.html#sec-2-1-1-props-and-neg-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "negation "
},
{
  "id": "sec-2-1-1-props-and-neg-11",
  "level": "2",
  "url": "sec-2-1-propositions.html#sec-2-1-1-props-and-neg-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "negation "
},
{
  "id": "ex-negation",
  "level": "2",
  "url": "sec-2-1-propositions.html#ex-negation",
  "type": "Example",
  "number": "1.1.5",
  "title": "Some Negation Examples.",
  "body": " Some Negation Examples  negation      : The sky is purple.   : The sky is not purple.     : It is raining right now at SMWC.   : It is not raining right now at SMWC.     "
},
{
  "id": "sec-2-1-2-connect-2",
  "level": "2",
  "url": "sec-2-1-propositions.html#sec-2-1-2-connect-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple atomic Compound "
},
{
  "id": "def-conjunction",
  "level": "2",
  "url": "sec-2-1-propositions.html#def-conjunction",
  "type": "Definition",
  "number": "1.1.6",
  "title": "Conjunction.",
  "body": " Conjunction  conjunction  and  Given propositions and ,   The conjunction of and , denoted , is the proposition:  \"  and  \"   is true exactly when both  and are true!   "
},
{
  "id": "ex-conjunction",
  "level": "2",
  "url": "sec-2-1-propositions.html#ex-conjunction",
  "type": "Example",
  "number": "1.1.7",
  "title": "Some Conjunction Examples.",
  "body": " Some Conjunction Examples  conjunction  and    : \"It is raining outside.\"  : \"I have an umbrella.\"  : It is raining outside and I have an umbrella.     : \"Leonardo di ser Piero da Vinci was born in Italy.\"   : \" is rational.\"   : \"Leonardo di ser Piero da Vinci was born in Italy and is rational.\"     : \"DNA stores information about how to build cells\"   : \"Archaea are prokaryotes\"   : \"DNA stores information about how to build cells and Archaea are prokaryotes\"    "
},
{
  "id": "def-disjunction",
  "level": "2",
  "url": "sec-2-1-propositions.html#def-disjunction",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Disjunction.",
  "body": " Disjunction  disjunction  or  Given propositions and ,   The disjunction of and , denoted , is the proposition:  \"  or  \"  is true exactly when at least one of  or are true.   "
},
{
  "id": "sec-2-1-2-connect-7",
  "level": "2",
  "url": "sec-2-1-propositions.html#sec-2-1-2-connect-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inclusive or exclusive or "
},
{
  "id": "ex-or",
  "level": "2",
  "url": "sec-2-1-propositions.html#ex-or",
  "type": "Example",
  "number": "1.1.9",
  "title": "Some Disjunction Examples.",
  "body": " Some Disjunction Examples  disjunction  or      : 10 is a composite.   : 4 is a prime.   : 10 is a composite or 4 is prime.    : \"I will do my homework.\"  : \"I will watch Star Wars.\"  : \"I will do my homework or I will watch Star Wars.\"    : \"I will do the dishes tonight.\"  : \"I am cooking tonight.\"  : \"I will do the dishes tonight or I am cooking tonight.\"     "
},
{
  "id": "sec-2-2-conditionals",
  "level": "1",
  "url": "sec-2-2-conditionals.html",
  "type": "Section",
  "number": "1.2",
  "title": "Conditionals and Biconditionals",
  "body": " Conditionals and Biconditionals   complete In the last section we saw a few connectives. Using only these connectives is possible and is all you need for a complete logical system, but it ignores an important decree used quite often in logic\/debate\/mathematics. That is, the implication.   Conditionals   Conditional  conditional  Given the propositions and ,   the conditional statement  is the proposition  \"If then \"  Proposition is called the antecedent and is the consequent .  The conditional statement is true exactly when is false or is true.     implies There are many ways of translating the conditional to English statements, which we will in the next table, but perhaps the most popular is implies , that is, \" implies .\"     :  Example:    If then   If I am cooking tonight then I will do dishes     implies   The water temperature is C implies the water is boiling     is sufficient for  The water temperature is C is sufficient for the water is boiling     only if  I am cooking tonight only if I will do the dishes     , if   The water is boiling if the water temperature is C     whenever   The water is boiling whenever the water temperature is C     is necessary for   The water is boiling is necessary for the water temperature is C     when   The water is boiling when the water temperature is C    Since we get   Since we have seen that 4 is even we get that 2 divides 4.    I have found the truth values of this connective to be the most challenging for students. To help, I suggest the student always think of the next example.    The Lying Politician  implies  conditional  lying politician   : I am elected   : I will lower taxes   : If I am elected then I will lower taxes.  So when is politician lying?  There are a couple of cases:   The politician is indeed elected:    The politician lowers taxes!  The politician is not lying!    The politician does not lower taxes  The politician is lying!      The politician is not elected:    The politician works hard with community leaders and lobbies to get taxes lowered  The politician is not lying!    The politician sits on their couch all day eating Fruit Loops, and taxes are not lowered  The politician is not lying!         Students seem to have the hardest time seeing that when the politician is not elected, there is no obligation to do anything, and hence the politician is not lying!    Biconditionals   Biconditional  biconditional  Given the propositions and ,   the biconditional statement  is the proposition  \" if and only if \"  The biconditional statement is true exactly when and have the same truth value.     iff  if and only if  biconditional Instead of writing \"if and only if\" we will often elect to only type \"iff.\" Just as with the implication, the biconditional has many English translations:     :  Example:     if and only if   I will buy dinner if and only if you buy the movie tickets     if, but only if   The water temperature is C if, but only if the water is boiling     is equivalent to  The water temperature is C is sufficient for the water is boiling     is necessary and sufficient for  I am cooking tonight is necessary and sufficient for you to do the dishes    It is this biconditional that I believe many students hear when they hear the phrase: \"If I am elected then I will lower taxes.\" When indeed they mean \"Taxes will be lowered if, but only if I am elected.\"   "
},
{
  "id": "sec-2-2-conditionals-2",
  "level": "2",
  "url": "sec-2-2-conditionals.html#sec-2-2-conditionals-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complete "
},
{
  "id": "def-condition",
  "level": "2",
  "url": "sec-2-2-conditionals.html#def-condition",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Conditional.",
  "body": " Conditional  conditional  Given the propositions and ,   the conditional statement  is the proposition  \"If then \"  Proposition is called the antecedent and is the consequent .  The conditional statement is true exactly when is false or is true.   "
},
{
  "id": "sec-2-2-1-conditional-3",
  "level": "2",
  "url": "sec-2-2-conditionals.html#sec-2-2-1-conditional-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "implies "
},
{
  "id": "ex-lying",
  "level": "2",
  "url": "sec-2-2-conditionals.html#ex-lying",
  "type": "Example",
  "number": "1.2.2",
  "title": "The Lying Politician.",
  "body": " The Lying Politician  implies  conditional  lying politician   : I am elected   : I will lower taxes   : If I am elected then I will lower taxes.  So when is politician lying?  There are a couple of cases:   The politician is indeed elected:    The politician lowers taxes!  The politician is not lying!    The politician does not lower taxes  The politician is lying!      The politician is not elected:    The politician works hard with community leaders and lobbies to get taxes lowered  The politician is not lying!    The politician sits on their couch all day eating Fruit Loops, and taxes are not lowered  The politician is not lying!       "
},
{
  "id": "def-biconditional",
  "level": "2",
  "url": "sec-2-2-conditionals.html#def-biconditional",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Biconditional.",
  "body": " Biconditional  biconditional  Given the propositions and ,   the biconditional statement  is the proposition  \" if and only if \"  The biconditional statement is true exactly when and have the same truth value.   "
},
{
  "id": "sec-2-3-truth-tables",
  "level": "1",
  "url": "sec-2-3-truth-tables.html",
  "type": "Section",
  "number": "1.3",
  "title": "Truth Tables",
  "body": " Truth Tables   So far we have always looked at actual sentences, even when a letter like was introduced, it was immediately followed by an actual statement.  Recall, our journey is to show\/find the truth of statements, most often referred to as proofs. In this journey we will need to use propositions which we already know the truth value of and combine them to arrive at new propositions which we want to be true. To be able to do this we need to be able to know how combining different propositions with our connectives affect their truth value (truthiness). To keep track of this, we now introduce truth tables.     Basic Tables   truth table In a truth table , we take arbitrary propositions indicated by letters, such as , , , , and , and consider all the cases of each being either True (T) or False (F). We then explore how combining them with connectives changes the truth value of the compound propositions.   propositional forms We will call these arbitrary propositions\/compound propositions, propositional forms . These propositional forms do not have a truth value. Instead, each form has a list of truth values that depend on the values assigned to its components. This list is displayed by presenting all possible combinations for the truth values of its components in a truth table.  To do this we will need to first be able to collect all the combinations of truth values of the basic components of a compound proposition. So for example, if the compound proposition has two components, lets name them and , then all combinations are:         T  T    T  F    F  T    F  F     Now to see everything together, we will begin with a couple of simple ones, first the conjunction ( ). Since the conjunction involves two components ( and ) their truth tables must include all combinations of their two truth values, just as collected above in figure .   conjunction  truth table         T  T  T    T  F  F    F  T  F    F  F  F     Next, the disjunction ( ). Since the disjunction also only involves two components ( and ) their truth tables must again include all combinations of their two truth values, just as collected above in .   disjunction truth table         T  T  T    T  F  T    F  T  T    F  F  F     Next, we will see the truth table for the negation, . Since the negation only involves one component ( ) we simply need the two truth values that can obtain.   negation truth table        T  F    F  T     Now, we see the implication, in action. Again, this has two components so we must list them all.   implies truth table  conditional truth table         T  T  T    T  F  F    F  T  T    F  F  T              T  T  F  T    T  F  F  T    F  T  T  T    F  F  T  F     The biconditional is an important one, which we use as the word equivalent. This table shows us that this is an apt word use.   iff truth table  if and only if truth table  biconditional truth table         T  T  T    T  F  F    F  T  F    F  F  T       More Complicated Tables  Now let's dive into more complicated examples. As our examples get more complicated, I suggest that the student take time to break-it-down and create extra columns that are themselves components of compound propositions. A simple example of this is the compound proposition: This example has only two basic components, namely and . Yet, notice that the antecedent is , this is what I suggest you create a new column for. Namely, after you make your column and your column, and before you make your final column, add a column           T  T  F     T  F  F     F  T  T     F  F  T      Next, you can complete the table by only looking at the and columns as they are the only ones now involved in the compound proposition            T  T  F  T    T  F  F  T    F  T  T  T    F  F  T  F     For an even more complicated example consider: This has two major pieces, namely as well as . Again, the atomic pieces are and so we begin with our standard two columns, then we include a column for each of these major pieces:           T  T  T  T    T  F  T  F    F  T  T  F    F  F  F  F     Now recall that we are trying to build a table for . The next major piece we see is             T  T  T  T  F    T  F  T  F  T    F  T  T  F  T    F  F  F  F  T     Finally, we can simply look at the cells as well as to finish our table for:              T  T  T  T  F  F    T  F  T  F  T  T    F  T  T  F  T  T    F  F  F  F  T  F     From now on we will only show the finished tables.  Another way of making a more complicated table is to have a compound proposition which involves three atomic propositions: , , and . In this case all of the possible combinations of true and false are the following:          T  T  T    T  T  F    T  F  T    T  F  F    F  T  T    F  T  F    F  F  T    F  F  F     Now we can do an example like             T  T  T  T  T    T  T  F  F  T    T  F  T  T  F    T  F  F  F  T    F  T  T  F  T    F  T  F  F  T    F  F  T  F  T    F  F  F  F  T       Tautologies and Contradictions  Some of the strongest tools in proving are propositional statements that are either always true or always false.   Tautology  tautology   A tautology is a propositional form that is true for any assignment of truth value to its components     law of the excluded middle One of the most famous, and most meme'd is the Law of the Excluded Middle , , which is a tautology. It is the classic \"to be or not to be,\" \"today I will do my homework or I will not.\" We can use a truth table to see that this statement is always true.          T  F  T    F  T  T     Another example, that may not immediately be as obvious is               T  T  T  F  F  F  T    T  F  T  F  T  F  T    F  T  T  T  F  F  T    F  F  F  T  T  T  T      Contradiction  contradiction   A contradiction is a propositional form that is false for any assignment of truth value to its components.    An example of a contradiction is the famous . This is the classic \"I will go to bed early and I will not go to bed early.\"          T  F  F    F  T  F     Another example of a contradiction is: , that is of course just a negation of a tautology.           T  F  T  F    F  T  T  F      "
},
{
  "id": "subsec-2-3-1-easy-tables-2",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-1-easy-tables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truth table "
},
{
  "id": "subsec-2-3-1-easy-tables-3",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-1-easy-tables-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "propositional forms "
},
{
  "id": "table-truths",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#table-truths",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "       T  T    T  F    F  T    F  F    "
},
{
  "id": "subsec-2-3-1-easy-tables-7",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-1-easy-tables-7",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " conjunction  truth table         T  T  T    T  F  F    F  T  F    F  F  F    "
},
{
  "id": "subsec-2-3-1-easy-tables-9",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-1-easy-tables-9",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " disjunction truth table         T  T  T    T  F  T    F  T  T    F  F  F    "
},
{
  "id": "subsec-2-3-1-easy-tables-11",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-1-easy-tables-11",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " negation truth table        T  F    F  T    "
},
{
  "id": "subsec-2-3-1-easy-tables-13",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-1-easy-tables-13",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": " implies truth table  conditional truth table         T  T  T    T  F  F    F  T  T    F  F  T    "
},
{
  "id": "subsec-2-3-1-easy-tables-14",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-1-easy-tables-14",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": "         T  T  F  T    T  F  F  T    F  T  T  T    F  F  T  F    "
},
{
  "id": "subsec-2-3-1-easy-tables-16",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-1-easy-tables-16",
  "type": "Figure",
  "number": "1.3.7",
  "title": "",
  "body": " iff truth table  if and only if truth table  biconditional truth table         T  T  T    T  F  F    F  T  F    F  F  T    "
},
{
  "id": "subsec-2-3-2-hard-tables-3",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-2-hard-tables-3",
  "type": "Figure",
  "number": "1.3.8",
  "title": "",
  "body": "         T  T  F     T  F  F     F  T  T     F  F  T     "
},
{
  "id": "subsec-2-3-2-hard-tables-5",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-2-hard-tables-5",
  "type": "Figure",
  "number": "1.3.9",
  "title": "",
  "body": "         T  T  F  T    T  F  F  T    F  T  T  T    F  F  T  F    "
},
{
  "id": "subsec-2-3-2-hard-tables-7",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-2-hard-tables-7",
  "type": "Figure",
  "number": "1.3.10",
  "title": "",
  "body": "         T  T  T  T    T  F  T  F    F  T  T  F    F  F  F  F    "
},
{
  "id": "subsec-2-3-2-hard-tables-9",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-2-hard-tables-9",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": "          T  T  T  T  F    T  F  T  F  T    F  T  T  F  T    F  F  F  F  T    "
},
{
  "id": "subsec-2-3-2-hard-tables-11",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-2-hard-tables-11",
  "type": "Figure",
  "number": "1.3.12",
  "title": "",
  "body": "           T  T  T  T  F  F    T  F  T  F  T  T    F  T  T  F  T  T    F  F  F  F  T  F    "
},
{
  "id": "subsec-2-3-2-hard-tables-14",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-2-hard-tables-14",
  "type": "Figure",
  "number": "1.3.13",
  "title": "",
  "body": "        T  T  T    T  T  F    T  F  T    T  F  F    F  T  T    F  T  F    F  F  T    F  F  F    "
},
{
  "id": "subsec-2-3-2-hard-tables-16",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-2-hard-tables-16",
  "type": "Figure",
  "number": "1.3.14",
  "title": "",
  "body": "          T  T  T  T  T    T  T  F  F  T    T  F  T  T  F    T  F  F  F  T    F  T  T  F  T    F  T  F  F  T    F  F  T  F  T    F  F  F  F  T    "
},
{
  "id": "def-tautology",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#def-tautology",
  "type": "Definition",
  "number": "1.3.15",
  "title": "Tautology.",
  "body": " Tautology  tautology   A tautology is a propositional form that is true for any assignment of truth value to its components   "
},
{
  "id": "subsec-2-3-3-taut-4",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-3-taut-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Law of the Excluded Middle "
},
{
  "id": "subsec-2-3-3-taut-5",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-3-taut-5",
  "type": "Figure",
  "number": "1.3.16",
  "title": "",
  "body": "        T  F  T    F  T  T    "
},
{
  "id": "subsec-2-3-3-taut-7",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-3-taut-7",
  "type": "Figure",
  "number": "1.3.17",
  "title": "",
  "body": "            T  T  T  F  F  F  T    T  F  T  F  T  F  T    F  T  T  T  F  F  T    F  F  F  T  T  T  T    "
},
{
  "id": "def-contradiction",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#def-contradiction",
  "type": "Definition",
  "number": "1.3.18",
  "title": "Contradiction.",
  "body": " Contradiction  contradiction   A contradiction is a propositional form that is false for any assignment of truth value to its components.   "
},
{
  "id": "subsec-2-3-3-taut-10",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-3-taut-10",
  "type": "Figure",
  "number": "1.3.19",
  "title": "",
  "body": "        T  F  F    F  T  F    "
},
{
  "id": "subsec-2-3-3-taut-12",
  "level": "2",
  "url": "sec-2-3-truth-tables.html#subsec-2-3-3-taut-12",
  "type": "Figure",
  "number": "1.3.20",
  "title": "",
  "body": "         T  F  T  F    F  T  T  F    "
},
{
  "id": "sec-1-3",
  "level": "1",
  "url": "sec-1-3.html",
  "type": "Section",
  "number": "1.4",
  "title": "Logical Equivalences",
  "body": " Logical Equivalences   In this course, students will often treat this beginning material of propositions and truth tables as not connected to the proofs, and just a way to get some good grades on early homework. I cannot blame the student for this - when thrown into an unknown world it is hard to hold on to everything.  Yet, we will now dive into equivalences. In the world of proving it may often be difficult to prove a statement how it appears in the homework, or how you first discovered it, but if you were to simply re-word it, it becomes simpler to prove. These reworkings are the equivalences.     What is an equivalence?   Logically Equivalent  equivalent logically equivalent   Two propositional forms are logically equivalent (or just equivalent ) if and only if they have the same truth values.    The notation we will use for two propositional forms being equivalent is:   To show that two propositional forms are indeed equivalent at the beginning, we only have the tool of truth tables at our disposal. What we will see in this first example is that no matter our choice of truth value for , has the same truth value, that is    double negation          T  F  T    F  T  F      For another example lets see if             T  T  T  F  T    T  F  F  F  F    F  T  T  T  T    F  F  T  T  T     Thus we see that the truth values are the same for and !     Some Important Equivalences  There are a number of logical equivalences that are very important to become familiar with. We will build some of these truth tables for you, and leave the rest for exercises.    Augustus De Morgan   Augustus De Morgan (27 June 1806 - 18 March 1871) was a British mathematician and logician. He is best known for De Morgan's laws, relating logical conjunction, disjunction, and negation, and for coining the term \"mathematical induction\", the underlying principles of which he formalized. De Morgan's contributions to logic are heavily used in many branches of mathematics, including set theory and probability theory, as well as other related fields such as computer science.  *information from Wikipedia*    logic laws  logic laws dounble negation  logic laws commutativity  logic laws distributive  logic laws absorption  logic laws DeMorgan's  logic laws associativity  logic laws contrapositive  logic laws Rob's Law  double negation  commutativity  distributive  absorption  DeMorgan's  associativity  contrapositive  Rob's Law               Double negation Law                  Commutativity Laws          Distributivity Laws          Absorption Laws          DeMorgan's Law          Associativity Laws             Contrapositive             Rob's Law        We saw the double negation law in .  Next we will build the truth tables for two important ones, namely Rob's Law and contrapositive, then leave the rest as an exercise.   contrapositive truth table            T  T  T  F  F  T    T  F  F  F  F  F    F  T  T  T  T  T    F  F  T  T  T  T      Rob's Law truth table            T  T  T  F  T    T  F  F  F  F    F  T  T  T  T    F  F  T  T  T        The Algebra of Logic  Now that we have established the laws in , we have a new way to prove two propositional forms are equivalent. It is what I playfully refer to as the algebra of logic.   For a first example of this, let's see a proof that       There are many examples for you to try in this chapter's exercises, but we will leave you with one more example.           "
},
{
  "id": "def-equiv",
  "level": "2",
  "url": "sec-1-3.html#def-equiv",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Logically Equivalent.",
  "body": " Logically Equivalent  equivalent logically equivalent   Two propositional forms are logically equivalent (or just equivalent ) if and only if they have the same truth values.   "
},
{
  "id": "ex-double-negation",
  "level": "2",
  "url": "sec-1-3.html#ex-double-negation",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": " double negation          T  F  T    F  T  F     "
},
{
  "id": "subsec-2-4-1-what-equiv-7",
  "level": "2",
  "url": "sec-1-3.html#subsec-2-4-1-what-equiv-7",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "           T  T  T  F  T    T  F  F  F  F    F  T  T  T  T    F  F  T  T  T     Thus we see that the truth values are the same for and !  "
},
{
  "id": "thm-logic-laws",
  "level": "2",
  "url": "sec-1-3.html#thm-logic-laws",
  "type": "Theorem",
  "number": "1.4.6",
  "title": "",
  "body": " logic laws  logic laws dounble negation  logic laws commutativity  logic laws distributive  logic laws absorption  logic laws DeMorgan's  logic laws associativity  logic laws contrapositive  logic laws Rob's Law  double negation  commutativity  distributive  absorption  DeMorgan's  associativity  contrapositive  Rob's Law               Double negation Law                  Commutativity Laws          Distributivity Laws          Absorption Laws          DeMorgan's Law          Associativity Laws             Contrapositive             Rob's Law      "
},
{
  "id": "subsec-2-4-2-important-equiv-5",
  "level": "2",
  "url": "sec-1-3.html#subsec-2-4-2-important-equiv-5",
  "type": "Proof",
  "number": "1.4.2.1",
  "title": "",
  "body": " We saw the double negation law in .  Next we will build the truth tables for two important ones, namely Rob's Law and contrapositive, then leave the rest as an exercise.   contrapositive truth table            T  T  T  F  F  T    T  F  F  F  F  F    F  T  T  T  T  T    F  F  T  T  T  T      Rob's Law truth table            T  T  T  F  T    T  F  F  F  F    F  T  T  T  T    F  F  T  T  T     "
},
{
  "id": "subsec-2-4-3-logic-algebra-3",
  "level": "2",
  "url": "sec-1-3.html#subsec-2-4-3-logic-algebra-3",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": " For a first example of this, let's see a proof that      "
},
{
  "id": "subsec-2-4-3-logic-algebra-5",
  "level": "2",
  "url": "sec-1-3.html#subsec-2-4-3-logic-algebra-5",
  "type": "Example",
  "number": "1.4.10",
  "title": "",
  "body": "       "
},
{
  "id": "sec-2-1",
  "level": "1",
  "url": "sec-2-1.html",
  "type": "Section",
  "number": "1.5",
  "title": "Quantifiers",
  "body": " Quantifiers    predicate It is now time to take care of those statements that were not propositions from , but have probably been bugging you this whole time like: , which are known as an open statement or predicate . But how on earth are we to do mathematics and these sentences not be in our lexicon? To handle these we need to quantify the , by saying we can find a number so that . Before quantifying the statement you didn't even need to assume was a number!  \"But Dr. Rob, I could tell was a number by context!\"  But what context was that? Was it that this is a math class and I'm a math professor? Even so, what kind of number? A rational number (fractions)? A positive number? An imaginary number?     The Universe of Discourse   universe of discourse As many of you have assuredly yelled at the book by now, of course I can determine from context what we are talking about. But this is exactly the point of this next section, that before starting a discussion you must set your context. What we will call our universe of discourse .   set The universe of discourse is our first example of a set .  So that we handle this playground with the respect it deserves, we will only give a very brief introduction to the topic right now, just what we need. We will dive deeper into set theory and use it as one of our major examples later on in the book in !  Let's start with the very basics and define some things.   set  element   Set : A collection of stuff (or nothing).  Element : The stuff in the set.    The elements in a set do not have a particular order, so you can think of a set like a \"magical bag\" that holds things.  Set theory, like everything, comes with its own special notation. We often denote sets with a capital letter, and elements with a lower case letter.  The symbol can be read as \"in\" or \"is an element of\" or \"is a member of.\"  For example, \" \" would be read as \" is in ,\" or, \" is an element of the set \", or \" is a member of the set .\"  Besides just arbitrarily naming a set to define a set we can also describe what the set by capturing all the elements in the set between the symbols and , then separating the elements by commas. For example, if we just wanted to collect the following numbers in a set: Or if we were to collect the set of all counting numbers we could use ... to indicate continuing a pattern: We could also use what is known as set builder notation:   Additionally, in this section we will speak of a set being empty a good bit, this means there are no elements in the set, we often denote such a set as and call it the empty set. This as well as other concepts will be made more concise in a latter chapter.    Common Universes  Throughout the text we will use a lot of common universes in our text, but also to really drive home the wide application of these theories we will use some less common universes as well. The most common universes we will deal with are the numbers, of which we will mostly discuss the following:    natural numbers  integers  counting numbers  rational numbers  real numbers  complex numbers      The Whole Numbers       The Natural Numbers       The Integers       The Rational Numbers       The Real Numbers       The Complex Numbers     Notice that I take the extremely divisive standpoint that contains 0. Later in the book, , we will justify this, but for now, I am your teacher and thus you are in my camp on this issue!    Truth Sets and Predicate Forms  When we are discussing a general universe of discourse we will denote it as . We will also often need to speak of a predicate in general terms so we will use the function notation for predicates. Such as for the predicate we can denote it by . And thus we can now determine that a statement like , which is , is false.   truth set  predicate After setting our universe, we can now talk about the truth set of a predicate , that is, the collection of all of the elements in our universe that make true.   truth set  The truth set for the open sentence \" \" depends on the universe of discourse. When the universe is set as then the truth set is . When the universe is then the truth set is . If the universe was to be then the truth set would be the open interval .    Equivalent Predicates  predicate equivalent  equivalent predicate   For a fixed universe of discourse, we say that two predicates, and , are equivalent iff they have the same truth set.  We will denote this as     Now let's see an example of this in play with some, perhaps, unexpected results.   predicate equivalent  equivalent predicate  The predicates and are equivalent in the universe . They are not equivalent in the universe .  To see this is true notice that with the universe both and have no elements which make it true, that is both of their truth sets are empty.  On the other hand for the universe , has the truth set of yet has the truth set of and these two sets are clearly not the same.   This next example should work the way you expected.   The open statements and are equivalent in the universe but they again are not equivalent in the universe   For both of these universes the truth set for both and is      The Existential Quantifier  Consider the predicate . Again, this is not a proposition, as it depends on the universe and which from this universe we are talking about. But, there is a way of choosing an from the universe to turn this into a proposition - that is, to consider the statement: This proposition is still treated differently than other propositions we have considered, as it still depends on the universe. This new proposition can be formed from the predicate by applying a quantifier, that is, we qualify our open sentence before saying it.   Existential Quantifier  existential quantifier  exists  quantifier existential   For a predicate , the sentence is read or or The proposition is true iff the truth set of is nonempty. The symbol is called the existential quantifier     One way to show that is true for a specific universe is to identify an object such that is true.   existential quantifier  exists  quantifier existential  For this example lets consider the following predicates                   For (C) the statement is true in the universe , as as well as many other numbers. In statement (A) there are no real numbers that have any opinions on books from my understanding, but if the universe was all people then is true as I am a person and I love books. Similarly for (B) the proposition, in the universe of all people is also true, as I also eat pizza!   In English there are many ways to say the existential quantifier, such as:    \"some\"    \"at least one\"    \"there is\"    and so many more.  I'd like to end this subsection with the symbolization of a statement which should be     The Universal Quantifier  The statement, \"everyone reads books\" is being qualified by something different than an exists, yet does have a truth value, and hence is a proposition. It is this quantifier that we call the universal quantifier.   Universal Quantifier  universal quantifier  quantifier universal  for all   For a predicate , the statement is read and is true iff the truth set of is the entire universe. The symbol is called the universal quantifier .    In English there are many ways to say the universal quantifier, such as:    \"for all\"    \"for every\"    \"for each\"    and so many more.    For this example let's consider the following predicates                   In (C) for the universe the proposition is false, as yet 2 is not greater than 4. For (A) in the universe of all people, the proposition is also false as I have met many students who dislike most math textbooks. Similarly for (B) in the universe of all people the proposition is also false as I have met a health conscious person who does not eat pizza.   universal quantifier  quantifier universal  for all  There are many many many examples of the use of the universal quantifier, but one popular one that I'd like to take a moment to discuss is: this can be symbolized by     Negating Quantifiers  It is also important to note what the negation of each of these quantifiers is.   Negating an Existential:    quantifier negation  negating quantifiers  exists negation  read literally says, \"There does not exist.\" Sometimes it is helpful to read this as \"everybody doesn't.\" That is    Negating a Universal:    quantifier negation  negating quantifiers  for all negation  says \"not all,\" which can be thought of as, \"somebody does.\" That is,     quantifier negation  negating quantifiers  for all negation  exists negation  For these examples we will see multiple ways to write them.          *NOT* (For all integers , is an integer)  For some integers , is not an integer.           *NOT*(There exists an integer such that )  For all integers , does not equal .        Unique Existence  There is a special case of the existential quantifier, that is used when you want to be very clear that there is only one special member of the universe that satisfies your predicate.   Unique Existential Quantifier  unique existential quantifier  quantifier unique existential  exists unique   For a predicate , the proposition is read and is true iff the truth set of has exactly one element form the universe. The symbol is called the unique existential quantifier .    The difference between the existential and unique existential quantifier is the number of elements of the universe that satisfy your open statement.    unique existential quantifier  quantifier unique existential  exists unique  Consider the next two predicates:                   The statement is true in the universe as the only number satisfying the statement , that is is even and prime, is . The proposition on the other hand, is true for the universe , as the only natural number to satisfy this propostion is 2, but not true for the universe as there are two numbers, namely +2 and -2 in the integers which make the predicate true.   The negation of the unique existential quantifier in words is:  Either \"everyone doesn't\" or \"at least two do\"  To write this out in symbols we have:     Examples in Context  Now we will give some more examples of using quantifiers in sentences      Every Indiana resident older than 18, can vote     Some functions defined at 0 are not differentiable at zero     Some students are math majors and some students are business majors     Some Students major in math and accounting.       "
},
{
  "id": "sec-2-1-2-1",
  "level": "2",
  "url": "sec-2-1.html#sec-2-1-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "open statement predicate "
},
{
  "id": "subsec-2-5-1-basic-sets-2",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-1-basic-sets-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universe of discourse "
},
{
  "id": "subsec-2-5-1-basic-sets-3",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-1-basic-sets-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set "
},
{
  "id": "subsec-2-5-1-basic-sets-6",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-1-basic-sets-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Set Element "
},
{
  "id": "subsec-2-5-2-truth-sets-3",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-2-truth-sets-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truth set "
},
{
  "id": "subsec-2-5-2-truth-sets-4",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-2-truth-sets-4",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": " truth set  The truth set for the open sentence \" \" depends on the universe of discourse. When the universe is set as then the truth set is . When the universe is then the truth set is . If the universe was to be then the truth set would be the open interval .  "
},
{
  "id": "def-equiv-predicate",
  "level": "2",
  "url": "sec-2-1.html#def-equiv-predicate",
  "type": "Definition",
  "number": "1.5.2",
  "title": "Equivalent Predicates.",
  "body": " Equivalent Predicates  predicate equivalent  equivalent predicate   For a fixed universe of discourse, we say that two predicates, and , are equivalent iff they have the same truth set.  We will denote this as    "
},
{
  "id": "subsec-2-5-2-truth-sets-7",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-2-truth-sets-7",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": " predicate equivalent  equivalent predicate  The predicates and are equivalent in the universe . They are not equivalent in the universe .  To see this is true notice that with the universe both and have no elements which make it true, that is both of their truth sets are empty.  On the other hand for the universe , has the truth set of yet has the truth set of and these two sets are clearly not the same.  "
},
{
  "id": "subsec-2-5-2-truth-sets-9",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-2-truth-sets-9",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": " The open statements and are equivalent in the universe but they again are not equivalent in the universe   For both of these universes the truth set for both and is   "
},
{
  "id": "def-exists",
  "level": "2",
  "url": "sec-2-1.html#def-exists",
  "type": "Definition",
  "number": "1.5.5",
  "title": "Existential Quantifier.",
  "body": " Existential Quantifier  existential quantifier  exists  quantifier existential   For a predicate , the sentence is read or or The proposition is true iff the truth set of is nonempty. The symbol is called the existential quantifier    "
},
{
  "id": "subsec-2-5-4-existential-5",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-4-existential-5",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": " existential quantifier  exists  quantifier existential  For this example lets consider the following predicates                   For (C) the statement is true in the universe , as as well as many other numbers. In statement (A) there are no real numbers that have any opinions on books from my understanding, but if the universe was all people then is true as I am a person and I love books. Similarly for (B) the proposition, in the universe of all people is also true, as I also eat pizza!  "
},
{
  "id": "def-universal",
  "level": "2",
  "url": "sec-2-1.html#def-universal",
  "type": "Definition",
  "number": "1.5.7",
  "title": "Universal Quantifier.",
  "body": " Universal Quantifier  universal quantifier  quantifier universal  for all   For a predicate , the statement is read and is true iff the truth set of is the entire universe. The symbol is called the universal quantifier .   "
},
{
  "id": "subsec-2-5-5-universal-8",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-5-universal-8",
  "type": "Example",
  "number": "1.5.8",
  "title": "",
  "body": " For this example let's consider the following predicates                   In (C) for the universe the proposition is false, as yet 2 is not greater than 4. For (A) in the universe of all people, the proposition is also false as I have met many students who dislike most math textbooks. Similarly for (B) in the universe of all people the proposition is also false as I have met a health conscious person who does not eat pizza.  "
},
{
  "id": "subsec-2-5-6-neg-quant-8",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-6-neg-quant-8",
  "type": "Example",
  "number": "1.5.9",
  "title": "",
  "body": " quantifier negation  negating quantifiers  for all negation  exists negation  For these examples we will see multiple ways to write them.          *NOT* (For all integers , is an integer)  For some integers , is not an integer.           *NOT*(There exists an integer such that )  For all integers , does not equal .     "
},
{
  "id": "def-unique-exists",
  "level": "2",
  "url": "sec-2-1.html#def-unique-exists",
  "type": "Definition",
  "number": "1.5.10",
  "title": "Unique Existential Quantifier.",
  "body": " Unique Existential Quantifier  unique existential quantifier  quantifier unique existential  exists unique   For a predicate , the proposition is read and is true iff the truth set of has exactly one element form the universe. The symbol is called the unique existential quantifier .   "
},
{
  "id": "subsec-2-5-7-unique-6",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-7-unique-6",
  "type": "Example",
  "number": "1.5.11",
  "title": "",
  "body": " unique existential quantifier  quantifier unique existential  exists unique  Consider the next two predicates:                   The statement is true in the universe as the only number satisfying the statement , that is is even and prime, is . The proposition on the other hand, is true for the universe , as the only natural number to satisfy this propostion is 2, but not true for the universe as there are two numbers, namely +2 and -2 in the integers which make the predicate true.  "
},
{
  "id": "subsec-2-5-8-unique-4",
  "level": "2",
  "url": "sec-2-1.html#subsec-2-5-8-unique-4",
  "type": "Example",
  "number": "1.5.12",
  "title": "",
  "body": "   Every Indiana resident older than 18, can vote     Some functions defined at 0 are not differentiable at zero     Some students are math majors and some students are business majors     Some Students major in math and accounting.     "
},
{
  "id": "sec-1-4",
  "level": "1",
  "url": "sec-1-4.html",
  "type": "Section",
  "number": "1.6",
  "title": "Exercises",
  "body": " Exercises    Write truth tables for the following:              Show the remaining laws are from are true, using truth tables.    Use a truth table to show whether the following are or are not equivalent:   ,  ,  ,  ,     Turn the first statement into the second one. Show your steps and state which equivalence rule from 1.3.2 you used to get there.          Consider the statement Which of the following are also ways of saying this statement? (identify all that apply)  There is at least one real number whose cube is 3.  The cube of each real number is 3.  Some real numbers have cube 3.  The number has cube 3, for some real number .  If is a real number, then .  Some real number has cube 3.      Consider the statement Which of the following are also ways of saying this statement? (identify all that apply)  If the sum of an integer and one is even, then that integer is odd.  All integers are even once you add one and are odd.  Given any integer which once adding one is even, that integer must be odd.  For all integers, there are some which you add one then it is even.  Any integer which is even once adding one is odd.  All odd integers are even once adding one.      Translate the following English statements into symbolic sentences with quantifiers. The universe for each is given in the parenthetical.    Not all math students are hardworking. ( all students)    All math students are not hardworking. ( all students)    There is a smallest positive integer ( )    Some people are happy and some people are not happy. ( all people)    No one loves everybody      Rewrite the statement in English without using the symbols or . Express your answer as simply as possible. Then write a negation for the statement. Determine which statement is true, the original or the negation.   .  .      Rewrite the statement formally using quantifiers and variables. Write the negation of the statement.  Everybody believes somebody.  Somebody believes everybody.  Any even integer equals some other integer plus 1.  The number of rows in any truth-table is for some integer .      "
},
{
  "id": "sec-3-1-arguments",
  "level": "1",
  "url": "sec-3-1-arguments.html",
  "type": "Section",
  "number": "2.1",
  "title": "Arguments",
  "body": " Arguments   Arguments are so important, they merit their own chapter. They are the essence of your future proofs, these are your \"steps\" you long for from your calculus class.    Validness  To begin you give the most general form for these steps .   Argument  argument   The general form of an argument is:              and are the assumptions and is the conclusion. The symbol is read \"therefore.\"    Arguments are simply propositions listed in an order, so we will need to make sense of this in our logical framework. To do so we have the following definition.   Valid  valid  argument valid   We will say an argument is valid whenever is a tautology.     Invalid   We will say an argument is invalid whenever is a contradiction.    Recall, what it takes for an implication to be true, that is either the antecedent is false or the consequent is true.    valid  argument valid  argument invalid  argument  Here are some examples of valid arguments:    All parabolas are functions of degree 2    All functions of degree 2 are quadratic    All parabolas are quadratic      An apple is purple    An apple is a fruit    An apple is purple      All spiders have 8 legs    A poodle is a spider    A poodle has 8 legs    Here is an example of an invalid argument:    All chickens are animals that eat corn    All chickens are animals that have wings    All animals that eat corn have wings     Notice that it is not the truth of the premises that makes an argument valid or invalid, but rather the truth of the conclusion.    "
},
{
  "id": "def-argument",
  "level": "2",
  "url": "sec-3-1-arguments.html#def-argument",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Argument.",
  "body": " Argument  argument   The general form of an argument is:              and are the assumptions and is the conclusion. The symbol is read \"therefore.\"   "
},
{
  "id": "def-valid",
  "level": "2",
  "url": "sec-3-1-arguments.html#def-valid",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Valid.",
  "body": " Valid  valid  argument valid   We will say an argument is valid whenever is a tautology.   "
},
{
  "id": "def-invalid",
  "level": "2",
  "url": "sec-3-1-arguments.html#def-invalid",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Invalid.",
  "body": " Invalid   We will say an argument is invalid whenever is a contradiction.   "
},
{
  "id": "subsec-3-1-1-arguments-9",
  "level": "2",
  "url": "sec-3-1-arguments.html#subsec-3-1-1-arguments-9",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": " valid  argument valid  argument invalid  argument  Here are some examples of valid arguments:    All parabolas are functions of degree 2    All functions of degree 2 are quadratic    All parabolas are quadratic      An apple is purple    An apple is a fruit    An apple is purple      All spiders have 8 legs    A poodle is a spider    A poodle has 8 legs    Here is an example of an invalid argument:    All chickens are animals that eat corn    All chickens are animals that have wings    All animals that eat corn have wings    "
},
{
  "id": "sec-3-2-prop-forms",
  "level": "1",
  "url": "sec-3-2-prop-forms.html",
  "type": "Section",
  "number": "2.2",
  "title": "Arguments with Propositional Forms",
  "body": " Arguments with Propositional Forms  In this section we will \"pull open the hood\" a bit, and explore the inner workings of the arguments with general propositional forms.  We begin with perhaps the most famous arguments. These are surely not the only tools we will use, but definitely some of the more important ones.   Modus Ponens  modus ponens  argument modus ponens   Modus Ponens is a specific type of argument with two premises: , and , and concludes . That is             An example of this is \"If it is raining then the ground is wet. It is raining. Therefore the ground is wet.\"    Modus Tollens  modus tollens  argument modus tollens   Modus Tollens is simply the application of the contrapositive, specifically: , and , and conludes . That is             A similar example of this is \"If it is raining then the ground is wet. The ground is not wet. Therefore it is not raining.\"   Even though these happen to be the most famous they are far from the only. Here is a not so complete list:   argument modus ponens  argument modus tollens  argument addition  argument simplification  argument Hypothetical Syllogism  argument simplification  argument Hypothetical Syllogism  argument Disjunctive Syllogism  modus ponens  modus tollens  addition  simplification  Hypothetical Syllogism  Disjunctive Syllogism    Argument:  Name:              Addition                    Simplification                       Conjunction                       Modus Ponens                       Modus Tollens                       Hypothetical Syllogism                       Disjunctive Syllogism     Now let's see some examples of these in play.  Now that we have our arguments written using propositional forms we can verify that each of these arguments are valid using a truth table, that is, seeing they are all tautologies, or that they are always true.  We will do Hypothetical Syllogism and leave the rest as an exercise to the reader.   hypothetical syllogism truth table  argument hypothetical syllogism             T  T  T  T  T  T  T    T  T  F  T  F  F  T    T  F  T  F  T  T  T    T  F  F  F  T  F  T    F  T  T  T  T  T  T    F  T  F  T  F  T  T    F  F  T  T  T  T  T    F  F  F  T  T  T  T       argument  For this example, let's set a few propositions:       Next, consider the list of premises.                        When can then make the following arguments:   To start we will only consider the first premise.            Since we have assumed that it is not sunny and colder than yesterday we can conclude it is not sunny outside, using a conjunction.    Now let's use the conclusion from (A), with the next premise.               That is, if we assume that it is not sunny and that we will go hiking only if it is sunny, then we can conclude that we do not go hiking, using Modus Tollens.    Now using the conclusion from (B) and our next premises we see               Since we have assumed that we are not hiking and that if we don't hike then we will go on a bike ride we can thus conclude that we will go on a bike ride by Modus Ponens.    Now using the conclusion of (C) and our next premise.               Hence, since we assumed that we are going on a bike ride and if we go on a bike ride we will be back home by dark we can conclude that we will be back by dark, again by Modus Ponens.     We have just done our first proof, and shown if all the statements are assumed then we can conclude that we will be home before dark!   "
},
{
  "id": "sec-3-2-prop-forms-4-4",
  "level": "2",
  "url": "sec-3-2-prop-forms.html#sec-3-2-prop-forms-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Modus Ponens "
},
{
  "id": "sec-3-2-prop-forms-5-4",
  "level": "2",
  "url": "sec-3-2-prop-forms.html#sec-3-2-prop-forms-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Modus Tollens "
},
{
  "id": "argument-types",
  "level": "2",
  "url": "sec-3-2-prop-forms.html#argument-types",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " argument modus ponens  argument modus tollens  argument addition  argument simplification  argument Hypothetical Syllogism  argument simplification  argument Hypothetical Syllogism  argument Disjunctive Syllogism  modus ponens  modus tollens  addition  simplification  Hypothetical Syllogism  Disjunctive Syllogism    Argument:  Name:              Addition                    Simplification                       Conjunction                       Modus Ponens                       Modus Tollens                       Hypothetical Syllogism                       Disjunctive Syllogism    "
},
{
  "id": "sec-3-2-prop-forms-11",
  "level": "2",
  "url": "sec-3-2-prop-forms.html#sec-3-2-prop-forms-11",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " hypothetical syllogism truth table  argument hypothetical syllogism             T  T  T  T  T  T  T    T  T  F  T  F  F  T    T  F  T  F  T  T  T    T  F  F  F  T  F  T    F  T  T  T  T  T  T    F  T  F  T  F  T  T    F  F  T  T  T  T  T    F  F  F  T  T  T  T    "
},
{
  "id": "sec-3-2-prop-forms-13",
  "level": "2",
  "url": "sec-3-2-prop-forms.html#sec-3-2-prop-forms-13",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": " argument  For this example, let's set a few propositions:       Next, consider the list of premises.                        When can then make the following arguments:   To start we will only consider the first premise.            Since we have assumed that it is not sunny and colder than yesterday we can conclude it is not sunny outside, using a conjunction.    Now let's use the conclusion from (A), with the next premise.               That is, if we assume that it is not sunny and that we will go hiking only if it is sunny, then we can conclude that we do not go hiking, using Modus Tollens.    Now using the conclusion from (B) and our next premises we see               Since we have assumed that we are not hiking and that if we don't hike then we will go on a bike ride we can thus conclude that we will go on a bike ride by Modus Ponens.    Now using the conclusion of (C) and our next premise.               Hence, since we assumed that we are going on a bike ride and if we go on a bike ride we will be back home by dark we can conclude that we will be back by dark, again by Modus Ponens.     We have just done our first proof, and shown if all the statements are assumed then we can conclude that we will be home before dark!  "
},
{
  "id": "sec-3-3-fallacy",
  "level": "1",
  "url": "sec-3-3-fallacy.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Bad and the Ugly",
  "body": " The Bad and the Ugly  There are many ways to make a valid argument, and many ways to make an invalid argument. As a student of proofs it is inevitable that you will make all of the mistakes, and also find new and amazing ways of making invalid arguments. But, don't fret, that is the beautiful learning journey you are on!  A very common mistake that students will make when arguing is what is known as circular reasoning .   Catch 22  fallacy Catch 22  fallacy circular reasoning  fallacy begging the the question  Catch 22  circular reasoning  begging the the question   Circular reasoning or begging the question or catch 22 happens when we assume the statement we are trying to conclude.    The term Catch 22 was coined by the character Doc Daneeka, an army psychiatrist, in the novel Catch 22 , to describe a governmental loophole that prevented pilots from requesting a mental evaluation to avoid dangerous missions.   This fallacy comes from the very valid argument:            It's just this argument doesn't get you very far.  Consider the next example of circular reasoning.   Say I was trying to conclude that a number is even. Circular reasoning would be: \"Assume that is even, thus is even.\"   Another misstep that students are bound to take is almost a misapplication of the contrapositive, or thinking the implication is stronger than it is.   Denying the Antecedent  denying the antecedent  fallacy denying the antecedent   Denying the antecedent is the invalid argument                Recall that the contraposition is but not .   Consider the statement: \"If it is sunny then we will go on a bike ride.\" We still might go on a bike ride if it's not sunny, I was just saying if it's sunny we will definitely go!   Another mistake in a similar fashion is again mistaking the power of the implication.   Affirming the Conclusion  affirming the conclusion  fallacy affirming the conclusion   Affirming the conclusion is the invalid argument                Recall that is NOT the same as .   Consider the statement: \"If it is sunny then we will go on a bike ride.\" Just because we go on a bike ride doesn't some how make it sunny, again, I was just saying if it's sunny we will definitely go!   "
},
{
  "id": "sec-3-3-fallacy-3",
  "level": "2",
  "url": "sec-3-3-fallacy.html#sec-3-3-fallacy-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circular reasoning "
},
{
  "id": "sec-3-3-fallacy-4-8",
  "level": "2",
  "url": "sec-3-3-fallacy.html#sec-3-3-fallacy-4-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Circular reasoning begging the question catch 22 "
},
{
  "id": "sec-3-3-fallacy-10",
  "level": "2",
  "url": "sec-3-3-fallacy.html#sec-3-3-fallacy-10",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": " Say I was trying to conclude that a number is even. Circular reasoning would be: \"Assume that is even, thus is even.\"  "
},
{
  "id": "sec-3-3-fallacy-12-4",
  "level": "2",
  "url": "sec-3-3-fallacy.html#sec-3-3-fallacy-12-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Denying the antecedent "
},
{
  "id": "sec-3-3-fallacy-14",
  "level": "2",
  "url": "sec-3-3-fallacy.html#sec-3-3-fallacy-14",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": " Consider the statement: \"If it is sunny then we will go on a bike ride.\" We still might go on a bike ride if it's not sunny, I was just saying if it's sunny we will definitely go!  "
},
{
  "id": "sec-3-3-fallacy-16-4",
  "level": "2",
  "url": "sec-3-3-fallacy.html#sec-3-3-fallacy-16-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Affirming the conclusion "
},
{
  "id": "sec-3-3-fallacy-18",
  "level": "2",
  "url": "sec-3-3-fallacy.html#sec-3-3-fallacy-18",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": " Consider the statement: \"If it is sunny then we will go on a bike ride.\" Just because we go on a bike ride doesn't some how make it sunny, again, I was just saying if it's sunny we will definitely go!  "
},
{
  "id": "sec-3-4-arguments-with-quant",
  "level": "1",
  "url": "sec-3-4-arguments-with-quant.html",
  "type": "Section",
  "number": "2.4",
  "title": "Arguments with Quantifiers",
  "body": " Arguments with Quantifiers  We have seen in that quantified statements can lead to interesting arguments. For example    All are     All are        For example \"All longshoremen are in a union\" and \"All unions have dues\" thus we can conclude that \"All longshoremen pay dues.\"  Next, we have a far from complete list:   argument Universal Instantiation  argument Universal Generalization  argument Existential Instantiation  argument Existential Generalization   Argument:  Name:                  Universal Instantiation                  Universal Generalization                  Existential Instantiation                  Existential Generalization    These will be instrumental to our proofs involving quantifiers shortly! And since we will attempt to put them in more plain language...    The How-To's with Assuming quantifiers:     Assuming  Can do  Name     It always works so use it for one that you already have  Universal Instantiation     Can produce an element it works for and then you can use it  Existential Instantiation     The How-To's with Concluding quantifiers:     Want to Conclude  Must do  Name     choose an arbitrary one and then show it works for that one  Universal Generalization     GIVE an element and then show it works for that one  Existential Generalization     "
},
{
  "id": "how-to-quantifiers",
  "level": "2",
  "url": "sec-3-4-arguments-with-quant.html#how-to-quantifiers",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": "  The How-To's with Assuming quantifiers:     Assuming  Can do  Name     It always works so use it for one that you already have  Universal Instantiation     Can produce an element it works for and then you can use it  Existential Instantiation     The How-To's with Concluding quantifiers:     Want to Conclude  Must do  Name     choose an arbitrary one and then show it works for that one  Universal Generalization     GIVE an element and then show it works for that one  Existential Generalization    "
},
{
  "id": "sec-3-5-ch-03-exercises",
  "level": "1",
  "url": "sec-3-5-ch-03-exercises.html",
  "type": "Section",
  "number": "2.5",
  "title": "Exercises",
  "body": " Exercises    Assume that the truth value assignments for each statement are correct.  All math students are smart. (True)  All smart people are goofy. (True)  All smart people are math students. (False)  All math students are silly. (True)  Given these assigned truth values, determine the validity and soundness of each of the following arguments:      All math students are smart.    All smart people are silly.    All math students are silly.        All math students are silly.    All smart people are silly.    All math students are smart.        All smart people are math students.    All math students are silly.    All smart people are silly.        All smart people are silly.    All math students are silly.    All math students are silly.        Using truth tables show that the remaining arguments are valid in     Use the following as premises    Consider the following propositions.                               Next, we will make the following assumptions:    I'll go shopping if it is Sunday.    If I go to Micro Center then I will not go to the mall.    I am not going to the mall.    I buy a gaming computer whenever I go to Micro Center.    Using the arguments (and naming when you use them) in conclude .    "
},
{
  "id": "sec-4-1-where-we-start",
  "level": "1",
  "url": "sec-4-1-where-we-start.html",
  "type": "Section",
  "number": "3.1",
  "title": "Where We Start",
  "body": " Where We Start   The biggest pain and question of all beginning proofs student is: To help answer that, we will begin every chapter with either a quick note or a detailed list.     What We Can Assume  As this is the first chapter of actual proving we will begin with a detailed list!   Things you can assume without mentioning:     That adding\/subtraction\/multiplication of integers works like you think. For example    (Notice I did not say division! DO NOT use division in this chapter!)     Basic college algebra like:     Basic ordering properties of the integers such as:      Things you can assume but MUST mention:     closure of addition  Closure of addition in the Integers:  If and then   \"when you add two integers you get an integer...\"    Closure of subtraction in the Integers:  If and then   \"when you subtract two integers you get an integer...\"    closure of multiplication  Closure of multiplication in the Integers:  If and then   \"when you multiply two integers you get an integer...\"    Any Theorem\/Lemma\/Corollary given in this chapter, unless otherwise stated.    division algorithm   The Division Algorithm    , with , such that where . The is called the quotient and the is called the remainder .  (once we have enough tools we will prove this but for now we will assume it)    For anything else... just don't assume it! If you can't do a proof without making the assumption you want just write that in your proof! We can work on it from there!    Our Terms  Now, in order to start proving things we need the objects we are going to prove them about. In addition, when we begin our journey in proving, I'd like to limit the moving pieces to those few assumptions just listed, and most importantly these following definitions.  I begin by being this limiting to make sure our playground is small enough that no one hurts themselves by falling off monkey bars that are too high, but also large enough that we can actually get some real proving in. We'll start with a few common definitions, namely, odd, even, and divides.    Even  even   is even iff such that       Odd  odd   is odd iff such that       Divides  divides   and , we say  divides  iff such that   The notation for divides is     It is important to become so familiar with these that you could say them in your sleep.    Definitions are ASSUMPTIONS\/PREMISES , so when using arguments from the previous chapter use them as such.    "
},
{
  "id": "sec-4-1-1-what-we-assume-6-5-2",
  "level": "2",
  "url": "sec-4-1-where-we-start.html#sec-4-1-1-what-we-assume-6-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Division Algorithm "
},
{
  "id": "sec-4-1-1-what-we-assume-6-5-3",
  "level": "2",
  "url": "sec-4-1-where-we-start.html#sec-4-1-1-what-we-assume-6-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotient remainder "
},
{
  "id": "subsec-4-1-2-terms-4",
  "level": "2",
  "url": "sec-4-1-where-we-start.html#subsec-4-1-2-terms-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even "
},
{
  "id": "subsec-4-1-2-terms-5",
  "level": "2",
  "url": "sec-4-1-where-we-start.html#subsec-4-1-2-terms-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "odd "
},
{
  "id": "subsec-4-1-2-terms-6",
  "level": "2",
  "url": "sec-4-1-where-we-start.html#subsec-4-1-2-terms-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "divides "
},
{
  "id": "subsec-4-1-2-terms-8",
  "level": "2",
  "url": "sec-4-1-where-we-start.html#subsec-4-1-2-terms-8",
  "type": "Note",
  "number": "3.1.4",
  "title": "",
  "body": "  Definitions are ASSUMPTIONS\/PREMISES , so when using arguments from the previous chapter use them as such.  "
},
{
  "id": "sec-4-2-direct-proof",
  "level": "1",
  "url": "sec-4-2-direct-proof.html",
  "type": "Section",
  "number": "3.2",
  "title": "Direct Proof",
  "body": " Direct Proof   Our first method before proving is known as direct proof, it is the student's go-to throughout their career.  Most often we will be proving statements that look like:   So, before we dive into it, I'd like to give the song that we will sing whenever we start proving.    What's the P? (The \"if\" part)  What's the Q? (The \"then\" part)  What're the definitions?  Now, what to do? (Which proving method - until we learn more this will always be direct proof)      What is a Direct Proof?  Now without further ado - the direct proof.   Direct Proof of  direct proof steps  Assume      Therefore   Thus    Here is where the title of the text becomes clear:   -- Assume    -- ...   -- Therefore     Does it Work?  We have an entire chapter about arguments, so does this direct proof work?  Is the direct proof a valid argument?   direct proof valid              To see this the \"long way,\" lets build a truth table:            T  T  T  T  T    T  F  F  F  T    F  T  F  T  T    F  F  F  T  T     And we see that is a tautology! I.e. the direct proof is a valid argument!   Yes, your eyes do not deceive you, I did just prove that the direct proof is a proof.    "
},
{
  "id": "subsec-4-2-2-does-it-work-8",
  "level": "2",
  "url": "sec-4-2-direct-proof.html#subsec-4-2-2-does-it-work-8",
  "type": "Note",
  "number": "3.2.1",
  "title": "",
  "body": " Yes, your eyes do not deceive you, I did just prove that the direct proof is a proof.  "
},
{
  "id": "sec-4-3-first-examples",
  "level": "1",
  "url": "sec-4-3-first-examples.html",
  "type": "Section",
  "number": "3.3",
  "title": "Our First Proof",
  "body": " Our First Proof   Now that we have our first weapon in hand (the direct proof) let's start to slay our first dragon.    Prove: For all integers , whenever is odd then is even.  Before we begin any proof we sing our song (play-along):  \"What's the ?\"   is odd   \"What's the ?\"   is even   \"What're the definitions?\"   Odd ( ) and even ( )!   \"Now, what to do?\"   A direct proof! (it is the only method we know so far)      One purpose of our fun song is for us to to split what we want to prove into the and the .  Once we have it split like that we see something left over... this is the . This quantifier is quite often forgotten\/assumed when it is not written, but assumed nonetheless. Therefore, we call it the hidden quantifier . Either way the statement we are trying to prove is now broken up as follows:   To prove our statement with this , according to Universal Generalization from we need to show it works with an arbitrary integer.  To indicate this in our proof we may begin with either of the sentences:  \"Let be an integer.\"  or  \"Choose an arbitrary integer \"   Now, we can take care of the from the direct proof:  Assume the \" \"  \" .\"      To proceed with our proof we don't have much except the definitions. (It can be helpful, especially in these early stages of proof writing, to write the relevant definitions to the side in your scratch work - this is why it's part of the song!)  From the definition of odd ( ) we can make the conclusion that:  must look like: for some integer .  Invoking this definition in this manner is an application of Existential Instantiation from    To continue muddling along we can use some college algebra, as is allowed by and calculate:   The on the left of this equation is the end conclusion we're aiming for! ( \"What's the \" from the song)  The stuff on the right is what we manipulate to make it \"look like,\" or \"fit,\" the definition of even. We will attempt to make this more clear in the next subsection.   I choose these as the first types of proofs to show\/have students do first, because the is basically the same for all of them: \"invoke a definition then calculate.\" It gives the students something to hold on to as they are still trying to digest the previous chapters...      From the , we have:   To be able to make our conclusion we must use definition of even ( ), which uses an existential quantifier, so we must ( ) be able to produce\/point at an integer, so that is this integer times 2.  We have exactly that, because ( ) is an integer!  To write this in our proof we can say:  \"Since is an integer (this is where\/how we \"assume but mention\" the closure of addition in the integers ), by definition of even, is even.\"  Finally we should end every proof with a wrap-up sentence. This sentence is to summarize the proof, most importantly laying out your proving method, in this example a direct proof.  For this proof our wrap-up could look like:  \"Since we assumed that an arbitrary integer was odd and showed that is even, we can conclude that for all integers , whenever is odd then is even, by direct proof.\"  At last we indicate that our proofs are over with a:    When a proof is finished, customarily, we either write \"QED\" or at the bottom. This comes from the Latin \"quod erat demonstrandum,\" which means \"that which was to be demonstrated.\"    To wrap-up everything in a pretty bow, let's see the whole proof in one spot.    Prove: For all integers , whenever is odd then is even.   Let be an integer. Assume is odd. Thus, by the definition of odd, we can find an integer so that .  Calculate:   Since is an integer, by definition of even, is even.  Since we assumed that an arbitrary integer was odd and showed that is even, we can conclude that for all integers , whenever is odd then is even, by direct proof.     "
},
{
  "id": "sec-4-3-2-muddle-11",
  "level": "2",
  "url": "sec-4-3-first-examples.html#sec-4-3-2-muddle-11",
  "type": "Remark",
  "number": "3.3.1",
  "title": "",
  "body": " I choose these as the first types of proofs to show\/have students do first, because the is basically the same for all of them: \"invoke a definition then calculate.\" It gives the students something to hold on to as they are still trying to digest the previous chapters...  "
},
{
  "id": "sec-4-3-3-end-14",
  "level": "2",
  "url": "sec-4-3-first-examples.html#sec-4-3-3-end-14",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Prove: For all integers , whenever is odd then is even.   Let be an integer. Assume is odd. Thus, by the definition of odd, we can find an integer so that .  Calculate:   Since is an integer, by definition of even, is even.  Since we assumed that an arbitrary integer was odd and showed that is even, we can conclude that for all integers , whenever is odd then is even, by direct proof.   "
},
{
  "id": "sec-4-4-more-dir-examples",
  "level": "1",
  "url": "sec-4-4-more-dir-examples.html",
  "type": "Section",
  "number": "3.4",
  "title": "More Direct Proof Examples",
  "body": " More Direct Proof Examples   We will give each of these examples a subsection, then further subdivide the sections for their in-depth explanations.     Direct Proof Example 2   Prove: For all integers and , if and are both odd then is even.   Before we begin any proof we sing our song (play-along):  \"What's the ?\"   and are both odd   \"What's the ?\"   is even   \"What're the definitions?\"   Odd ( ) and even ( )!   \"Now, what to do?\"   A direct proof! (it is the only method we know so far)    The Breakdown:         Just as before we begin by \"shoveling off\" our ( ) by saying something along the lines of:  \"Choose arbitrary integers and .\"   Now, we take care of the of our direct proof...   Assume the    So in our example we would write:  \"Assume both and are odd.\"     Again, as will be quite often even after this class, we do not have much but the definitions ( ), so we will apply these definitions (making note they involve quantifiers ).  To apply the definition of odd ( ) to our integer we use the exists from the proof to produce a new integer which will need a name, lets name it . This can be found so that .  Some questions that often arise here are: \"but the proof says ?\" Yet, in fear of sounding like a broken record we are using\/applying the definition of odd, and when using the (by ) we can find some integer (in this example) to do the job. The in the definition is just a stand-in for some integer .  So for our proof we could write:  \"By the definition of odd we can find an integer so that .\"  Next, we do the exact same procedure with the , but because is a new number and it is a brand new application of the definition of odd we can produce a a new integer ( ), so this time lets name it .  That is, in our proof we could write:  \"Again, by the definition of odd, we can find an integer such that .\"  Having successfully applied our definitions we now have something we can calculate with, so lets try to add what is in our , namely    Now, we can (hopefully) see our definition of even at the last equality, signalling that we are ready for our .     From the , we have:   To be able to make our conclusion we must, again, use the definition of even ( ), which uses an existential quantifier. So we must ( ) be able to produce\/point at an integer, so that is this integer times 2.  We have exactly that, because ( ) is an integer!  To write this in our proof we can say:  \"Since is an integer, by definition of even, is even.\"  Finally, we should end every proof with a wrap-up sentence. This sentence is to summarize the proof, most importantly laying out your proving method, in this example a direct proof.  For this proof our wrap-up could look like:  \"Since we assumed that an arbitrary two integers and were odd and showed that is even, we can conclude that for all integers and , whenever and are odd then is even, by direct proof.\"  Now let's see everything written together in a single spot.   Prove: For all integers and , if and are both odd then is even  Choose arbitrary integers and . Assume both and are odd. By the definition of odd we can find an integer so that . Again, by the definition of odd, we can find an integer such that .  Now calculate:   Since is an integer, by definition of even, is even.  Since we assumed that an arbitrary two integers and were odd and showed that is even, we can conclude that for all integers and , whenever and are odd then is even, by direct proof.      Direct Proof Example 3   The last two examples had even in the and even in the . In fear of students thinking this is some sort of immutable law\/pattern lets change that pattern this time.   Prove: For all integers and if and are both odd then is odd.   Before we begin any proof we sing our song (play-along):  \"What's the ?\"   and are both odd   \"What's the ?\"   is odd   \"What're the definitions?\"   Odd ( )!   \"Now, what to do?\"   A direct proof! (it is the only method we know so far)    The Breakdown:         We begin by taking care of our leading quantifier, , trying our best to never forget . To do this we could use a variety of english statements to do this, for example:   \"Select two random integers and \"    \"Choose two arbitrary integers and \"    \"Let and be integers\"     Next, we do the of a direct proof, that is, . From our song we already know this, and that is:  \"Assume and are both odd\"     Now, as we see in this first class of proofs so often, the only tools we really have at our disposal are the definitions from . In this proof we have to apply a definition twice from our previous line\/assumption namely:     is odd     is odd    Something that bears repeating over and over and over and over again, is to always remember . Right now we need to remember this because the definition of odd ( ) invokes an existential quantifier. So to apply the definition of odd for we can use language like:  \"We can find an so that .\"  To use the definition of odd for our we can use language like:  \"We can also find a so that .\"  Now that we have used our definitions we can move to our usual where we use some good ol' college algebra . In a more general look at proofs as a whole, you should keep in mind what we are trying to conclude, i.e. the , namely that . So we should calculate .  Calculate:      From the we now have: Now, using the definition of odd ( ) and of course we can conclude from the that is odd, as is an integer and thus is an integer, and hence we have that is an integer times 2 then plus one.  Now let's see everything written together in a single spot, with a proper wrap-up.    Prove: For all integers and if and are both odd then is odd.  Select two random integers and . Assume that is even and is odd. By definition of even we can find an integer so that . Also, by the definition of odd we can find an integer so that . Now we calculate:   Now since is an integer, we see that is odd.  To summarize, since we chose arbitrary integers and which we assumed were even and odd, respectively, by direct proof we proved that for all integers and , if is even and is odd, then is odd.       Direct Proof Example 4   Now let's see an example that is not even nor odd.  Prove:  if and then   Before we begin any proof we sing our song (play-along):  \"What's the ?\"   and   \"What's the ?\"     \"What're the definitions?\"   divides ( )   \"Now, what to do?\"   A direct proof! (it is the only method we know so far)    The Breakdown:         This proof is the same as we have been doing at the beginning, as it starts with our . As usual we take care of that using:  \"Let and be integers.\"  As we are still doing a direct proof, our first step involving this is , and for this example it is:  \"Assume that both and .\"     In this example we go to our definitions again (being careful for the quantifier ), specifically for we use the definition of divides ( ) as follows:  \"By definition of divides we can find an so that .\"  For we apply the definition of divides ( ) as:  \"By definition of divides we can find a so that .\"  Something I have seen students do here is write \"exists an integer .\" You are using the existential quantifier to produce a specific integer ( ), by saying exists you are just telling me that you could theoretically find one, not telling that you are producing one to use.  So now that we have something we can use, like usual we can calculate:      From the we have and then we can reference a couple of our assumptions from , and say:  \"Since is an integer a is an integer by the definition of divides 5 divides .\"  Now let's see everything written together in a single spot, with an appropriate wrap-up.   Prove:  if and then  Let and be integers. Assume that 5 divides both and . Next, we calculate:   Since is an integer it follows that is an integer, thus by the definition of divides, 5 divides .  To summarize, since we chose arbitrary integers and and assume that 5 divides both of them, and have shown that , by direct proof we have shown that for any integers and , if and then .       Direct Proof Example 5   Our last detailed example of a direct proof is a classic inequality. Inequalities will play a large role in your future analysis class.  Prove: For all positive real numbers and , if then .   Before we begin any proof we sing our song (play-along):  \"What's the ?\"     \"What's the ?\"     \"What're the definitions?\"   is positive mean   \"Now, what to do?\"   A direct proof! (it is the only method we know so far)    The Breakdown:         This beginning is the same as the others. We take care of the by:  \"Let and be positive real numbers.\"  For our approach of a direct proof we need to start by , that is:  \"Assume that \"     Now, as is in most inequality proofs first we need to work backwards. That is notice: by our allowed assumptions of basic college algebra . But we have that since both , and , again with our assumptions of college algebra . That is we can, lets say, add to the left side of and add 0 to the right side. Also, since subtracting from both sides of our assumption results in .     To write our proof in a logical format we will have to go the opposite direction, as otherwise we will have said our conclusion before we concluded it, essentially falling for circular reasoning, that is:  Subtracting from both sides of our assumption we see that , and by adding to the left and 0 to the right of we get that . Finally, since we can multiply both sides of by and arrive at:   Now let's see everything written together in a single spot.   Prove: For all positive real numbers and , if then .  Let and be positive real numbers. Assume that .  Since subtracting from both sides of our assumption we see that , and by adding to the left and 0 to the right of we get that . Finally, since we can multiply both side of by and arrive at:   Since we assumed and are positive real numbers and , then we showed that , by direct proof we can conclude, that for all positive real numbers and if then .      "
},
{
  "id": "sec-4-4-1-dir-example-two-end-11",
  "level": "2",
  "url": "sec-4-4-more-dir-examples.html#sec-4-4-1-dir-example-two-end-11",
  "type": "Example",
  "number": "3.4.1",
  "title": "",
  "body": " Prove: For all integers and , if and are both odd then is even  Choose arbitrary integers and . Assume both and are odd. By the definition of odd we can find an integer so that . Again, by the definition of odd, we can find an integer such that .  Now calculate:   Since is an integer, by definition of even, is even.  Since we assumed that an arbitrary two integers and were odd and showed that is even, we can conclude that for all integers and , whenever and are odd then is even, by direct proof.  "
},
{
  "id": "sec-4-4-2-dir-example-three-end-4",
  "level": "2",
  "url": "sec-4-4-more-dir-examples.html#sec-4-4-2-dir-example-three-end-4",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": "  Prove: For all integers and if and are both odd then is odd.  Select two random integers and . Assume that is even and is odd. By definition of even we can find an integer so that . Also, by the definition of odd we can find an integer so that . Now we calculate:   Now since is an integer, we see that is odd.  To summarize, since we chose arbitrary integers and which we assumed were even and odd, respectively, by direct proof we proved that for all integers and , if is even and is odd, then is odd.   "
},
{
  "id": "sec-4-4-3-dir-example-four-end-5",
  "level": "2",
  "url": "sec-4-4-more-dir-examples.html#sec-4-4-3-dir-example-four-end-5",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": " Prove:  if and then  Let and be integers. Assume that 5 divides both and . Next, we calculate:   Since is an integer it follows that is an integer, thus by the definition of divides, 5 divides .  To summarize, since we chose arbitrary integers and and assume that 5 divides both of them, and have shown that , by direct proof we have shown that for any integers and , if and then .   "
},
{
  "id": "sec-4-4-4-dir-example-five-end-5",
  "level": "2",
  "url": "sec-4-4-more-dir-examples.html#sec-4-4-4-dir-example-five-end-5",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": " Prove: For all positive real numbers and , if then .  Let and be positive real numbers. Assume that .  Since subtracting from both sides of our assumption we see that , and by adding to the left and 0 to the right of we get that . Finally, since we can multiply both side of by and arrive at:   Since we assumed and are positive real numbers and , then we showed that , by direct proof we can conclude, that for all positive real numbers and if then .   "
},
{
  "id": "subsec-3-5-proofs-of-or",
  "level": "1",
  "url": "subsec-3-5-proofs-of-or.html",
  "type": "Section",
  "number": "3.5",
  "title": "Proofs with Conjunctions and Disjunctions",
  "body": " Proofs with Conjunctions and Disjunctions  So far we have been proving the prototypical as it is perhaps one of the most common propositional forms used in mathematics, and otherwise. Yet, in all of our examples thus far both and have been atomic propositions. In this section we will be substituting the antecedent and consequent with compound propositions.   Assuming an Or  disjunction proofs with assuming or  or proofs with assuming or  For propositions , , and , to prove a statement in the form of   First we:   Prove:    then we:   Prove:     To verify that this argument is valid, we will use a truth table to show: is a tautology. To do so we will show a stronger result using the tricks of .   Now, let's see an example of this in play.    Prove: for any two integers and , if is even or is even then is even.   Let and be integers.  First assume that is even. By definition of even ( ) we can find an integer so that . Calculate: since is an integer by the definition of even, is even.  Next, we instead assume is even. By definition of even we can find an integer so that . Calculate: since is an integer by the definition of even, is even.  Now since we have shown that for that both is even implies is even and is even implies is even, we have shown that .     Another interesting scenario is when we are trying to conclude a disjunction.   Concluding an Or  disjunction concluding or  or concluding or  For propositions , , and , to prove a statement in the form of   We instead   Prove:     That this argument is valid can be seen by showing that To do that we will again use the tricks of .     Now, let's see an example.    Prove: For all integers and if is even then is odd or is even   Let and be arbitrary integers. Assume that is even and that is not odd. By the definition of even ( ) we can find an integer so that . By the division algorithm ( ) we can find integers and such that such that . Yet since we assumed is not odd , and since is an integer and and the only integers which satisfy this inequality are 0 and 1, which only leaves thus . Now calculate: Since is an integer by the definition of even is even.  Since we have assumed for two arbitrary integers and that is even and is not odd, and we have concluded that is even, we can conclude that for all integers and , if is even then is odd or is even.     The last propositional form we consider in this section is the following:   Concluding an And  conjunction concluding an and  and concluding an and  For propositions , , and , one way to prove a statment in the form of   First we:   Prove:    then we:   Prove:     To see that this is a valid way of proving, we once again show an even stronger result using the methods of .       Prove: For all integers and , if and then and    Let and be arbitrary integers.  Assume that , also assume that . By definition of divides ( ) we can produce an integer such that , and hence, by adding 2 to both sides of this equation we get . As well by the definition of divides we can come forth with another integer with the property that , this time adding 1 to both sides of the equation we see that .  Now, we will prove: if and then , by calculating: and since is an integer by the definition of divides .  Next, we will prove: if and then , instead by calculating: and since is an integer by the definition of divides .  Now that we have assumed that and are arbitrary integers and assumed that and then we showed that both and that we can conclude that for all integers and , if and then and .     "
},
{
  "id": "subsec-3-5-proofs-of-or-7",
  "level": "2",
  "url": "subsec-3-5-proofs-of-or.html#subsec-3-5-proofs-of-or-7",
  "type": "Example",
  "number": "3.5.1",
  "title": "",
  "body": "  Prove: for any two integers and , if is even or is even then is even.   Let and be integers.  First assume that is even. By definition of even ( ) we can find an integer so that . Calculate: since is an integer by the definition of even, is even.  Next, we instead assume is even. By definition of even we can find an integer so that . Calculate: since is an integer by the definition of even, is even.  Now since we have shown that for that both is even implies is even and is even implies is even, we have shown that .    "
},
{
  "id": "subsec-3-5-proofs-of-or-13",
  "level": "2",
  "url": "subsec-3-5-proofs-of-or.html#subsec-3-5-proofs-of-or-13",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": "  Prove: For all integers and if is even then is odd or is even   Let and be arbitrary integers. Assume that is even and that is not odd. By the definition of even ( ) we can find an integer so that . By the division algorithm ( ) we can find integers and such that such that . Yet since we assumed is not odd , and since is an integer and and the only integers which satisfy this inequality are 0 and 1, which only leaves thus . Now calculate: Since is an integer by the definition of even is even.  Since we have assumed for two arbitrary integers and that is even and is not odd, and we have concluded that is even, we can conclude that for all integers and , if is even then is odd or is even.    "
},
{
  "id": "subsec-3-5-proofs-of-or-18",
  "level": "2",
  "url": "subsec-3-5-proofs-of-or.html#subsec-3-5-proofs-of-or-18",
  "type": "Example",
  "number": "3.5.3",
  "title": "",
  "body": "  Prove: For all integers and , if and then and    Let and be arbitrary integers.  Assume that , also assume that . By definition of divides ( ) we can produce an integer such that , and hence, by adding 2 to both sides of this equation we get . As well by the definition of divides we can come forth with another integer with the property that , this time adding 1 to both sides of the equation we see that .  Now, we will prove: if and then , by calculating: and since is an integer by the definition of divides .  Next, we will prove: if and then , instead by calculating: and since is an integer by the definition of divides .  Now that we have assumed that and are arbitrary integers and assumed that and then we showed that both and that we can conclude that for all integers and , if and then and .    "
},
{
  "id": "sec-3-6-more-examp",
  "level": "1",
  "url": "sec-3-6-more-examp.html",
  "type": "Section",
  "number": "3.6",
  "title": "More Examples",
  "body": " More Examples   To end this chapter we give some more examples without all of the commentary of our song nor the , , and .   Prove: For all integers , , and if divides and divides then divides  Find some integers , , and . Assume divides and divides . Thus by definition of divides, we can find an integer such that . Also by definition of divides, we can find an integer such that  Calculate:   Since is an integer, by definition of divides, divides . Thus by direct proof, according to the definition of divides, if if divides and divides then divides .    Prove: For all integers and , if and are even, is even.  Let and be integers. Assume and are even. Thus, by definition of even, we can find an integer so that , and we can find an integer so that .  Calculate:   Since is an integer, by definition of even, is even.    Prove: an odd integer plus 2 is odd.  Let be an integer. Assume is odd. Hence, by the definition of odd, we can find an integer such that  Calculate:   Thus, since is an integer, by definition of odd, is odd.    Prove: if 5 divides and 5 divides then 5 divides  Let and be integers. Assume 5 divides and 5 divides . Hence, by the definition of divides, we can find an integer so that and we can find an integer so that  Calculate:   Since is an integer, by definition of divides, 5 divides .  Thus, by direct proof, if 5 divides and 5 divides , then 5 divides .    Prove: If 5 divides and 5 divides then 5 divides .  Let and be integers. Assume divides and 5 divides . By definition of divides, we can find an integer such that By definition of divides, we can find an integer such that .  Calculate:   Since is an integer, by definition of divides, 5 divides  Thus, by direct proof, if 5 divides and 5 divides then 5 divides .    Prove: For all integers , , and if divides and divides then divides  Let , , and be integers. Assume divides and divides . By the definition of divides, we can find an integer so that and an integer so that .  calculate   Since is an integer, by definition of divides, divides . Hence by direct proof, if divides and divides then divides .   "
},
{
  "id": "sec-3-6-more-examp-4",
  "level": "2",
  "url": "sec-3-6-more-examp.html#sec-3-6-more-examp-4",
  "type": "Example",
  "number": "3.6.1",
  "title": "",
  "body": " Prove: For all integers , , and if divides and divides then divides  Find some integers , , and . Assume divides and divides . Thus by definition of divides, we can find an integer such that . Also by definition of divides, we can find an integer such that  Calculate:   Since is an integer, by definition of divides, divides . Thus by direct proof, according to the definition of divides, if if divides and divides then divides .  "
},
{
  "id": "sec-3-6-more-examp-5",
  "level": "2",
  "url": "sec-3-6-more-examp.html#sec-3-6-more-examp-5",
  "type": "Example",
  "number": "3.6.2",
  "title": "",
  "body": " Prove: For all integers and , if and are even, is even.  Let and be integers. Assume and are even. Thus, by definition of even, we can find an integer so that , and we can find an integer so that .  Calculate:   Since is an integer, by definition of even, is even.  "
},
{
  "id": "sec-3-6-more-examp-6",
  "level": "2",
  "url": "sec-3-6-more-examp.html#sec-3-6-more-examp-6",
  "type": "Example",
  "number": "3.6.3",
  "title": "",
  "body": " Prove: an odd integer plus 2 is odd.  Let be an integer. Assume is odd. Hence, by the definition of odd, we can find an integer such that  Calculate:   Thus, since is an integer, by definition of odd, is odd.  "
},
{
  "id": "sec-3-6-more-examp-7",
  "level": "2",
  "url": "sec-3-6-more-examp.html#sec-3-6-more-examp-7",
  "type": "Example",
  "number": "3.6.4",
  "title": "",
  "body": " Prove: if 5 divides and 5 divides then 5 divides  Let and be integers. Assume 5 divides and 5 divides . Hence, by the definition of divides, we can find an integer so that and we can find an integer so that  Calculate:   Since is an integer, by definition of divides, 5 divides .  Thus, by direct proof, if 5 divides and 5 divides , then 5 divides .  "
},
{
  "id": "sec-3-6-more-examp-8",
  "level": "2",
  "url": "sec-3-6-more-examp.html#sec-3-6-more-examp-8",
  "type": "Example",
  "number": "3.6.5",
  "title": "",
  "body": " Prove: If 5 divides and 5 divides then 5 divides .  Let and be integers. Assume divides and 5 divides . By definition of divides, we can find an integer such that By definition of divides, we can find an integer such that .  Calculate:   Since is an integer, by definition of divides, 5 divides  Thus, by direct proof, if 5 divides and 5 divides then 5 divides .  "
},
{
  "id": "sec-3-6-more-examp-9",
  "level": "2",
  "url": "sec-3-6-more-examp.html#sec-3-6-more-examp-9",
  "type": "Example",
  "number": "3.6.6",
  "title": "",
  "body": " Prove: For all integers , , and if divides and divides then divides  Let , , and be integers. Assume divides and divides . By the definition of divides, we can find an integer so that and an integer so that .  calculate   Since is an integer, by definition of divides, divides . Hence by direct proof, if divides and divides then divides .  "
},
{
  "id": "sec-3-8-exercises",
  "level": "1",
  "url": "sec-3-8-exercises.html",
  "type": "Section",
  "number": "3.7",
  "title": "Exercises",
  "body": " Exercises   prove the following.   if is even, then is even  if and are odd, then is odd  if is even, and and are odd, then is odd   if and are even then is divisible by 4.    if and are odd then is even.    if and are even then is even.    if is odd then is odd    if then     if and then     if is odd then is even   If and are even, then  If and then     , prove the following with techniques from     If and then and .    If then 7 does not divide or .    If is even or then .   is odd  is odd     Suppose that you would use a direct proof if you were to prove the following statements. For each only write \" \" and \" \"    For every real valued function , if is differentiable then is continuous.    For all slompins, , if is an insteredment then is flooxin.    If is an annsubmir and is a curric-fac then is a divisper.    For every two integers and , if is threeven and is thud, then is thodd.      "
},
{
  "id": "sec-4-1-what-we-assume-ch-04",
  "level": "1",
  "url": "sec-4-1-what-we-assume-ch-04.html",
  "type": "Section",
  "number": "4.1",
  "title": "Our Assumptions",
  "body": " Our Assumptions  In this chapter you can assume anything you had in . We also include a few more definitions for this chapter.     Common Divisor  common divisor    , all non-zero, we call a common divisor of and iff divides and divides .       Greatest Common Divisor  greatest common divisor    , all non-zero, we call the greatest common divisor of and , denoted iff    is a common divisor of and     every common divisor of of and has the property . (every other divisor is smaller)          Rational  rational number            1-d Integer Cone  1-d integer cone   For any integers , , ..., for some natural number we say an integer is in the 1-d integer cone formed by  , , ..., if and only if there exists integers , , ..., so that      "
},
{
  "id": "sec-4-1-what-we-assume-ch-04-4",
  "level": "2",
  "url": "sec-4-1-what-we-assume-ch-04.html#sec-4-1-what-we-assume-ch-04-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "common divisor "
},
{
  "id": "sec-4-1-what-we-assume-ch-04-5",
  "level": "2",
  "url": "sec-4-1-what-we-assume-ch-04.html#sec-4-1-what-we-assume-ch-04-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "greatest common divisor "
},
{
  "id": "defn-rational",
  "level": "2",
  "url": "sec-4-1-what-we-assume-ch-04.html#defn-rational",
  "type": "Definition",
  "number": "4.1.3",
  "title": "Rational.",
  "body": " Rational  rational number       "
},
{
  "id": "sec-4-1-what-we-assume-ch-04-7",
  "level": "2",
  "url": "sec-4-1-what-we-assume-ch-04.html#sec-4-1-what-we-assume-ch-04-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1-d integer cone formed by "
},
{
  "id": "sec-4-2-contrapositive",
  "level": "1",
  "url": "sec-4-2-contrapositive.html",
  "type": "Section",
  "number": "4.2",
  "title": "Contrapositive",
  "body": " Contrapositive   This first example of an indirect proof is quite close to the direct proof. It takes some of our ingenuity from and puts it to work.    What is a Proof by Contraposition?  A proof by contraposition uses (of course) the contraposition from    so that we can prove by instead proving . To prove this equivalent statement we will use direct proof. We summarize this in the following.   Proof by Contrapositive of  contrapositive proofs involving  proof by contrapositive  Assume      Therefore   Thus    Again, the title of the text becomes clear:   -- Assume    -- ...   -- Therefore     First Example of Contrapositive   For our first example, just as in , we will give as many gory details as we can think of to help the eager student of proofs.  Prove:  if is odd, then is odd.  Before we begin any proof we sing our song (play-along):  \"What's the ?\"   is odd  But... for this question we need to really know the :   is not odd   \"What's the ?\"   is odd  But... again... for this question we need to really know the :   is not odd   \"What're the definitions?\"   Odd and even! (found in )   \"Now, what to do?\"   Proof by contraposition - because we are trying to learn it   The Breakdown of the original:      The Breakdown of the contrapositive:        When first getting used to the contrapositive students have at times made the mistake of negating the which in this case would be . Be careful as the statement actually has the form  where         Just like before, \"shovel off\" the  using the guidance of by choosing an arbitrary element, with language like:     Let be an integer    Choose an arbitrary integer     Pick an integer     Take any integer of your choice    Let be a freely chosen integer    Assume is an integer, chosen arbitrarily    Designate an integer of arbitrary selection    Grab yerself any ol' integer, and let it be called !    Hark! Select an integer, and let it bear the name , chosen as thou wilt    Pick an integer, any integer, and call it . Doesn't matter which—it could be lurking anywhere, but is the one we'll follow    Aye, take , an integer, any integer, an of no particular choosing but of the choosing all the same—floating through the mind like a thought barely caught, yet caught still: it is.     Now we take care of the of our proof using this new method of proof by contraposition, by assuming .  Assume is not odd.  Now, many of you may be reading this last line, yelling, with your fist in the air saying, \"who says not odd? Just say even!\" Yet, we must of course consult our allowed assumptions section ( ) and the assumption that \"not odd\" is equivalent to \"even\" is not one of those!     The pain point of even vs odd is not lost to me, and it will be helpful to be able to write proofs without having to prove that not odd is the same as even every single time. This want to not prove something over and over again, or to separate a smaller proof from a different result comes up a lot, so when we want to do this we create a Lemma.   The word Lemma comes from the Ancient Greek λῆμμα, (perfect passive εἴλημμαι) something received or taken. Thus, something taken for granted in an argument.     Let be an integer, then is either even or odd.     By the division algorithm ( ) we can find integers and such that such that . Yet since is an integer and and the only integers which satisfy this inequality are 0 and 1, we are left only with (even) or (odd).    With our assumption that is not odd and this Lemma in hand we could use Disjunctive Syllogism ( ) in our proof to write:  Since we assumed that is not odd by we can conclude that is even.  Now we finally have in our proof that is even so we can go back to what we have become accustomed to: using the definitions. Specifically in this example we could write something like:  Thus, by definition of even we can find an integer such that  Then we could continue following our nose to do the common muddle so far in this text, and that is to calculate .  Calculate:      From the we have that from the definition of even ( ) we can now conclude:  Since is an integer, according to the definition of even, is even.  Now this is not exactly what we want to conclude. We want to conclude that: so again using Disjunctive Syllogism ( ) and our newest lemma we could write:  Because we have concluded that is even by we can now conclude that is not odd.  Finally, we can write our wrap up sentence!  Hence, by proof by contraposition if is odd then m is odd.  Now let's see everything written together in a single spot.   Prove: For any integer , if is odd, then is odd.  Let be an integer. Assume is not odd. Hence, by we can conclude that is even.  By definition of even we can find an integer such that   Calculate:   Since is an integer, according to the definition of even, is even. Because we have concluded that is even by we can now conclude that is not odd.  Hence, by proof by contraposition if is odd then m is odd.     "
},
{
  "id": "sec-4-2-2-first-contrapositive-2-18-1",
  "level": "2",
  "url": "sec-4-2-contrapositive.html#sec-4-2-2-first-contrapositive-2-18-1",
  "type": "Note",
  "number": "4.2.1",
  "title": "",
  "body": " When first getting used to the contrapositive students have at times made the mistake of negating the which in this case would be . Be careful as the statement actually has the form  where   "
},
{
  "id": "lem-odd-not-even",
  "level": "2",
  "url": "sec-4-2-contrapositive.html#lem-odd-not-even",
  "type": "Lemma",
  "number": "4.2.2",
  "title": "",
  "body": "  Let be an integer, then is either even or odd.   "
},
{
  "id": "sec-3-5-2-example-muddle-5",
  "level": "2",
  "url": "sec-4-2-contrapositive.html#sec-3-5-2-example-muddle-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " By the division algorithm ( ) we can find integers and such that such that . Yet since is an integer and and the only integers which satisfy this inequality are 0 and 1, we are left only with (even) or (odd).   "
},
{
  "id": "sec-3-5-2-example-end-9",
  "level": "2",
  "url": "sec-4-2-contrapositive.html#sec-3-5-2-example-end-9",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": " Prove: For any integer , if is odd, then is odd.  Let be an integer. Assume is not odd. Hence, by we can conclude that is even.  By definition of even we can find an integer such that   Calculate:   Since is an integer, according to the definition of even, is even. Because we have concluded that is even by we can now conclude that is not odd.  Hence, by proof by contraposition if is odd then m is odd.  "
},
{
  "id": "sec-4-3-contradiction",
  "level": "1",
  "url": "sec-4-3-contradiction.html",
  "type": "Section",
  "number": "4.3",
  "title": "Contradiction",
  "body": " Contradiction   Our next method for proving is known as proof by contradiction. It is an extremely powerful example of an indirect proof. It plays off the concept of the excluded middle. In more plain language, a statement is either true or false and nothing between.   The excluded middle is also known as the law \/ principle of the excluded third, in Latin, principium tertii exclusi. Another Latin designation for this law is tertium non datur or \"no third [possibility] is given\".     What is a contradiction?  Proof by contradiction is the most different than the direct proof yet. The first big difference is that before now we have always considered the case where we were proving , yet this time we will be only considering proving any proposition . This does not mean that we will not use it to prove propositions in the form of an implication (because we definitely will), it is just that we set up the proof not separating the implication as we have done before.   Proof by Contradiction of  contradiction  proof by contradiction  Assume      Therefore      Therefore   Hence which is a contradiction.  Thus   On first look it might also seem to not follow our title, but of course:   -- Assume    -- conclude ... conclude    -- Therefore is a contradiction  This proving method may also not seem to fit immediately into our argument section ( ). To see how it fits in first notice that before the conclusion this method is simply the direct proof of the statement Yet, this is equivalent to . To see that consider the following truth table.          T  T  F  T    T  F  F  T    F  T  F  F    F  F  F  F      Finally, before we move on, when we want to use contradiction to prove a statement in the form of we will need to assume that . So it may be helpful to review how to negate such a statement, using our techniques from  and hence we have the equivalence:     First Example of Proof by Contradiction   For our first example of contradiction we will stick with our safety blanket of the integers.  Prove: For all integers and if is odd then is odd.  Before we begin any proof we sing our song (play-along):  \"What's the ?\"   is odd   \"What's the ?\"   is odd   \"What're the definitions?\"   even ( ) and odd ( )   \"Now, what to do?\"   Proof by contradiction - so we can try and learn it!   The Breakdown:        To begin our proof we first take care of the . As usual we will do this by choosing arbitrary integers, that is, we will use language like:  Let and be arbitrary integers.   Again, be careful, even though we will be negating we DO NOT negate the quantifier!   Now, to begin our proof by contradiction we need to   But is not in our song! Yes that's true, but is just \"what we want to prove\". In this example we want to prove if is odd then is odd. So we will need to assume or using our analysis above we will:  Assume that is odd yet is not odd.  Now this is false, and it is our job to confirm that, yet a reader with no warning might be very alarmed that you began your proof with such a blatantly false assumption. To quell our reader's troubled stomach, and let them know what we're doing, we can start the sentence with:  For the sake of contradiction...  Or for those more inclined to the classics we can simply at the beginning of our proof write:  [RAA]  which stands for reductio ad absurdum , that is, \"reduction to absurdity.\"     Next, almost right away we can react to our knee jerk and play off our assumption with:  Since we assumed that is not odd, by we have that is even.  Now, again, as if we were to knee jerk we could then apply our definitions of even ( ) and odd ( ) with language similar to:  By the definition of odd we can obtain an integer so that . As well, by the definition odd ( ) we are able to select an integer so that .  Yet, this is where our quick reactions or just using the definitions we have sung in our song ends. In other examples we would look to the quintessential as our target to set up a calculation. Unfortunately in a proof by contradiction we are in search of a brand new proposition (which we have lovingly named ). Furthermore, we also need to find its negation ( ). This search is not always easy, and where to begin isn't always clear.  For this example we wandered in the woods and simply added the two things from our assumption together...  Calculate: And similar to many proofs that came before this, we can conclude that since is an integer, by the definition of odd, we have that   But, there is of course another way of calculating this sum with no consideration of these newly found integers, and , that is... yet, since is an integer, by the definition of even we have that is even, or in light of we have: Therefore we have stumbled upon our contradiction, our  and not .     Now that we have found our contradiction of we should make sure to point out this contradiction just in case our reader missed this, letting everyone know we have come to of our proof by contradiction. We, of course, can do this by following numerous linguistic paths but we must choose one so:  Yet, is an integer and cannot be both even and odd, which is a contradiction. Thus using proof by contradiction we have successfully shown that for all integers and if is odd then is odd.  As usual we collect it in our tldr boxes...   Prove: For all integers and if is odd then is odd.  Let and be arbitrary integers. For the sake of contradiction assume that is odd yet is not odd. Since we assumed that is not odd, by we have that is even. By the definition of odd we can obtain an integer so that . As well, by the definition odd ( ) we are able to select an integer so that . Calculate: since is an integer by the definition of odd, we have that is odd. Yet, we can also calculate as: yet, since is an integer by the definition of even we have that is even, or in light of we have that is even.  Yet, is an integer and cannot be both even and odd, which is a contradiction. Thus using proof by contradiction we have successfully shown that for all integers and if is odd then is odd.       is Irrational   This next proof is a proof that I believe every single student in mathematics should know and love. It is this proof that I learned very early on in my math career that shaped how I understood mathematics. I would meet people and tell them \"I'm a math major,\" and they would say things like, \"Ugh, I always hated math,\" and I would tell them \"No, math is not what you think math is.\" Math is about truths. For example, take an extremely simple shape - the right triangle - literally just put two sticks at a sharp angle and connect the two edges with another stick. This third stick has a length that is not a fraction of either of the other sides. Pythagoras went to his grave believing that it must be, but we can show beyond a shadow of a doubt it is not.  Before we jump into that proof, it will be helpful to have a lemma that we can call on, in all honesty to shorten our work load (what lemma's are best for).    If 2 divides then 2 divides .     Let be an integer. We will prove this using contraposition - that is, we will assume 2 does not divide , thus by  is odd. Hence we can find an integer such that .  Calculate:   Since is an integer, by definition of odd, is odd. Hence by  is not even. Thus by proof by contraposition, if 2 divides then 2 divides .   Prove:  is irrational.  Before we begin any proof we sing our song, although it is a little different when we're using contradiction (play-along):  \"What's the ?\"   is irrational   \"What's the ?\"   There is no this time!   \"What're the definitions?\"   Rational, relatively prime, and divides (create reference here!)   \"Now, what to do?\"   Proof by contradiction - because I said so!      For a proof by contradiction we need to begin by assuming what we need to prove is false, and to remind you, this could be jarring to a reader so let them know what you are doing, for example we could write:  For the sake of contradiction assume that is rational. That is, it is not true that is irrational     Now, we continue with our song by applying the definitions we can, per the definition of rational ( ), we can find two integers and so that and Next, we will do exactly what any good calculus student would do and that is \"get-rid-of\" that square root.  Calculate:   But, is an integer, thus by the definition of even, is even. Hence, by we can conclude that is even  Thus, by the definition of even, we can find an integer so that .  Now, we can play our common replacement game.  Calculate again:   But is an integer, so, by definition of even, is even, and again by , is even.  Since and , 2 is a common divisor, and thus by definition of greatest common divisor ( ) we have that , yet this means that     So now that we have found our contradiction we are done, but just in case the reader missed this contradiction as you unwrapped it, let's put it all in one place.  Thus we have shown  and  which is a contradiction. Thus by proof by contradiction, we have shown that is irrational.  Now let's see everything written together in a single spot.   Prove:  is irrational.  For the sake of contradiction assume that is rational. That is, it is not true that is irrational. By the definition of rational ( ), we can find two integers and so that and  Calculate:   But, is an integer, thus by the definition of even, is even. Hence, by we can conclude that is even  Thus, by the definition of even we can find an integer so that .  Calculate again:   But is an integer, so, by definition of even, is even, and again by , is even.  Since and , 2 is a common divisor, and thus by definition of greatest common divisor ( ) we have that , yet this means that  Thus we have shown  and  which is a contradiction. Thus by proof by contradiction, we have shown that is irrational.     "
},
{
  "id": "sec-4-3-1-what-is-a-contradiction-8-4",
  "level": "2",
  "url": "sec-4-3-contradiction.html#sec-4-3-1-what-is-a-contradiction-8-4",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": "         T  T  F  T    T  F  F  T    F  T  F  F    F  F  F  F    "
},
{
  "id": "sec-4-3-2-example-begin-4",
  "level": "2",
  "url": "sec-4-3-contradiction.html#sec-4-3-2-example-begin-4",
  "type": "Note",
  "number": "4.3.2",
  "title": "",
  "body": " Again, be careful, even though we will be negating we DO NOT negate the quantifier!  "
},
{
  "id": "sec-4-3-2-example-end-5",
  "level": "2",
  "url": "sec-4-3-contradiction.html#sec-4-3-2-example-end-5",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": " Prove: For all integers and if is odd then is odd.  Let and be arbitrary integers. For the sake of contradiction assume that is odd yet is not odd. Since we assumed that is not odd, by we have that is even. By the definition of odd we can obtain an integer so that . As well, by the definition odd ( ) we are able to select an integer so that . Calculate: since is an integer by the definition of odd, we have that is odd. Yet, we can also calculate as: yet, since is an integer by the definition of even we have that is even, or in light of we have that is even.  Yet, is an integer and cannot be both even and odd, which is a contradiction. Thus using proof by contradiction we have successfully shown that for all integers and if is odd then is odd.   "
},
{
  "id": "lem-m-squared",
  "level": "2",
  "url": "sec-4-3-contradiction.html#lem-m-squared",
  "type": "Lemma",
  "number": "4.3.4",
  "title": "",
  "body": "  If 2 divides then 2 divides .   "
},
{
  "id": "sec-4-3-3-root-two-2-4",
  "level": "2",
  "url": "sec-4-3-contradiction.html#sec-4-3-3-root-two-2-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be an integer. We will prove this using contraposition - that is, we will assume 2 does not divide , thus by  is odd. Hence we can find an integer such that .  Calculate:   Since is an integer, by definition of odd, is odd. Hence by  is not even. Thus by proof by contraposition, if 2 divides then 2 divides .  "
},
{
  "id": "sec-3-7-2-example-end-5",
  "level": "2",
  "url": "sec-4-3-contradiction.html#sec-3-7-2-example-end-5",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": " Prove:  is irrational.  For the sake of contradiction assume that is rational. That is, it is not true that is irrational. By the definition of rational ( ), we can find two integers and so that and  Calculate:   But, is an integer, thus by the definition of even, is even. Hence, by we can conclude that is even  Thus, by the definition of even we can find an integer so that .  Calculate again:   But is an integer, so, by definition of even, is even, and again by , is even.  Since and , 2 is a common divisor, and thus by definition of greatest common divisor ( ) we have that , yet this means that  Thus we have shown  and  which is a contradiction. Thus by proof by contradiction, we have shown that is irrational.  "
},
{
  "id": "subsec-3-7-biconditional",
  "level": "1",
  "url": "subsec-3-7-biconditional.html",
  "type": "Section",
  "number": "4.4",
  "title": "Biconditional Proofs",
  "body": " Biconditional Proofs  Proofs of statements with a biconditional are ubiquitous in mathematics. As you have seen, all of our definitions are biconditional statements. We use the biconditional to mean equivalent. In future math classes, these equivalences give tools for proving conditions without working to more intuitive definitions, by instead giving more usable ones.  You can prove biconditionals in many ways; the one we will take time to examine is what I tell my students is the \"safe way.\" It is the two-way proof.   Two-Way proof of  biconditional proof  iff proof  if and only if proof   Prove:     Prove:    Therefore,    That this proof method is valid follows from the fact that the following is an equivalence: to verify this equivalence we have the following truth table.             T  T  T  T  T  T    T  F  F  T  F  F    F  T  T  F  F  F    F  F  T  T  T  T     For our next examples we spare the reader the in-depth treatment as it is simply two direct proofs.   Prove:  is odd if and only if is even.   Let be an integer.  [ ] (if is odd then is even)  Assume is odd. Hence, by definition of odd ( ) we can find an integer so that .  Calculate:   Since is an integer, by definition of even, is even. Hence by direct proof, if is odd then is even.  [ ] (if is even, then is odd)  Assume is even. Hence, by definition of even we can find an integer such that .  Calculate:   Thus, since is an integer, by definition of odd, is odd. Thus by direct proof if is even, then is odd.  Since we showed by direct proof that if is odd then is even and if is even, then is odd, then is odd if and only if  is even.      Prove: For any integer , is odd if and only if is odd.   Let be an arbitrary integer.   (if is odd then is odd)  Assume that is odd. By the definition of odd ( ) we can find an integer so that . Now calculate: since is an integer, is odd.   (if is odd then is odd.)  For the sake of contraposition, assume that is not odd, thus by we have that is even. By the definition of even we can find an integer so that . Now calculate: Since is an integer, we can conclude is even, thus by we have that is not odd. Therefore, by contraposition we have that if is odd then is odd.     There is another method for proving an if and only if statement. It is not recommended for the student who is just starting their proving journey, but for completeness I would be remiss if I did not include it.   One-Way Proof of   iff    iff   ...   iff    iff    The reason I warn beginning students away from this is that too often students get it in their head that the faster way is better - in calculus they see the limit definition for the derivative, then learn the power rule and say to themselves, \"Well I'm never going back to the limit.\"  Again, for the sake of completion we provide an example. The diligent hard working student will do their best to see why a backwards proof would be boring .    Prove: For any two integers and ; if and only if    Let and be arbitrary integers, not that     if and only if     if and only if     if and only if     Therefore if and only if     "
},
{
  "id": "subsec-3-7-biconditional-6",
  "level": "2",
  "url": "subsec-3-7-biconditional.html#subsec-3-7-biconditional-6",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": "           T  T  T  T  T  T    T  F  F  T  F  F    F  T  T  F  F  F    F  F  T  T  T  T    "
},
{
  "id": "subsec-3-7-biconditional-8",
  "level": "2",
  "url": "subsec-3-7-biconditional.html#subsec-3-7-biconditional-8",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": " Prove:  is odd if and only if is even.   Let be an integer.  [ ] (if is odd then is even)  Assume is odd. Hence, by definition of odd ( ) we can find an integer so that .  Calculate:   Since is an integer, by definition of even, is even. Hence by direct proof, if is odd then is even.  [ ] (if is even, then is odd)  Assume is even. Hence, by definition of even we can find an integer such that .  Calculate:   Thus, since is an integer, by definition of odd, is odd. Thus by direct proof if is even, then is odd.  Since we showed by direct proof that if is odd then is even and if is even, then is odd, then is odd if and only if  is even.   "
},
{
  "id": "subsec-3-7-biconditional-9",
  "level": "2",
  "url": "subsec-3-7-biconditional.html#subsec-3-7-biconditional-9",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Prove: For any integer , is odd if and only if is odd.   Let be an arbitrary integer.   (if is odd then is odd)  Assume that is odd. By the definition of odd ( ) we can find an integer so that . Now calculate: since is an integer, is odd.   (if is odd then is odd.)  For the sake of contraposition, assume that is not odd, thus by we have that is even. By the definition of even we can find an integer so that . Now calculate: Since is an integer, we can conclude is even, thus by we have that is not odd. Therefore, by contraposition we have that if is odd then is odd.    "
},
{
  "id": "subsec-3-7-biconditional-14",
  "level": "2",
  "url": "subsec-3-7-biconditional.html#subsec-3-7-biconditional-14",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "  Prove: For any two integers and ; if and only if    Let and be arbitrary integers, not that     if and only if     if and only if     if and only if     Therefore if and only if    "
},
{
  "id": "subsec-4-5-proof-by-cases",
  "level": "1",
  "url": "subsec-4-5-proof-by-cases.html",
  "type": "Section",
  "number": "4.5",
  "title": "Proof by Exhaustion",
  "body": " Proof by Exhaustion   Our next proof method is not really a standalone method; other methods will need to accompany it. We will introduce it using the direct proof as the accompaniment. Proof by cases can also be viewed as a specific example of .     What are Cases?  Unlike the example in where there are an unlimited amount of integers to choose from, sometimes we have a finite and more tenable collection of possibilities than we could actually check or prove in each of these situations.  The following is the basic shape of a proof by cases.   Proof by Cases  proof by cases   Case 1: a proof of the first case   Case 2: a proof of the second case      Case n: a proof of the case   At its most basic, a proof by cases is an instance of \"Assuming an Or\" from where one is tasked to prove . We would split the problem into proving as our first case and then as our second case . For examples of this, the reader is referred to .  Another common place proof by cases comes up is when we are trying to prove propositions in the form of: for some predicate . There are many common places that proof by cases in the previous form come up, for example:    we have either is even or is odd.     either or for some integer      either or      We have already proven that the first point is true in . For the second point, a more general result, we provide the following lemma.    For any two integers and , there exists an such that and      Let and be integers. By the division algorithm from we can find such that and . Hence subtracting both sides by we get . Since is an integer by the definition of divides ( ) we have that .        Exhaustive Examples  We now include some examples, the first one is an example of breaking the proof down into the cases of even and odd.   Prove: for any integer , is even.   Let be an integer. is either even, or odd.  Case 1: Assume is even.  Hence by definition of even, we can find an integer such that .  Calculate:   Thus, since is an integer, by definition of even, is even. Thus by direct proof, if is even then is even.  Case 2: Assume is odd. Thus by definition of odd, we can find an integer such that  Calculate:   Thus since is an integer, according to the definition of even, is even. Thus by direct proof if is odd then is even.  Thus since case 1 and case 2 hold, by proof by cases, and by direct proof, is even.     Prove: for any integer , if is odd, then there exists an integer so that or   Let be an integer. Assume is odd. By definition of odd we can find an integer such that > Case 1: Assume is even. By definition of even we can find an integer such that . Calculate:  Hence case 1 holds by direct proof.  Case 2: Assume is odd. Thus by definition of odd we can find an integer so that  Calculate:   Hence case 2 holds by direct proof.  Thus, since case 1 and case 2 hold, by proof by cases, if is odd, then we can find an integer so that or      Prove: For every integer , if then .   Let be an arbitrary integer. For the sake of contrapositive, assume that 3 does not divide . By since the only numbers greater than zero and strictly less than 3 are 1 and 2 either or    Case 1: Assume .  By definition of divides we can find an integer so that . Hence by adding 1 to both sides of the equation we get . Now calculate: Hence . Since is an integer by definition of divides . Thus by we have that 3 does not divide    Case 2: Assume .  By definition of divides we can find an integer so that . Hence by adding 2 to both sides of the equation we get . Now calculate: Hence . Since is an integer by definition of divides . Thus by we have that 3 does not divide   Therefore by proof by cases, 3 does not divide , and hence by proof by contraposition if then .      "
},
{
  "id": "lem-remainders",
  "level": "2",
  "url": "subsec-4-5-proof-by-cases.html#lem-remainders",
  "type": "Lemma",
  "number": "4.5.1",
  "title": "",
  "body": "  For any two integers and , there exists an such that and    "
},
{
  "id": "subsec-3-5-1-what-are-cases-9",
  "level": "2",
  "url": "subsec-4-5-proof-by-cases.html#subsec-3-5-1-what-are-cases-9",
  "type": "Proof",
  "number": "4.5.1.1",
  "title": "",
  "body": " Let and be integers. By the division algorithm from we can find such that and . Hence subtracting both sides by we get . Since is an integer by the definition of divides ( ) we have that .  "
},
{
  "id": "subsec-3-5-2-cases-examples-3",
  "level": "2",
  "url": "subsec-4-5-proof-by-cases.html#subsec-3-5-2-cases-examples-3",
  "type": "Example",
  "number": "4.5.2",
  "title": "",
  "body": " Prove: for any integer , is even.   Let be an integer. is either even, or odd.  Case 1: Assume is even.  Hence by definition of even, we can find an integer such that .  Calculate:   Thus, since is an integer, by definition of even, is even. Thus by direct proof, if is even then is even.  Case 2: Assume is odd. Thus by definition of odd, we can find an integer such that  Calculate:   Thus since is an integer, according to the definition of even, is even. Thus by direct proof if is odd then is even.  Thus since case 1 and case 2 hold, by proof by cases, and by direct proof, is even.   "
},
{
  "id": "subsec-3-5-2-cases-examples-4",
  "level": "2",
  "url": "subsec-4-5-proof-by-cases.html#subsec-3-5-2-cases-examples-4",
  "type": "Example",
  "number": "4.5.3",
  "title": "",
  "body": " Prove: for any integer , if is odd, then there exists an integer so that or   Let be an integer. Assume is odd. By definition of odd we can find an integer such that > Case 1: Assume is even. By definition of even we can find an integer such that . Calculate:  Hence case 1 holds by direct proof.  Case 2: Assume is odd. Thus by definition of odd we can find an integer so that  Calculate:   Hence case 2 holds by direct proof.  Thus, since case 1 and case 2 hold, by proof by cases, if is odd, then we can find an integer so that or   "
},
{
  "id": "subsec-3-5-2-cases-examples-5",
  "level": "2",
  "url": "subsec-4-5-proof-by-cases.html#subsec-3-5-2-cases-examples-5",
  "type": "Example",
  "number": "4.5.4",
  "title": "",
  "body": "  Prove: For every integer , if then .   Let be an arbitrary integer. For the sake of contrapositive, assume that 3 does not divide . By since the only numbers greater than zero and strictly less than 3 are 1 and 2 either or    Case 1: Assume .  By definition of divides we can find an integer so that . Hence by adding 1 to both sides of the equation we get . Now calculate: Hence . Since is an integer by definition of divides . Thus by we have that 3 does not divide    Case 2: Assume .  By definition of divides we can find an integer so that . Hence by adding 2 to both sides of the equation we get . Now calculate: Hence . Since is an integer by definition of divides . Thus by we have that 3 does not divide   Therefore by proof by cases, 3 does not divide , and hence by proof by contraposition if then .    "
},
{
  "id": "sec-4-6-existential-proofs",
  "level": "1",
  "url": "sec-4-6-existential-proofs.html",
  "type": "Section",
  "number": "4.6",
  "title": "Existential Proofs",
  "body": " Existential Proofs  In this section we will we discuss some proofs surrounding the existential quantifier. We begin by explaining the basics of proving statements that involve an existential.   Proving   Produce an actual candidate   show is true  Therefore     It's the old saying of just \"show me.\" Proving existentials in this manner will come up in your future algebra and analysis courses repeatedly as some of their most important concepts are defined with an exists. The following example is perhaps not the most enlightening but it does serve the purpose of a first example.    Prove: There exists a rational number such that    I now present for your consideration the rational number: One can see that this is indeed a rational number as both 5 and 4 are integers and . Thus, it satisfies the definition of a rational number ( ). To see that this rational number indeed does the job for our statement notice that: therefore there truly does exist a rational number so that     For our next example we will dig a little deeper into the existential proof in more of a mock experience of your future courses. But first, we will need to take advantage of the following lemma, which we present with proof here, even though the proof does not involve an existential.    For all positive integers and if then      Let and be positive integers. For the sake of contradiction assume that and . By the definition of divides ( ) we can find an integer so that . Now since then where 0 is the quotient and is the remainder. This satisfies the division algorithm ( ), yet since both and are positive the also satisfies the condition of quotient. This is a contradiction as the quotient from the division algorithm is unique.      Prove: For any integers and , there exists a smallest positive integer that is in the 1-d integer cone formed by and .   Let and be integers. Next we need to provide an integer which is smallest among all integers in the 1-d integer cone formed by and . We present for your scrutiny the integer Now, we are left with the task to show that is the smallest positive integer in the 1-d integer cone formed by and . To say this another way, we need to prove that the greatest common divisor of and is the smallest positive integer in the 1-d integer cone formed by and .  To prove this, let be the smallest positive integer in the 1-d integer cone formed by and (it will be our goal to show it is our from above). By the definition of the 1-d integer cone ( ) we can find integers and such that To show that this smallest positive integer is the greatest common divisor, by the definition of greatest common divisor ( ) it must be a divisor of both and .  By the division algorithm ( ) we can find positive integers and such that and such that . Yet by substituting in the form of above we see and hence and since and are both integers by the definition of 1-d integer cone, then is in the 1-d integer cone formed by and yet we assumed was the smallest positive one, so because we assumed then hence and since is an integer by the definition of divides .  similarly by the division algorithm ( ) we can find positive integers and such that such that yet by substituting in the form of above we see and hence and since and are both integers by the definition of 1-d integer cone, then is in the 1-d integer cone formed by and yet we assumed was the smallest positive one, so because we assumed then hence and since is an integer by the definition of divides .  Therefore by the definition of common divisor ( ) is a common divisor of and .  By the definition of greatest common divisor ( ) we still need to show that any other divisor is smaller than . To do this let be a common divisor of and . By definition of common divisor both and hence by definition of divides ( ) we can find integers and so that and thus substituting in our above relations we have and since is an integer by the definition of divides . Finally by we have as desired.  Since we have verified both parts in the definition of greatest common divisor we have that      Next, we will discuss unique existence. This quantifier adds a step to our proving method as we are not simply saying there is an element out there we are saying there is only one of those elements. Uniqueness is a common theme in algebra and analysis as well.   Proof of   Prove    Assume you have and so that is true and is true.  Prove    For our first example we will explore a common theme from your future algebra courses.    Prove: There exists a unique integer, , so that for all integers     The integer that we submit for your deliberation is: To see that zero works, to satisfy the existence, notice that when we choose an arbitrary integer that: .  Now to prove the uniqueness, assume that we have two integers and so that for any integer both and . So in particular that is .  Therefore, we have shown that there exists an integer with the desired property and that this integer is unique.     "
},
{
  "id": "sec-4-6-existential-proofs-5",
  "level": "2",
  "url": "sec-4-6-existential-proofs.html#sec-4-6-existential-proofs-5",
  "type": "Example",
  "number": "4.6.1",
  "title": "",
  "body": "  Prove: There exists a rational number such that    I now present for your consideration the rational number: One can see that this is indeed a rational number as both 5 and 4 are integers and . Thus, it satisfies the definition of a rational number ( ). To see that this rational number indeed does the job for our statement notice that: therefore there truly does exist a rational number so that    "
},
{
  "id": "lem-divides-less-than",
  "level": "2",
  "url": "sec-4-6-existential-proofs.html#lem-divides-less-than",
  "type": "Lemma",
  "number": "4.6.2",
  "title": "",
  "body": "  For all positive integers and if then    "
},
{
  "id": "sec-4-6-existential-proofs-8",
  "level": "2",
  "url": "sec-4-6-existential-proofs.html#sec-4-6-existential-proofs-8",
  "type": "Proof",
  "number": "4.6.1",
  "title": "",
  "body": " Let and be positive integers. For the sake of contradiction assume that and . By the definition of divides ( ) we can find an integer so that . Now since then where 0 is the quotient and is the remainder. This satisfies the division algorithm ( ), yet since both and are positive the also satisfies the condition of quotient. This is a contradiction as the quotient from the division algorithm is unique.   "
},
{
  "id": "sec-4-6-existential-proofs-9",
  "level": "2",
  "url": "sec-4-6-existential-proofs.html#sec-4-6-existential-proofs-9",
  "type": "Example",
  "number": "4.6.3",
  "title": "",
  "body": "  Prove: For any integers and , there exists a smallest positive integer that is in the 1-d integer cone formed by and .   Let and be integers. Next we need to provide an integer which is smallest among all integers in the 1-d integer cone formed by and . We present for your scrutiny the integer Now, we are left with the task to show that is the smallest positive integer in the 1-d integer cone formed by and . To say this another way, we need to prove that the greatest common divisor of and is the smallest positive integer in the 1-d integer cone formed by and .  To prove this, let be the smallest positive integer in the 1-d integer cone formed by and (it will be our goal to show it is our from above). By the definition of the 1-d integer cone ( ) we can find integers and such that To show that this smallest positive integer is the greatest common divisor, by the definition of greatest common divisor ( ) it must be a divisor of both and .  By the division algorithm ( ) we can find positive integers and such that and such that . Yet by substituting in the form of above we see and hence and since and are both integers by the definition of 1-d integer cone, then is in the 1-d integer cone formed by and yet we assumed was the smallest positive one, so because we assumed then hence and since is an integer by the definition of divides .  similarly by the division algorithm ( ) we can find positive integers and such that such that yet by substituting in the form of above we see and hence and since and are both integers by the definition of 1-d integer cone, then is in the 1-d integer cone formed by and yet we assumed was the smallest positive one, so because we assumed then hence and since is an integer by the definition of divides .  Therefore by the definition of common divisor ( ) is a common divisor of and .  By the definition of greatest common divisor ( ) we still need to show that any other divisor is smaller than . To do this let be a common divisor of and . By definition of common divisor both and hence by definition of divides ( ) we can find integers and so that and thus substituting in our above relations we have and since is an integer by the definition of divides . Finally by we have as desired.  Since we have verified both parts in the definition of greatest common divisor we have that     "
},
{
  "id": "sec-4-6-existential-proofs-13",
  "level": "2",
  "url": "sec-4-6-existential-proofs.html#sec-4-6-existential-proofs-13",
  "type": "Example",
  "number": "4.6.4",
  "title": "",
  "body": "  Prove: There exists a unique integer, , so that for all integers     The integer that we submit for your deliberation is: To see that zero works, to satisfy the existence, notice that when we choose an arbitrary integer that: .  Now to prove the uniqueness, assume that we have two integers and so that for any integer both and . So in particular that is .  Therefore, we have shown that there exists an integer with the desired property and that this integer is unique.    "
},
{
  "id": "sec-4-7-ch04-exercises",
  "level": "1",
  "url": "sec-4-7-ch04-exercises.html",
  "type": "Section",
  "number": "4.7",
  "title": "Exercises",
  "body": " Exercises    Using contraposition for the following prove for every integer that    if is even then is odd    if is odd then is odd    if is not divisible by 4 then is odd      Using contradiction for the following prove for any integer that    if is odd then both and are odd    if is odd then is even.      Using proof by cases for the following prove for any integer that    If 5 does not divide then 5 does not divide      is even     is odd     is odd      Prove the following biconditional statments for any integers , , , and (you are allowed to divide for this exercise)     is odd if and only if is even     if and only if      and if and only if and       Prove the following statements involving existential    For any integer there exists an unique integer so that     There exists a rational number such that       Prove that is not a rational number.     "
},
{
  "id": "sec-5-1-what-is-a-set",
  "level": "1",
  "url": "sec-5-1-what-is-a-set.html",
  "type": "Section",
  "number": "5.1",
  "title": "What is a Set?",
  "body": " What is a Set?   While set theory has been rigorously defined axiomatically, in this course we choose to only skim the surface using a whole lot of intuition and the propositional logic that we developed in . The main object of study in set theory is the set . Intuitively, a set is a magic bag filled with stuff... or nothing... Georg Cantor, the Russian mathematician credited as the father of set theory, first defined the set as:  \"A set is a gathering together into a whole of definite, distinct objects of our perception or of our thought—which are called elements of the set.\"  We include a much more boring description.   Set  set   A set is a well defined collection of objects.     Element  element  set element  member  set member   The objects in a set are called elements or members .    We will most often denote sets with capital letters like: , , , etc. Furthermore we will denote elements with lowercase letters like , , , etc.   Notation  To indicate that is an element of a set we will write: To indicate that is not an element of a set we will write:    Membership of a set is a proposition , as it is either true or false.  To define a specific set we can simply list all of its elements. To do so, we encompass the elements we wish to include between braces: and and separate the elements with a comma.   Consider the following set    and note the following example of the membership notation.   You can also indicate the negation of membership     A set has no order, and you cannot repeat elements.    Cardinality   For a set the cardinality or order of is the number of elements in the set , denoted as     In this course we will only mention this concept when the sets are finite, when sets are infinite the cardinality of a set furnishes a beautiful theory, one which we will not dive into in this text but that is quite amazing.   Consider the following set   We see that the number of elements in the set is 4. Hence, .   Sets come in many different shapes and flavors, and throughout your mathematical career you will need to become extremely comfortable with sets. Depending on the discipline, you will either love or hate the following set, but you will never deny that it is perhaps one of the most important sets.   Empty Set  emptyset   We will call the set containing no elements the empty set . We denote the empty set as . That is     There are no elements in , therefore . Also, to the the disjoy of all combinatorists, the statement is a contradiction (that is, always false).    Set Builder Notation  set builder notation  Membership is the defining characteristic of a set, thus it is helpful to define a set by conditions for membership. One way to do that we call set-builder notation .   This is our way of defining membership. if and only if is true.   We include some sets defined with set-builder notation.                    In (B), we defined the condition with a quantifier, specifically . This is an extremely common use-case in mathematics. I bring this up here to the student that this is perhaps the most common quantifier to be hidden . That is, we would most likely see it presented as: To defend the mathematician who chooses to present it in this manner, we mostly study objects with a well defined and unique multiplication. That is, there is only one unique integer that satisfies for a given .  Adding to the possible confusion, yet important to understand, for this same set it is true that that is, by defining a set with an existential condition we are actually defining a universal relationship. To top it off, we often do not even mention the universal relationship and hide the existential one, all for the sake of brevity and the word obvious .   "
},
{
  "id": "def-naive-set",
  "level": "2",
  "url": "sec-5-1-what-is-a-set.html#def-naive-set",
  "type": "Definition",
  "number": "5.1.1",
  "title": "Set.",
  "body": " Set  set   A set is a well defined collection of objects.   "
},
{
  "id": "def-element-of-a-set",
  "level": "2",
  "url": "sec-5-1-what-is-a-set.html#def-element-of-a-set",
  "type": "Definition",
  "number": "5.1.2",
  "title": "Element.",
  "body": " Element  element  set element  member  set member   The objects in a set are called elements or members .   "
},
{
  "id": "sec-5-1-what-is-a-set-2-10",
  "level": "2",
  "url": "sec-5-1-what-is-a-set.html#sec-5-1-what-is-a-set-2-10",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": " Consider the following set    and note the following example of the membership notation.   You can also indicate the negation of membership   "
},
{
  "id": "sec-5-1-what-is-a-set-2-11",
  "level": "2",
  "url": "sec-5-1-what-is-a-set.html#sec-5-1-what-is-a-set-2-11",
  "type": "Note",
  "number": "5.1.4",
  "title": "",
  "body": " A set has no order, and you cannot repeat elements.  "
},
{
  "id": "def-cardinality",
  "level": "2",
  "url": "sec-5-1-what-is-a-set.html#def-cardinality",
  "type": "Definition",
  "number": "5.1.5",
  "title": "Cardinality.",
  "body": " Cardinality   For a set the cardinality or order of is the number of elements in the set , denoted as    "
},
{
  "id": "sec-5-1-what-is-a-set-2-14",
  "level": "2",
  "url": "sec-5-1-what-is-a-set.html#sec-5-1-what-is-a-set-2-14",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": " Consider the following set   We see that the number of elements in the set is 4. Hence, .  "
},
{
  "id": "def-empty-set",
  "level": "2",
  "url": "sec-5-1-what-is-a-set.html#def-empty-set",
  "type": "Definition",
  "number": "5.1.7",
  "title": "Empty Set.",
  "body": " Empty Set  emptyset   We will call the set containing no elements the empty set . We denote the empty set as . That is    "
},
{
  "id": "sec-5-1-1-set-builder-3",
  "level": "2",
  "url": "sec-5-1-what-is-a-set.html#sec-5-1-1-set-builder-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set-builder notation "
},
{
  "id": "ex-set-builder",
  "level": "2",
  "url": "sec-5-1-what-is-a-set.html#ex-set-builder",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": " We include some sets defined with set-builder notation.                   "
},
{
  "id": "sec-5-2-comparing-sets",
  "level": "1",
  "url": "sec-5-2-comparing-sets.html",
  "type": "Section",
  "number": "5.2",
  "title": "Comparing and Combining Sets",
  "body": " Comparing and Combining Sets  Now we will begin comparing sets. Our first tool of comparison is the concept of subset.   Subset  subset  set subset   We say that the set is a subset of a set , denoted , if and only if for all ,     To say that more plainly, means contains all the elements of . It is noteworthy that may contain more than just those elements from .   Consider the sets    notice that every element from can also be found in , that is .    Define the sets  Notice that since That is, every element of is also an element of .   When a set has exactly the same elements of a set we say those sets are equal. The following definition makes this more rigorous.   Equal Sets  set equal   We say that a set is equal to a set , denoted , if and only if both and   Or, equivalently, by:     Sets are equal exactly when you would think they are, when they are the same set. Yet, as hopefully you have been piecing together in this journey, to prove things like \"they are the same,\" we need a bit more rigor and propositional guidance to prove truth. Shortly, we will venture into the world of proving with these sets. But before we do, lets take a little time not just to build rigorous definitions, but to build our intuition further.  We now venture into combining sets. That is, making new sets, given one or more sets.   Union  union  set union   We define the union of two sets and , denoted as the set:     As is done for a set, we must define what it takes for membership of this set. For the union, membership is allowed when membership of either or is established. In more common vernacular, this says that the union of two sets is anything from either set.   Consider the following sets    then the union of and is as follows     Define the sets  Thus, the union of these two sets is since any real number between -10 and 10 are either included between 0 and 10 or between -10 and 0.   Another way to combine sets is to consider only the elements which they share. This is our next definition...   Intersection  intersection  set intersection   The intersection of two sets and , denoted , is defined as     Again, as these are sets, we must define what it means to be a member of this set. For the intersection, membership is defined for those elements that have membership in both the sets and . Or in other words, the intersection only has the things that are shared between two sets.   Consider the following sets    Therefore the intersection of these two sets is   Notice that elements in the intersection are exactly those that show up in both and .    Define the sets  Thus, the intersection of these two sets is since those are the only even integers between 0 and 10 (including 10).   The last construction showed where two sets were the same, now we explore where they differ.   Difference  difference  set difference   The difference of a set and a set , denoted , is the set defined as     The difference of and consists of the things that are in , but not in .   Consider the sets    Thus, the set difference of and is   Notice that the difference is made up only of elements that appear in yet do not appear in .    Define the sets  Thus the difference of these two sets is since these are there integers between 0 and 10 that are not even.   So far in this section, we have been somewhat flippant about defining our universe of discourse, but with a well-defined one, we can now examine the set difference involving the universe.   Compliment  compliment  set compliment   The compliment of a set in the universe , is defined as the following set,  or    Perhaps the compliment can most simply be stated as everything that is not in .   For this example, consider the universe of discourse as the integers, , and consider the set of all even numbers. That is, the set Then the compliment of is all the integers that are not even, or in light of we have that    "
},
{
  "id": "defn-subset",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#defn-subset",
  "type": "Definition",
  "number": "5.2.1",
  "title": "Subset.",
  "body": " Subset  subset  set subset   We say that the set is a subset of a set , denoted , if and only if for all ,    "
},
{
  "id": "sec-5-2-comparing-sets-5",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#sec-5-2-comparing-sets-5",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": " Consider the sets    notice that every element from can also be found in , that is .  "
},
{
  "id": "sec-5-2-comparing-sets-6",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#sec-5-2-comparing-sets-6",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": " Define the sets  Notice that since That is, every element of is also an element of .  "
},
{
  "id": "defn-equals",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#defn-equals",
  "type": "Definition",
  "number": "5.2.4",
  "title": "Equal Sets.",
  "body": " Equal Sets  set equal   We say that a set is equal to a set , denoted , if and only if both and   Or, equivalently, by:    "
},
{
  "id": "def-union",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#def-union",
  "type": "Definition",
  "number": "5.2.5",
  "title": "Union.",
  "body": " Union  union  set union   We define the union of two sets and , denoted as the set:    "
},
{
  "id": "sec-5-2-comparing-sets-13",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#sec-5-2-comparing-sets-13",
  "type": "Example",
  "number": "5.2.6",
  "title": "",
  "body": " Consider the following sets    then the union of and is as follows   "
},
{
  "id": "sec-5-2-comparing-sets-14",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#sec-5-2-comparing-sets-14",
  "type": "Example",
  "number": "5.2.7",
  "title": "",
  "body": " Define the sets  Thus, the union of these two sets is since any real number between -10 and 10 are either included between 0 and 10 or between -10 and 0.  "
},
{
  "id": "def-intersection",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#def-intersection",
  "type": "Definition",
  "number": "5.2.8",
  "title": "Intersection.",
  "body": " Intersection  intersection  set intersection   The intersection of two sets and , denoted , is defined as    "
},
{
  "id": "sec-5-2-comparing-sets-18",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#sec-5-2-comparing-sets-18",
  "type": "Example",
  "number": "5.2.9",
  "title": "",
  "body": " Consider the following sets    Therefore the intersection of these two sets is   Notice that elements in the intersection are exactly those that show up in both and .  "
},
{
  "id": "sec-5-2-comparing-sets-19",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#sec-5-2-comparing-sets-19",
  "type": "Example",
  "number": "5.2.10",
  "title": "",
  "body": " Define the sets  Thus, the intersection of these two sets is since those are the only even integers between 0 and 10 (including 10).  "
},
{
  "id": "def-set-difference",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#def-set-difference",
  "type": "Definition",
  "number": "5.2.11",
  "title": "Difference.",
  "body": " Difference  difference  set difference   The difference of a set and a set , denoted , is the set defined as    "
},
{
  "id": "sec-5-2-comparing-sets-23",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#sec-5-2-comparing-sets-23",
  "type": "Example",
  "number": "5.2.12",
  "title": "",
  "body": " Consider the sets    Thus, the set difference of and is   Notice that the difference is made up only of elements that appear in yet do not appear in .  "
},
{
  "id": "sec-5-2-comparing-sets-24",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#sec-5-2-comparing-sets-24",
  "type": "Example",
  "number": "5.2.13",
  "title": "",
  "body": " Define the sets  Thus the difference of these two sets is since these are there integers between 0 and 10 that are not even.  "
},
{
  "id": "def-compliment",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#def-compliment",
  "type": "Definition",
  "number": "5.2.14",
  "title": "Compliment.",
  "body": " Compliment  compliment  set compliment   The compliment of a set in the universe , is defined as the following set,  or   "
},
{
  "id": "sec-5-2-comparing-sets-28",
  "level": "2",
  "url": "sec-5-2-comparing-sets.html#sec-5-2-comparing-sets-28",
  "type": "Example",
  "number": "5.2.15",
  "title": "",
  "body": " For this example, consider the universe of discourse as the integers, , and consider the set of all even numbers. That is, the set Then the compliment of is all the integers that are not even, or in light of we have that   "
},
{
  "id": "sec-5-3-venn-diagrams",
  "level": "1",
  "url": "sec-5-3-venn-diagrams.html",
  "type": "Section",
  "number": "5.3",
  "title": "Venn Diagrams and Logic of Sets",
  "body": " Venn Diagrams and Logic of Sets   Venn diagram  To understand\/describe the relationship between sets we often use a tool known as Venn Diagrams . In simplest terms, a Venn diagram is a drawing representing the sets we are considering where we draw a circle for each set, and imagine the elements are inside the circle. Further, in this section we will use the basic underpinning of propositional logic to pick apart some logical conclusions from set theory.   John Venn was an English mathematician that introduced Eulerian Circles in the 1800's, which now bear his name.      Venn Diagrams  We now provide some basic examples of Venn diagrams.   A Venn diagram for a singular set      A Venn diagram for     When we are indicating a specific portion of the Venn diagram we will use shading, such as the following examples.   A Venn diagram for      A Venn diagram for      A Venn diagram for      A Venn diagram for     In this chapter's exercises ( ) you will be asked to identify different sets in a Venn diagram. To help the student still attempting to grasp set theory we give a few more creative examples next.   The set:    Here consider the set that contains except for the part that is in . this is exactly the part that is not shaded, as it is the compliment.    The set:    This time we consider the place which is neither nor yet is in     The set:    In this example consider the set that avoids where intersects yet does include all of .     The Logic of Sets    To the teacher: Be careful in this section... don't lose them... maybe even skip or just quickly note these? Or perhaps challenge the brave student, the student who has been staring deeply into the ripples of the pond, to venture here...   As we have built set theory directly from propositional logic we can approach some basic properties very similarly to how we did in and . Now that we have the tools to start proving, we begin with the reason that most people hate the empty set.    Let be a set then      To prove this statement, we first fix a universe of discourse and a set . Now we examine the definition of subset; which applied to our scenario would say, for any  Yet, is a contradiction, that is always false, no matter the element, no matter the universe of discourse, as is empty, containing no elements.  So, the proof of this statement falls to the fact that if is a contradiction then for any proposition , the following argument is valid          Of course this means that is a tautology, to see this consider the following truth table.          F  T  T    F  F  T      To reiterate, it is this contradiction of which really is the sticking point for the empty set, and why it is always a fringe case that becomes the dismay of mathematicians the world round. Next, we present a few more subset conditions.    Let , , and be sets, then the following are true   if and , then       (a) is the argument        hence we need to be a tautology, yet        T  T    F  T      (b) This one is           which is just Hypothetical Syllogism from .   Next we give a somewhat analogous treatment to that of , and leave it to the diligent reader to draw the direct comparisons.    Let , , and be sets, then the following are true    (commutativity)  (commutativity)  (distributivity)  (distributivity)  (absorption)  (absorption)      (associativity)  (associativity)  iff     In a similar fashion, the following conditions are the consequences of the arguments in .            These final properties are unique to sets, yet have the same logical progressions as the previous ones.          if and only if  if and only if  If then  If then      We leave this last proposition without proof and caution the eager reader to tread carefully, avoiding getting lost in the reflections of the pond for too long.   "
},
{
  "id": "sec-5-3-venn-diagrams-2-2",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#sec-5-3-venn-diagrams-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Venn Diagrams "
},
{
  "id": "subsec-5-3-1-venn-diagrams-3",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-1-venn-diagrams-3",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": " A Venn diagram for a singular set    "
},
{
  "id": "subsec-5-3-1-venn-diagrams-4",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-1-venn-diagrams-4",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": " A Venn diagram for    "
},
{
  "id": "subsec-5-3-1-venn-diagrams-6",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-1-venn-diagrams-6",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": " A Venn diagram for    "
},
{
  "id": "subsec-5-3-1-venn-diagrams-7",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-1-venn-diagrams-7",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": " A Venn diagram for    "
},
{
  "id": "subsec-5-3-1-venn-diagrams-8",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-1-venn-diagrams-8",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": " A Venn diagram for    "
},
{
  "id": "subsec-5-3-1-venn-diagrams-9",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-1-venn-diagrams-9",
  "type": "Example",
  "number": "5.3.6",
  "title": "",
  "body": " A Venn diagram for    "
},
{
  "id": "subsec-5-3-1-venn-diagrams-11",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-1-venn-diagrams-11",
  "type": "Example",
  "number": "5.3.7",
  "title": "",
  "body": " The set:    Here consider the set that contains except for the part that is in . this is exactly the part that is not shaded, as it is the compliment.  "
},
{
  "id": "subsec-5-3-1-venn-diagrams-12",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-1-venn-diagrams-12",
  "type": "Example",
  "number": "5.3.8",
  "title": "",
  "body": " The set:    This time we consider the place which is neither nor yet is in   "
},
{
  "id": "subsec-5-3-1-venn-diagrams-13",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-1-venn-diagrams-13",
  "type": "Example",
  "number": "5.3.9",
  "title": "",
  "body": " The set:    In this example consider the set that avoids where intersects yet does include all of .  "
},
{
  "id": "prop-empty-unique",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#prop-empty-unique",
  "type": "Proposition",
  "number": "5.3.10",
  "title": "",
  "body": "  Let be a set then    "
},
{
  "id": "subsec-5-3-2-algebra-of-sets-5",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-2-algebra-of-sets-5",
  "type": "Proof",
  "number": "5.3.2.1",
  "title": "",
  "body": " To prove this statement, we first fix a universe of discourse and a set . Now we examine the definition of subset; which applied to our scenario would say, for any  Yet, is a contradiction, that is always false, no matter the element, no matter the universe of discourse, as is empty, containing no elements.  So, the proof of this statement falls to the fact that if is a contradiction then for any proposition , the following argument is valid          Of course this means that is a tautology, to see this consider the following truth table.          F  T  T    F  F  T     "
},
{
  "id": "prop-a-subset-a",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#prop-a-subset-a",
  "type": "Proposition",
  "number": "5.3.12",
  "title": "",
  "body": "  Let , , and be sets, then the following are true   if and , then     "
},
{
  "id": "subsec-5-3-2-algebra-of-sets-8",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#subsec-5-3-2-algebra-of-sets-8",
  "type": "Proof",
  "number": "5.3.2.2",
  "title": "",
  "body": " (a) is the argument        hence we need to be a tautology, yet        T  T    F  T      (b) This one is           which is just Hypothetical Syllogism from .  "
},
{
  "id": "prop-set-laws",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#prop-set-laws",
  "type": "Proposition",
  "number": "5.3.14",
  "title": "",
  "body": "  Let , , and be sets, then the following are true    (commutativity)  (commutativity)  (distributivity)  (distributivity)  (absorption)  (absorption)      (associativity)  (associativity)  iff    "
},
{
  "id": "prop-more-set-laws",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#prop-more-set-laws",
  "type": "Proposition",
  "number": "5.3.15",
  "title": "",
  "body": "         "
},
{
  "id": "prop-even-more-set-laws",
  "level": "2",
  "url": "sec-5-3-venn-diagrams.html#prop-even-more-set-laws",
  "type": "Proposition",
  "number": "5.3.16",
  "title": "",
  "body": "        if and only if  if and only if  If then  If then     "
},
{
  "id": "sec-5-4-first-set-proofs",
  "level": "1",
  "url": "sec-5-4-first-set-proofs.html",
  "type": "Section",
  "number": "5.4",
  "title": "First Proofs with Sets",
  "body": " First Proofs with Sets   In the previous section we looked at many basic properties of sets. Now we will venture into some proofs that are more indicative of your future classes, and return (momentarily) back to the safety of numbers.  We first examine how one would prove a subset to be true.   Proving  Let   ...  Therefore    The keen-eyed student will notice that this is simply the direct proof applied to the definition of subset, specifically: We will see many examples of this proving method throughout the class, yet before we jump in, I'd like to note something for either the instructor or the diligent student who has been paying very close attention to the journey. I used to try and teach this by taking away the numbers, and instead using the , and the in instead of the now off-handed way you see presented here, but I believe the students felt like it was too jarring and then leaned away from subsets and set proofs, which was detrimental to their learning once we got to abstract algebra. So now I introduce these proofs with numbers in hopes that you leave the set theory section with the same love that you left the even and odd proofs.    The First Proof   Define the sets   Prove:    Before we begin any proof we sing our song (play-along):  \"What's the ?\"     \"What's the ?\"     \"What're the definitions?\"   The definition of the sets written directly above silly goose!   \"Now, what to do?\"   A direct proof! (proof of a subset!)       To begin this proof we follow our procedure above, by choosing an arbitrary element of the set , using words in the manner of:     That's all there is to it, we abscond with a random element of , then drudge forward with our journey to show it is a member of .     I chose to begin with this example as is almost identical to most of our other examples. That is, we simply state what it takes for to belong to . From the definition above of the set , we see in the condition part of the set-builder notation it tells us that there must be an integer so that is 6 times this integer (sound familiar?). To invoke this we could write something like:  By the definition of membership of , we can produce some integer so that .     Now, for the end we need to finally get to the finish line, that is, finally conclude that our element is indeed a member of . For this, notice that and since 3 is an integer and is an integer we have that is an integer and hence satisfies the condition to be in .  Next, we present it all in one place.   Define the sets   Prove:    Proof:  Let , by definition of the set we can find an integer so that , yet note since we have . Now, since and are integers we can conclude is an integer. Therefore by the definition of the set we have that         More Examples  This is an important concept of your future mathematics courses so we will now provide a couple more abbreviated examples of subset.   Consider the sets:     Prove:     We begin by selecting a completely arbitrary element of , which we will denote as . Applying the condition of membership to we can find an integer such that . By factoring we see that and since is an integer we see that satisfies the condition to be a member of .  Therefore, we have chosen an arbitrary , and successfully shown that , hence we have shown that .     For our next example we will look at proof involving the intersection ( ).   Consider the sets:      Prove:     We first choose an arbitrary element of in an attempt to show it also belongs to . Name this element .  Using the definition of the set we see that we can fix a specific so that .  Now, to show membership of the intersection, , we need to show that our element is both a member of  and that it is a member of , by the definition of intersection ( ). Thus we break the remainder of the proof into two parts.   [Membership of ]   Notice that we can factor and, as is an integer we see that satisfies the conditions to be a member of .   [Membership of ]   Similarly, notice that we can again factor and, as is an integer we see that satisfies the conditions to be a member of .  Finally, since we have chosen a completely arbitrary element and then have shown that and that we can conclude that , therefore we have shown that .     In our next example will work through a proof that involves a union ( ).   Consider the sets      Prove:     To start the proof we will choose an arbitrary element of . We will name this random member . By the definition of union ( ) we have that  or  , thus we split our proof into two cases.   [Case 1: ]   For this first case, assume that . By the condition defining the set we can find an integer such that . Next, we calculate: Since is an integer we see that satisfies the condition to be a member of . That is .   [Case 2: ]   For this case we will instead assume . This time by the condition defining the set we can locate a special integer so that . Now we can calculate: and since is an integer we see that, as the condition for membership of is satisfied, .  To wrap-up, since we have chosen a random element and have shown that this same element must have the property that , we can conclude that .     Now we will explore the process of showing when sets are equal.   Equals   We say that two sets and are equal , denoted if and only if     Therefore to prove the statement we must have two proofs, one proof for and one proof for .  Our next couple of examples aim to show this.   Consider the set    Prove:     We will again need to break this proof into two parts.   [Want to Show: ]   For the first part, let . Hence by the definition of the set we have that , therefore . (This is of course what many refer to as the easy part )   [Want to Show: ]   In this next part, assume . It is now our objective to show membership in , to do such we will need to produce two integers, the way in which we discovered these integers is irrelevant to the proof, so for the sake of argument, let's just assume angels whispered them to me in my sleep.  Notice that since is an integer and is an integer, then we can calculate: and hence by the condition of set we have that , therefore .  To wrap-up, since we have shown that both and we may conclude that .      "
},
{
  "id": "sec-5-4-4-end-4",
  "level": "2",
  "url": "sec-5-4-first-set-proofs.html#sec-5-4-4-end-4",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": " Define the sets   Prove:    Proof:  Let , by definition of the set we can find an integer so that , yet note since we have . Now, since and are integers we can conclude is an integer. Therefore by the definition of the set we have that    "
},
{
  "id": "subsec-5-4-3-more-subsets-3",
  "level": "2",
  "url": "sec-5-4-first-set-proofs.html#subsec-5-4-3-more-subsets-3",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": " Consider the sets:     Prove:     We begin by selecting a completely arbitrary element of , which we will denote as . Applying the condition of membership to we can find an integer such that . By factoring we see that and since is an integer we see that satisfies the condition to be a member of .  Therefore, we have chosen an arbitrary , and successfully shown that , hence we have shown that .    "
},
{
  "id": "subsec-5-4-3-more-subsets-5",
  "level": "2",
  "url": "sec-5-4-first-set-proofs.html#subsec-5-4-3-more-subsets-5",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": " Consider the sets:      Prove:     We first choose an arbitrary element of in an attempt to show it also belongs to . Name this element .  Using the definition of the set we see that we can fix a specific so that .  Now, to show membership of the intersection, , we need to show that our element is both a member of  and that it is a member of , by the definition of intersection ( ). Thus we break the remainder of the proof into two parts.   [Membership of ]   Notice that we can factor and, as is an integer we see that satisfies the conditions to be a member of .   [Membership of ]   Similarly, notice that we can again factor and, as is an integer we see that satisfies the conditions to be a member of .  Finally, since we have chosen a completely arbitrary element and then have shown that and that we can conclude that , therefore we have shown that .    "
},
{
  "id": "subsec-5-4-3-more-subsets-7",
  "level": "2",
  "url": "sec-5-4-first-set-proofs.html#subsec-5-4-3-more-subsets-7",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": " Consider the sets      Prove:     To start the proof we will choose an arbitrary element of . We will name this random member . By the definition of union ( ) we have that  or  , thus we split our proof into two cases.   [Case 1: ]   For this first case, assume that . By the condition defining the set we can find an integer such that . Next, we calculate: Since is an integer we see that satisfies the condition to be a member of . That is .   [Case 2: ]   For this case we will instead assume . This time by the condition defining the set we can locate a special integer so that . Now we can calculate: and since is an integer we see that, as the condition for membership of is satisfied, .  To wrap-up, since we have chosen a random element and have shown that this same element must have the property that , we can conclude that .    "
},
{
  "id": "defn-set_equal",
  "level": "2",
  "url": "sec-5-4-first-set-proofs.html#defn-set_equal",
  "type": "Definition",
  "number": "5.4.5",
  "title": "Equals.",
  "body": " Equals   We say that two sets and are equal , denoted if and only if    "
},
{
  "id": "subsec-5-4-3-more-subsets-12",
  "level": "2",
  "url": "sec-5-4-first-set-proofs.html#subsec-5-4-3-more-subsets-12",
  "type": "Example",
  "number": "5.4.6",
  "title": "",
  "body": " Consider the set    Prove:     We will again need to break this proof into two parts.   [Want to Show: ]   For the first part, let . Hence by the definition of the set we have that , therefore . (This is of course what many refer to as the easy part )   [Want to Show: ]   In this next part, assume . It is now our objective to show membership in , to do such we will need to produce two integers, the way in which we discovered these integers is irrelevant to the proof, so for the sake of argument, let's just assume angels whispered them to me in my sleep.  Notice that since is an integer and is an integer, then we can calculate: and hence by the condition of set we have that , therefore .  To wrap-up, since we have shown that both and we may conclude that .    "
},
{
  "id": "sec-5-5-power-set",
  "level": "1",
  "url": "sec-5-5-power-set.html",
  "type": "Section",
  "number": "5.5",
  "title": "Power Set",
  "body": " Power Set   The power set includes all the subsets of a given set. To help make this clearer, we'll now work through a couple of examples together.   Power Set  power set  set power set   Let be a set. The power set of is the set whose elements are the subsets of and is denoted      The power set is made up of all the subsets of a given set. Let's explore some examples to help make this clear.   Consider the set:   To build the power set, it is customary to begin with the empty set, . From we know that , so must be a member of the power set. Hence,   Next, we will of course need all of the singletons , that is, all the sets containing a single element from .    Finally, since for any set , as any element of is surely an element of , we have .  Thus the power set is:    Our next example, though a bit more straightforward, uses our familiar numbers with a slightly larger set to help solidify the concept.   Let's look at an example of a power set: the power set of .  Just as in the last example, in every power set we must find the empty set, that is .  Next, we will work through each singleton:     As our set has three elements there are a few subsets which have two elements this time:     Finally, as , we have that .  Thus the power set of is:    The curious counter, will notice by the procedural way in which we construct these power sets that when we start with finite sets, they are indeed easy enough to count.    For a finite set the size of the power set is     We leave the proof of this to a course in counting, or the studious reader may work it out themselves.     First Proof   For our very first proof using the power set, we will now shed the numbers and prove for arbitrary sets and .   Prove:  if and only if   This is a biconditional proof. Since it is like working with two proofs, we will use it as such and prove each statement separately.    Proof of:     Before we begin any proof we sing our song (play-along):  \"What's the ?\"     \"What's the ?\"     \"What're the definitions?\"   The definition of power set ( ) and the definition of subset ( )   \"Now, what to do?\"   A direct proof       To begin, there is nothing fancy - we simply assume the \" .\" That is, we would write something simple like:  Assume   Our goal is to prove that , thus we need to prove a subset. To do this, we must choose an arbitrary element of with language like:  Let   It will be our objective to show that this element also belongs to .     I know, we have no numbers! What are we to do?  Stay calm - we have not completely disregarded the mold. Usually in the muddle we invoke some definitions, so let's do that now, namely the definition of membership to the power set. We do this with language like:  By definition of the power set of , we have that .  As it is our objective to show that this element also belongs to , this means we need to show that is a subset of . To do this, we do so like any other proof of subset (kinda like the one we are in the middle of...) and choose a random element of . We can do this with language like:  Choose an arbitrary .  Where to go from here?? Well, right before this we unraveled the fact that . Hence by definition of subset we have . We could express this in our proof with the following language:  Since and that we have assumed , by the definition of subset we can make the conclusion that .  Hark! Our very first assumption was 'bout how the fair set compares to the set , more specifically that . Hence in a similar fashion we could write the following conclusion:  Since we assumed and since we have discovered that , by definition of subset we can conclude that . Hence, since we chose an arbitrary element and have shown that as well, by definition of subset we can conclude .     Finally, we have just concluded that , which is the defining condition for membership to the power set of , thus we can conclude:  By definition of power set, since , we have that . Therefore, as we chose arbitrarily, by definition of subset we have our desired result that .     Proof of:      Before we begin any proof we sing our song (play-along):  \"What's the ?\"     \"What's the ?\"     \"What're the definitions?\"   The definition of power set ( ) and the definition of subset ( )   \"Now, what to do?\"   direct proof       This time to begin, we must assume this new \" .\" That is, we would write something simple like:  Assume   Our goal is to prove that , thus we need to prove a subset , to do this we must choose an arbitrary element of with language like:  Let      Now, what do we do?!  This time we don't even have any useful definitions to lean on... all we know is that is a set, literally one of the most general objects ever, it can be anything...  As we take a breath or two, we see that all we really have at this time is our assumption about power sets. Luckily we have just completed working our way through our examples of power set and recall that the singletons were one of the first sets we looked at. Hence we have that:  Since , by the definition of subset , thus by the definition of power set we have that . Now, since we have assumed that by the definition of subset we have that .     Given that by the definition of power set we can conclude that , and by the definition of subset, since we have that .  Yet, since we have chosen arbitrarily and have shown that by the definition of subset we can conclude that , as desired.   Now that we have shown that both and that we can conclude that    We now give an abbreviated proof in a single location for the ease of the reader.   Prove:  if and only if  [ ]  Assume Let . Hence by definition of power set,  By (b), since and we can conclude . Thus by definition of power set,  Thus by direct proof, if then  [ ]  Assume that . Let . By definition of power set, . Hence by our assumption, . Hence by our assumption and the definition of power set, . Hence . By definition of subset, since then .  Thus by direct and bi-directional proof, if and only if     The Natural Numbers  This subsection can be safely skipped, but it is a fun construction using only the empty set to build the natural numbers, also why I insist that .  For this construction we begin with the empty set: then we consider the set which has a singular element, the empty set, Now we consider the set which contains these previous two sets, namely: Next lets collect all these sets in a set, that is and continue and continue and continue... the diligent student will complete this exercise...   "
},
{
  "id": "def-Power-Set",
  "level": "2",
  "url": "sec-5-5-power-set.html#def-Power-Set",
  "type": "Definition",
  "number": "5.5.1",
  "title": "Power Set.",
  "body": " Power Set  power set  set power set   Let be a set. The power set of is the set whose elements are the subsets of and is denoted     "
},
{
  "id": "sec-5-5-power-set-2-4",
  "level": "2",
  "url": "sec-5-5-power-set.html#sec-5-5-power-set-2-4",
  "type": "Example",
  "number": "5.5.2",
  "title": "",
  "body": " Consider the set:   To build the power set, it is customary to begin with the empty set, . From we know that , so must be a member of the power set. Hence,   Next, we will of course need all of the singletons , that is, all the sets containing a single element from .    Finally, since for any set , as any element of is surely an element of , we have .  Thus the power set is:   "
},
{
  "id": "sec-5-5-power-set-2-6",
  "level": "2",
  "url": "sec-5-5-power-set.html#sec-5-5-power-set-2-6",
  "type": "Example",
  "number": "5.5.3",
  "title": "",
  "body": " Let's look at an example of a power set: the power set of .  Just as in the last example, in every power set we must find the empty set, that is .  Next, we will work through each singleton:     As our set has three elements there are a few subsets which have two elements this time:     Finally, as , we have that .  Thus the power set of is:   "
},
{
  "id": "thm-count-power-set",
  "level": "2",
  "url": "sec-5-5-power-set.html#thm-count-power-set",
  "type": "Theorem",
  "number": "5.5.4",
  "title": "",
  "body": "  For a finite set the size of the power set is    "
},
{
  "id": "subsec-5-5-1-power-set-first-example-6",
  "level": "2",
  "url": "sec-5-5-power-set.html#subsec-5-5-1-power-set-first-example-6",
  "type": "Example",
  "number": "5.5.5",
  "title": "",
  "body": " Prove:  if and only if  [ ]  Assume Let . Hence by definition of power set,  By (b), since and we can conclude . Thus by definition of power set,  Thus by direct proof, if then  [ ]  Assume that . Let . By definition of power set, . Hence by our assumption, . Hence by our assumption and the definition of power set, . Hence . By definition of subset, since then .  Thus by direct and bi-directional proof, if and only if  "
},
{
  "id": "subsec-5-6-cross",
  "level": "1",
  "url": "subsec-5-6-cross.html",
  "type": "Section",
  "number": "5.6",
  "title": "Cross Product",
  "body": " Cross Product  In this section we introduce the concept of cross product. This is yet another way of making new sets from old sets.   Cross Product  cross product  cartesian product  set cross product   Given two sets and , we can define a new set which we will call the cross product of and (or the cartesian product ) defined as:     This is the collection of all ordered pairs. We explore this new construction in the following examples.   Consider the sets    thus the cross product is the following set:    Our next example explores the lack of commutation of the cross product.   Let's look at another cross product of some sets. Calculate and given the sets and     You've actually seen the cross product since very early on in your mathematical education. Generally, the ordered pairs you would consider were the cartesian plane, the good ol' and axis.   This time if we consider a set I've tried very hard to stay away from, namely the real numbers, , then the cartesian plane is the set .  Throughout your youth you have surely seen many points illustrated on this cartesian plane, such as the elements , , and     With this basic understanding of the cross-product, we are ready to start proving with it.    Prove: For sets , , , and , if and then    We begin by assuming that and that . Our objective is to prove that , that is, we need to show a subset. We do this by choosing an arbitrary element, .  To understand this element, we of course refer to the definition ( ), from which we see the defining condition promises that we can find two elements, one from and one from . Name these elements, and , such that .  By our assumption that , since we established , by definition of subset we get that . Similarly, by our assumption that and since we established that again by the definition of subset .  Therefore, by the definition of cross product as desired.       Prove: Let and be sets, then    [Want to show: ]  We begin by choosing an arbitrary element . By the definition of cross product, we can find and such that . By definition of union, or .  Hence , when , or , when . Thus, by definition of union, Thus by definition of subset, since and , hence we have that .  [Want to show: ]  This time, let . Hence by definition of union, or . Hence, by definition of cross product, we can find and such that  or  and such that .  Case 1:   Since , by definition of union, . And since , , by definition of cross product. Thus by definition of subset, since and , therefore we can conclude that  Case 2:   Since , by definition of union, . And since , by definition of cross product, . Thus by definition of subset, since and , thus we have   Thus, since both cases hold, by direct proof and proof by cases,     "
},
{
  "id": "def-cross-product",
  "level": "2",
  "url": "subsec-5-6-cross.html#def-cross-product",
  "type": "Definition",
  "number": "5.6.1",
  "title": "Cross Product.",
  "body": " Cross Product  cross product  cartesian product  set cross product   Given two sets and , we can define a new set which we will call the cross product of and (or the cartesian product ) defined as:    "
},
{
  "id": "subsec-5-6-cross-5",
  "level": "2",
  "url": "subsec-5-6-cross.html#subsec-5-6-cross-5",
  "type": "Example",
  "number": "5.6.2",
  "title": "",
  "body": " Consider the sets    thus the cross product is the following set:   "
},
{
  "id": "subsec-5-6-cross-7",
  "level": "2",
  "url": "subsec-5-6-cross.html#subsec-5-6-cross-7",
  "type": "Example",
  "number": "5.6.3",
  "title": "",
  "body": " Let's look at another cross product of some sets. Calculate and given the sets and    "
},
{
  "id": "subsec-5-6-cross-9",
  "level": "2",
  "url": "subsec-5-6-cross.html#subsec-5-6-cross-9",
  "type": "Example",
  "number": "5.6.4",
  "title": "",
  "body": " This time if we consider a set I've tried very hard to stay away from, namely the real numbers, , then the cartesian plane is the set .  Throughout your youth you have surely seen many points illustrated on this cartesian plane, such as the elements , , and    "
},
{
  "id": "subsec-5-6-cross-11",
  "level": "2",
  "url": "subsec-5-6-cross.html#subsec-5-6-cross-11",
  "type": "Example",
  "number": "5.6.5",
  "title": "",
  "body": "  Prove: For sets , , , and , if and then    We begin by assuming that and that . Our objective is to prove that , that is, we need to show a subset. We do this by choosing an arbitrary element, .  To understand this element, we of course refer to the definition ( ), from which we see the defining condition promises that we can find two elements, one from and one from . Name these elements, and , such that .  By our assumption that , since we established , by definition of subset we get that . Similarly, by our assumption that and since we established that again by the definition of subset .  Therefore, by the definition of cross product as desired.    "
},
{
  "id": "subsec-5-6-cross-12",
  "level": "2",
  "url": "subsec-5-6-cross.html#subsec-5-6-cross-12",
  "type": "Example",
  "number": "5.6.6",
  "title": "",
  "body": "  Prove: Let and be sets, then    [Want to show: ]  We begin by choosing an arbitrary element . By the definition of cross product, we can find and such that . By definition of union, or .  Hence , when , or , when . Thus, by definition of union, Thus by definition of subset, since and , hence we have that .  [Want to show: ]  This time, let . Hence by definition of union, or . Hence, by definition of cross product, we can find and such that  or  and such that .  Case 1:   Since , by definition of union, . And since , , by definition of cross product. Thus by definition of subset, since and , therefore we can conclude that  Case 2:   Since , by definition of union, . And since , by definition of cross product, . Thus by definition of subset, since and , thus we have   Thus, since both cases hold, by direct proof and proof by cases,    "
},
{
  "id": "sec-5-7-family",
  "level": "1",
  "url": "sec-5-7-family.html",
  "type": "Section",
  "number": "5.7",
  "title": "Families",
  "body": " Families   family of sets  set family We now consider basic constructions like union, intersection, and the cross product between many sets at once. We consider these over a family of sets , which is just a fancy way of saying a set whose members are sets. We will most often use the script font to indicate a family, for example, .   Union over a Family  union over a family   Let be a family of sets. We define the union over  as     As we are still learning set-builder notation, to help us be able to unpack the condition in the previous definition, note the following condition of membership:    We now illustrate the union over a family with a Venn diagram below for the family of sets      Consider the family of sets where each set is defined as follows   Thus the union over is    Our next topic examines intersections within this new concept of families of sets.   Intersection over a Family  intersection over a family   Let be a family of sets. We define the intersection over  as     To help again, we unpack the condition in the previous definition, note the following condition of membership:    We now illustrate the intersection over a family with Venn diagram below, again, for the family of sets      Consider the family of sets where each set is defined as follows   Thus the union over is    Now, let's explore a general proof involving these constructions.    Prove: For a non-empty family of sets     We begin as we do for any subset proof, and that is, we choose an arbitrary element   By definition of the intersection over a family, for any member of the family, must belong to it. So choose an arbitrary , thus , which by definition of union, since we have that .  Therefore since we chose an arbitrary element and have shown , we can conclude as desired.     If this is still a bit too abstract for our dear reader, we will now introduce a concept which allows us to look at these constructions a bit more like the summation from our calculus classes.   Indexed Family of Sets  indexed family of sets  index set   Let be a nonempty set such that for every we correspond a set , an indexed family of sets over , is the family of sets, We call the set  the indexing set .    The most common case of an index set is when in the form of for some , in this case we will often write the intersections as and the union as   With this new construction, let's visit another example.   Consider the indexing set , and the family of sets where each set is defined as follows:   Thus, the union over is    Of course this basic use case of an index set is far from the only one. In the next example, we leave the case of a finite indexing set by setting . This following example also illustrates perhaps the most common use case in your future math courses, with each set in our family being a subset of the real numbers.   Consider the indexing set and the family of sets defined as the following intervals, thus we have and    In your next example, we leave the natural numbers for our index set, and instead explore the example where our indexing set is .   Consider the the indexing set . Now define the indexed family of sets , defined as the following closed intervals, thus we have and    Now that we have built our intuition on unions and intersections over families, let's prove a result about them.    Let be an indexing set, and be an indexed family of sets.   Prove: If is a set then    This is a proof of the equality of two sets so we will need to break up the proof into two parts, namely we will need to show two subsets.   Proving:    To prove this, we will start like most subset proofs, namely by choosing an arbitrary element . By the definition of intersection, both and . By the definition of union over a family, if we choose an arbitrary we have . Thus, since and , by the definition of intersection we have that . Because we chose arbitrarily, it is true that for any  . Hence, the definition of union over a family is satisfied, that is: as desired.   Proving:    To prove this, we will start like most subset proofs, namely by choosing an arbitrary element . By definition of union over a family when we choose an arbitrary element we must have that . By definition of intersection, this means that both and . Since we chose arbitrarily, we have shown that for any that . That is, we have shown the definition of membership to a union over a family, namely that Yet, we have also shown that , thus by definition of intersection we have that as desired.  Since we have shown both the subsets and we can conclude the desired equality of:      We finish up this section with a concept which will come into play when we discuss partitions later in the course.   Pairwise Disjoint   The indexed family of sets is pairwise disjoint if and only if for all and in , either or   In other words, the sets are completely the same, or completely different.     First consider the indexing set and the indexed family of sets    Notice that   and thus this family is pairwise disjoint.  Next, consider the same index set of yet this time the indexed family    This time notice that and yet yet   thus is not pairwise disjoint   We could not end the section without a proof, so here is your obligatory proof.   Let be an indexing set, and let both and be indexed family of sets.   Prove: If is pairwise disjoint and then is pairwise disjoint.   We begin this proof by assuming our antecedent.  Assume that is pairwise disjoint and . It is our objective to prove that is pairwise disjoint, but looking above and seeing the definition of pairwise disjoint, we see that we need to prove a universal quantifier, thus we choose arbitrary and . Now, since we have assumed that we have that both and , thus by definition of membership to we can find and so that and .  Since we have assumed that is pairwise disjoint then either or hence we have satisfied the definition of pairwise disjoint of .      For the proofs in this section we see a common that I like to call chasing the definitions . I know it can be jarring at first not having your warm and safe calculative muddle, but I promise you it will be ok! And I promise you in the next chapter there will always be a very solid calculative step!   "
},
{
  "id": "sec-5-7-family-2",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "family of sets "
},
{
  "id": "def-union-over-family",
  "level": "2",
  "url": "sec-5-7-family.html#def-union-over-family",
  "type": "Definition",
  "number": "5.7.1",
  "title": "Union over a Family.",
  "body": " Union over a Family  union over a family   Let be a family of sets. We define the union over  as    "
},
{
  "id": "sec-5-7-family-5",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-5",
  "type": "Example",
  "number": "5.7.2",
  "title": "",
  "body": " We now illustrate the union over a family with a Venn diagram below for the family of sets    "
},
{
  "id": "sec-5-7-family-6",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-6",
  "type": "Example",
  "number": "5.7.3",
  "title": "",
  "body": " Consider the family of sets where each set is defined as follows   Thus the union over is   "
},
{
  "id": "def-intersection-over-family",
  "level": "2",
  "url": "sec-5-7-family.html#def-intersection-over-family",
  "type": "Definition",
  "number": "5.7.4",
  "title": "Intersection over a Family.",
  "body": " Intersection over a Family  intersection over a family   Let be a family of sets. We define the intersection over  as    "
},
{
  "id": "sec-5-7-family-10",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-10",
  "type": "Example",
  "number": "5.7.5",
  "title": "",
  "body": " We now illustrate the intersection over a family with Venn diagram below, again, for the family of sets    "
},
{
  "id": "sec-5-7-family-11",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-11",
  "type": "Example",
  "number": "5.7.6",
  "title": "",
  "body": " Consider the family of sets where each set is defined as follows   Thus the union over is   "
},
{
  "id": "sec-5-7-family-13",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-13",
  "type": "Example",
  "number": "5.7.7",
  "title": "",
  "body": "  Prove: For a non-empty family of sets     We begin as we do for any subset proof, and that is, we choose an arbitrary element   By definition of the intersection over a family, for any member of the family, must belong to it. So choose an arbitrary , thus , which by definition of union, since we have that .  Therefore since we chose an arbitrary element and have shown , we can conclude as desired.    "
},
{
  "id": "def-indexed-family",
  "level": "2",
  "url": "sec-5-7-family.html#def-indexed-family",
  "type": "Definition",
  "number": "5.7.8",
  "title": "Indexed Family of Sets.",
  "body": " Indexed Family of Sets  indexed family of sets  index set   Let be a nonempty set such that for every we correspond a set , an indexed family of sets over , is the family of sets, We call the set  the indexing set .   "
},
{
  "id": "sec-5-7-family-18",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-18",
  "type": "Example",
  "number": "5.7.9",
  "title": "",
  "body": " Consider the indexing set , and the family of sets where each set is defined as follows:   Thus, the union over is   "
},
{
  "id": "sec-5-7-family-20",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-20",
  "type": "Example",
  "number": "5.7.10",
  "title": "",
  "body": " Consider the indexing set and the family of sets defined as the following intervals, thus we have and   "
},
{
  "id": "sec-5-7-family-22",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-22",
  "type": "Example",
  "number": "5.7.11",
  "title": "",
  "body": " Consider the the indexing set . Now define the indexed family of sets , defined as the following closed intervals, thus we have and   "
},
{
  "id": "sec-5-7-family-24",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-24",
  "type": "Example",
  "number": "5.7.12",
  "title": "",
  "body": " Let be an indexing set, and be an indexed family of sets.   Prove: If is a set then    This is a proof of the equality of two sets so we will need to break up the proof into two parts, namely we will need to show two subsets.   Proving:    To prove this, we will start like most subset proofs, namely by choosing an arbitrary element . By the definition of intersection, both and . By the definition of union over a family, if we choose an arbitrary we have . Thus, since and , by the definition of intersection we have that . Because we chose arbitrarily, it is true that for any  . Hence, the definition of union over a family is satisfied, that is: as desired.   Proving:    To prove this, we will start like most subset proofs, namely by choosing an arbitrary element . By definition of union over a family when we choose an arbitrary element we must have that . By definition of intersection, this means that both and . Since we chose arbitrarily, we have shown that for any that . That is, we have shown the definition of membership to a union over a family, namely that Yet, we have also shown that , thus by definition of intersection we have that as desired.  Since we have shown both the subsets and we can conclude the desired equality of:     "
},
{
  "id": "def-pairwise-disjoint",
  "level": "2",
  "url": "sec-5-7-family.html#def-pairwise-disjoint",
  "type": "Definition",
  "number": "5.7.13",
  "title": "Pairwise Disjoint.",
  "body": " Pairwise Disjoint   The indexed family of sets is pairwise disjoint if and only if for all and in , either or   In other words, the sets are completely the same, or completely different.   "
},
{
  "id": "sec-5-7-family-27",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-27",
  "type": "Example",
  "number": "5.7.14",
  "title": "",
  "body": " First consider the indexing set and the indexed family of sets    Notice that   and thus this family is pairwise disjoint.  Next, consider the same index set of yet this time the indexed family    This time notice that and yet yet   thus is not pairwise disjoint  "
},
{
  "id": "sec-5-7-family-29",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-29",
  "type": "Example",
  "number": "5.7.15",
  "title": "",
  "body": " Let be an indexing set, and let both and be indexed family of sets.   Prove: If is pairwise disjoint and then is pairwise disjoint.   We begin this proof by assuming our antecedent.  Assume that is pairwise disjoint and . It is our objective to prove that is pairwise disjoint, but looking above and seeing the definition of pairwise disjoint, we see that we need to prove a universal quantifier, thus we choose arbitrary and . Now, since we have assumed that we have that both and , thus by definition of membership to we can find and so that and .  Since we have assumed that is pairwise disjoint then either or hence we have satisfied the definition of pairwise disjoint of .    "
},
{
  "id": "sec-5-7-family-30",
  "level": "2",
  "url": "sec-5-7-family.html#sec-5-7-family-30",
  "type": "Note",
  "number": "5.7.16",
  "title": "",
  "body": " For the proofs in this section we see a common that I like to call chasing the definitions . I know it can be jarring at first not having your warm and safe calculative muddle, but I promise you it will be ok! And I promise you in the next chapter there will always be a very solid calculative step!  "
},
{
  "id": "sec-5-8-ch05-exercises",
  "level": "1",
  "url": "sec-5-8-ch05-exercises.html",
  "type": "Section",
  "number": "5.8",
  "title": "Exercises",
  "body": " Exercises     For the sets  , and , draw a Venn diagram shading the appropriate regions for the following:                     For the following, prove that                      For the following sets, write out all elements of both  and                  "
},
{
  "id": "sec-6-1-what-we-assume",
  "level": "1",
  "url": "sec-6-1-what-we-assume.html",
  "type": "Section",
  "number": "6.1",
  "title": "What We Will Use",
  "body": " What We Will Use   In this chapter you can, as usual, assume anything you had in .  We will be using some constructions from your previous math courses a good bit in this chapter so we will review\/establish a bit of notation before we enter this chapter.    Summation  summation  We use the summation notation to add up a collection of indexed numbers.   Summation Notation  For any and any collection of indexed numbers: , define    The most basic examples arise when the satisfy some formula with an input of .   Let , now we calculate:    The summation does not need to start at 0 ; it can start anywhere, the point is that it moves through the successors wherever it is you start, for example: or in a more general fashion for any and any , with ,   This construction lends itself to the use of induction (the object of this chapter) so well as it has a property I like to refer to as peeling off a factor .   Peeling Off a Summation  Notice for any and any , with , we can peel off the first term  or this time peeling off the last term       Product  product  We use the product notation to multiply together a collection of indexed numbers.   Product Notation  For all and any collection of indexed numbers:     Our use case of this notation will be again when satisfy some equation in .   Again, for a simple first example consider , now we calculate:    In a similar fashion to the summation, the product does not need to start at 0 it can start any where, the point is that it moves through the successors wherever it is you start, for example: or in a more general fashion for any and any , with ,   Just as with the summation the main characteristic we will involve is peeling .   Peeling Off a Product  Notice, this time, for any and any with , we can peel off the first term  or this time peeling off the last term       Factorial  factorial  We use the factorial notation to count the number of ways to permute a collection of objects.   Factorial  We define and for any with we define     For this example we will calculate some factorials:       As is the theme of this chapter, there is definitely a pattern.   Peeling Off a Factorial  For any we can peel off leading terms of the factorial and so on.    "
},
{
  "id": "subsec-6-1-1-sum-6",
  "level": "2",
  "url": "sec-6-1-what-we-assume.html#subsec-6-1-1-sum-6",
  "type": "Example",
  "number": "6.1.1",
  "title": "",
  "body": " Let , now we calculate:   "
},
{
  "id": "subsec-6-1-2-times-6",
  "level": "2",
  "url": "sec-6-1-what-we-assume.html#subsec-6-1-2-times-6",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": " Again, for a simple first example consider , now we calculate:   "
},
{
  "id": "subsec-6-1-3-factorial-5",
  "level": "2",
  "url": "sec-6-1-what-we-assume.html#subsec-6-1-3-factorial-5",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": " For this example we will calculate some factorials:      "
},
{
  "id": "sec-6-2-intro-to-pmi",
  "level": "1",
  "url": "sec-6-2-intro-to-pmi.html",
  "type": "Section",
  "number": "6.2",
  "title": "Introduction to Induction",
  "body": " Introduction to Induction   We begin with a couple of definitions that are fundamental, yet this technique we are building to is so algorithmic I believe students can become extremely proficient at applying mathematical induction with little found here.   Successor  successor   Let we call the successor of .    In the late 1800's an Italian mathematician Giuseppe Peano developed five axioms which can create all of the basic ordering and arithmetic properties we all know and love of the natural numbers, using an undefined term of successor , our definition of course captures the heart of his construction. Let it be said, Peano did not consider 0 a natural number, but we will forgive him. It is through these axioms which one verifies induction, this is out side the scope of this text but, such a fun exercise for the dedicated reader!   Inductive Set  inductive set   Let , we call an inductive set if and only if has the property     This says that a set is an inductive set whenever it contains all of its successors.  It is inductive sets that are the underpinning of mathematical induction.   Principle of Mathematical Induction  pmi  induction  principle of mathematical induction   Let , and let with the following properties:         is an inductive set   Then contains all natural numbers greater than or equal to , that is     In some texts this is referred to as a generalized version of induction, those people also usually follow in the footsteps of Peano and naively assume 0 is not a natural number, we instead give the following example.   Let and assume that both and is an inductive set. By the Principle of Mathematical Induction (PMI) we can conclude that .   It has now been my experience that students have clocked out at this point in the lecture, no matter how much I have promised them that their algorithmic tendencies will be returning. So let's let the rubber hit the road and actual do some proofs!  The basic idea of PMI is to prove that the truth set, , of a predicate is equal to an inductive set. Or to hopefully make this sound less like a riddle,   Proof of  Using PMI  induction proof  pmi proof  principle of mathematical induction proof  Proof:    (Base Step) Show that is true     (Induction Assumption) Assume we can find an such that is true     ... thus is true   Therefore such that then is true.   Hopefully you can at least start to see the algorithm forming, there are 3 steps, and we take these steps every time!    First Proof with Induction   For our first example of induction we will use a summation ( )   Prove: For any with    Before we begin this proof we sing a slightly different song for induction (play-along):  \"What's the ?\"     \"What's the ?\"     \"What're the definitions?\"   summation ( )!   \"Now, what to do?\"   Principle of Mathematical Induction! (it is the point of the chapter, also we usually just call it induction )       In Induction we always begin with showing the , in our song we identified the base case as , so for our first step we need to show that is true   (i) (Base Case):  hence ,that is we have shown the base case  After our base case step we use our most crucial step of them all the induction assumption, this is where we just assume it works for some arbitrary number that is at least the size of our base case. For this example I will name that arbitrary number .   (ii) (Induction Assumption):   Assume we can find an such that      The muddle for an induction always has the same purpose an often is done with a calculation. The purpose of the muddle is to satisfy the last part of an induction proof, the case.   (iii)   Now we (use the student's favorite word...) calculate       Using Induction the muddle should have always endend with a calculation which showed our desired result. In this example we have shown therefore by proof by induction we have shown for any with that   QED    "
},
{
  "id": "def-successor",
  "level": "2",
  "url": "sec-6-2-intro-to-pmi.html#def-successor",
  "type": "Definition",
  "number": "6.2.1",
  "title": "Successor.",
  "body": " Successor  successor   Let we call the successor of .   "
},
{
  "id": "def-indcutive-set",
  "level": "2",
  "url": "sec-6-2-intro-to-pmi.html#def-indcutive-set",
  "type": "Definition",
  "number": "6.2.2",
  "title": "Inductive Set.",
  "body": " Inductive Set  inductive set   Let , we call an inductive set if and only if has the property    "
},
{
  "id": "def-pmi",
  "level": "2",
  "url": "sec-6-2-intro-to-pmi.html#def-pmi",
  "type": "Definition",
  "number": "6.2.3",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction  pmi  induction  principle of mathematical induction   Let , and let with the following properties:         is an inductive set   Then contains all natural numbers greater than or equal to , that is    "
},
{
  "id": "sec-6-2-intro-to-pmi-2-9",
  "level": "2",
  "url": "sec-6-2-intro-to-pmi.html#sec-6-2-intro-to-pmi-2-9",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": " Let and assume that both and is an inductive set. By the Principle of Mathematical Induction (PMI) we can conclude that .  "
},
{
  "id": "sec-6-3-basic-pmi-examples",
  "level": "1",
  "url": "sec-6-3-basic-pmi-examples.html",
  "type": "Section",
  "number": "6.3",
  "title": "Basic Induciton Examples",
  "body": " Basic Induciton Examples  In this section we will give some basic examples of induction using the tools from     Prove: For any with      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is 1! thus we have shown    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate: For this example I find it easiest to also work backwards    Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .      Prove: For any with      (i) (Base Case):    hence we have established:    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .      Prove: For any with      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is again 1! hence we have established    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .    Now let's see some examples using the product     Prove: For any with      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is again 1! hence we have established our based case, that is:    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .    Next, we explore an example with a base case not 1.    Prove: For any with      (i) (Base Case):   For this example as we are asked to prove this for all , our base case is 2. hence we have established:    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .    Next, lets see some examples with the factorial     Prove: For any with      (i) (Base Case):   Let . Calculate :    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .      Prove: For any with      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is again 1! hence we have verified the condition    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .    I really like this next example as it exemplifies how induction is often used in your future algebra courses, namely the union is defined as something between two sets, so to do it to multiple sets we need do two at a time. This two at a time is an example of peeling off , just as the previous examples.    Prove: Let be an indexed family of sets, and For any with such that      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is again 1! hence we have established the base case    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .    "
},
{
  "id": "sec-6-3-basic-pmi-examples-3",
  "level": "2",
  "url": "sec-6-3-basic-pmi-examples.html#sec-6-3-basic-pmi-examples-3",
  "type": "Example",
  "number": "6.3.1",
  "title": "",
  "body": "  Prove: For any with      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is 1! thus we have shown    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate: For this example I find it easiest to also work backwards    Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .   "
},
{
  "id": "sec-6-3-basic-pmi-examples-4",
  "level": "2",
  "url": "sec-6-3-basic-pmi-examples.html#sec-6-3-basic-pmi-examples-4",
  "type": "Example",
  "number": "6.3.2",
  "title": "",
  "body": "  Prove: For any with      (i) (Base Case):    hence we have established:    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .   "
},
{
  "id": "sec-6-3-basic-pmi-examples-5",
  "level": "2",
  "url": "sec-6-3-basic-pmi-examples.html#sec-6-3-basic-pmi-examples-5",
  "type": "Example",
  "number": "6.3.3",
  "title": "",
  "body": "  Prove: For any with      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is again 1! hence we have established    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .   "
},
{
  "id": "sec-6-3-basic-pmi-examples-7",
  "level": "2",
  "url": "sec-6-3-basic-pmi-examples.html#sec-6-3-basic-pmi-examples-7",
  "type": "Example",
  "number": "6.3.4",
  "title": "",
  "body": "  Prove: For any with      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is again 1! hence we have established our based case, that is:    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .   "
},
{
  "id": "sec-6-3-basic-pmi-examples-9",
  "level": "2",
  "url": "sec-6-3-basic-pmi-examples.html#sec-6-3-basic-pmi-examples-9",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": "  Prove: For any with      (i) (Base Case):   For this example as we are asked to prove this for all , our base case is 2. hence we have established:    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .   "
},
{
  "id": "sec-6-3-basic-pmi-examples-11",
  "level": "2",
  "url": "sec-6-3-basic-pmi-examples.html#sec-6-3-basic-pmi-examples-11",
  "type": "Example",
  "number": "6.3.6",
  "title": "",
  "body": "  Prove: For any with      (i) (Base Case):   Let . Calculate :    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .   "
},
{
  "id": "sec-6-3-basic-pmi-examples-12",
  "level": "2",
  "url": "sec-6-3-basic-pmi-examples.html#sec-6-3-basic-pmi-examples-12",
  "type": "Example",
  "number": "6.3.7",
  "title": "",
  "body": "  Prove: For any with      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is again 1! hence we have verified the condition    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .   "
},
{
  "id": "sec-6-3-basic-pmi-examples-14",
  "level": "2",
  "url": "sec-6-3-basic-pmi-examples.html#sec-6-3-basic-pmi-examples-14",
  "type": "Example",
  "number": "6.3.8",
  "title": "",
  "body": "  Prove: Let be an indexed family of sets, and For any with such that      (i) (Base Case):   Note that as we are tasked to show our result holds for any , our base case is again 1! hence we have established the base case    (ii) (Induction Assumption):   Assume we can find an such that    (iii)   Calculate:   Thus, we have shown .  Hence, by proof by principle of mathematical induction, for any with .   "
},
{
  "id": "sec-6-4-fib",
  "level": "1",
  "url": "sec-6-4-fib.html",
  "type": "Section",
  "number": "6.4",
  "title": "The Fibonacci Sequence",
  "body": " The Fibonacci Sequence  This next topic is one that stuck with me from my undergraduate experience. I was lucky enough to be taught by the Italian mathematician Dr. Annalisa Calini. She told us the story of her fellow Italian mathematician Fibonacci with such enthusiasm that I could never hope to match. Yet, here is my poor attempt.   The Story of Fibonacci  Our story begins on Day 1 with Fibonacci sitting in a park on a beautiful day. He notices 1 pair young bunnies, male and female, hopping by.   The next day, on Day 2 Fibonacci returned to the same park and noticed the same 1 pair , yet this time they have grown to rabbits, now biologically capable of procreating.   He again returned the following day, on Day 3 , and on this day he noticed his pair of rabbits, but also another pair of bunnies, again paired as in one male and one female, giving us a total of 2 pair of rabbits.   Now on Day 4 Fibonacci noticed his original pair had given birth again, as well as the first litter was now grown to the age of reproduction, giving us 3 pairs of rabbits total. He deduced that it took one day for the rabbits to mature, and then another day for the rabbits to give birth to a new pair of bunnies.   On Day 5 returning once again to this same park he noticed that his original pair was there, and their first litter but not the original pair and the first litter have both produced pairs of bunnies, leaving a total of 5 pairs of rabbits at the park.   Later on Day 5, Fibonacci returns to his home and comes up with perhaps the greatest mathematical assumption in all of history, Then asked himself how many rabbits would be there on day 6, or 7, or 8, or even 1000...   To create a formal definition of the fibonacci we use the concept of inductive definitions. An inductive definition is one which takes the form of PMI, specifically where we first define a base case and then we define the inductive step   The Fibonacci Numbers  fibonacci sequence    (i) (Bases Cases)       (ii) (Inductive Case)   To calculate any Fibonacci number, , we add the two numbers that preceded it:     For fun let's count some more rabbits.   By definition then so many bunnies...   The awake student, usually sitting somewhere right off the front row, will notice that when we defined the Fibonacci numbers we didn't just have a singular base case, and we didn't define the case, which is slightly different from the procedure of induction. To this student I applaud you, that is correct; we instead used a slightly different version of induction, known commonly as complete induction.   Principle of Complete Induction  principle of complete induction  induction complete  complete induction   Let and suppose is a subset of with the following property:   with   if then   Then     Proving using complete induction amounts to a procedure almost identical to that of our traditional induction   Proof of   with Complete Induction  principle of complete induction proof  complete induction proof  Proof:    (Base Steps) Show that and are true     (Induction Assumption) Assume we can find an such that is true for any such that      ... thus is true   Therefore such that then is true.   The astute student will note we are really doing nothing different here... as in PMI we said for any  so why not up to any . But, this really allows us to do exactly what we have been doing its just that in step (iii) it becomes quite cumbersome to balance everywhere, so this way just lets us use as well sometimes we can just get some number less than and it is there we would like to invoke the induction assumption not hitting exactly one number. This range version is much more versatile and it is the method that I personally just always default to.    Prove: For any such that we have is even (every third Fibonacci number is even)    (i) (Base Cases):   As we are to show this result for any , our first base case will be 1! and since 1 is an integer and thus is even.  As we are using PCI we need to show our next base case of 2. (see for the complete calculation of ) and since 4 is an integer and thus is even.  Hence we have established the base cases: and    (ii) (Induction Assumption):   Assume we can find an such that for any such that    (iii)   Calculate:   Hence, by induction assumption, is even. Thus by definition of even, we can find an integer such that   Calculate:   Thus by definition of even, is even. Thus by proof by PCI, is even for all       Prove: For any such that we have is odd    (i) (Base Case):   Since, again, we are to show this for any , our first base case is 1! Since 1 is an integer and we have that 3 is odd.  As we are using PCI we need to show our next base case of 2. (see for the complete calculation of ) and since 6 is an integer and thus is odd.  Hence, we have estableshed the base cases and    (ii) (Induction Assumption):   Assume we can find an such that for any such that    (iii)   Calculate:   Note: we know and are even, because we just proved it. By our induction assumption, is odd. Hence by definition of odd, we can find such that , , and .  Calculate:   Thus by definition of odd, is odd. Thus by proof by PCI, is odd for all     "
},
{
  "id": "def-fibonacci",
  "level": "2",
  "url": "sec-6-4-fib.html#def-fibonacci",
  "type": "Definition",
  "number": "6.4.1",
  "title": "The Fibonacci Numbers.",
  "body": " The Fibonacci Numbers  fibonacci sequence    (i) (Bases Cases)       (ii) (Inductive Case)   To calculate any Fibonacci number, , we add the two numbers that preceded it:    "
},
{
  "id": "ex-count-fib",
  "level": "2",
  "url": "sec-6-4-fib.html#ex-count-fib",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": " By definition then so many bunnies...  "
},
{
  "id": "def-pci",
  "level": "2",
  "url": "sec-6-4-fib.html#def-pci",
  "type": "Definition",
  "number": "6.4.3",
  "title": "Principle of Complete Induction.",
  "body": " Principle of Complete Induction  principle of complete induction  induction complete  complete induction   Let and suppose is a subset of with the following property:   with   if then   Then    "
},
{
  "id": "sec-6-4-fib-13",
  "level": "2",
  "url": "sec-6-4-fib.html#sec-6-4-fib-13",
  "type": "Example",
  "number": "6.4.4",
  "title": "",
  "body": "  Prove: For any such that we have is even (every third Fibonacci number is even)    (i) (Base Cases):   As we are to show this result for any , our first base case will be 1! and since 1 is an integer and thus is even.  As we are using PCI we need to show our next base case of 2. (see for the complete calculation of ) and since 4 is an integer and thus is even.  Hence we have established the base cases: and    (ii) (Induction Assumption):   Assume we can find an such that for any such that    (iii)   Calculate:   Hence, by induction assumption, is even. Thus by definition of even, we can find an integer such that   Calculate:   Thus by definition of even, is even. Thus by proof by PCI, is even for all    "
},
{
  "id": "sec-6-4-fib-14",
  "level": "2",
  "url": "sec-6-4-fib.html#sec-6-4-fib-14",
  "type": "Example",
  "number": "6.4.5",
  "title": "",
  "body": "  Prove: For any such that we have is odd    (i) (Base Case):   Since, again, we are to show this for any , our first base case is 1! Since 1 is an integer and we have that 3 is odd.  As we are using PCI we need to show our next base case of 2. (see for the complete calculation of ) and since 6 is an integer and thus is odd.  Hence, we have estableshed the base cases and    (ii) (Induction Assumption):   Assume we can find an such that for any such that    (iii)   Calculate:   Note: we know and are even, because we just proved it. By our induction assumption, is odd. Hence by definition of odd, we can find such that , , and .  Calculate:   Thus by definition of odd, is odd. Thus by proof by PCI, is odd for all    "
},
{
  "id": "sec-6-5-big-ones",
  "level": "1",
  "url": "sec-6-5-big-ones.html",
  "type": "Section",
  "number": "6.5",
  "title": "Well-Ordering Principle",
  "body": " Well-Ordering Principle  One of the most important properties of the natural numbers, that will be used constantly in your studies even if it is rarely mentioned and that is:   Well-Ordering Principle (WOP)  Well-Ordering Principle  Every nonempty subset of has a smallest element.   In class when I have introduced this topic in the past it has been greeted with the dreaded wE L oBv oUsLy .  This property is quite unique to the natural numbers, it's not true in the integers, the rationals, the positive rational numbers, the real numbers, nor are the non-negative real numbers.  WOP seems to come up most often with contradiction, specifically assuming some property you to want to be true for the natural numbers is not. This is the negation of a universal statement, and thus you are assuming an existential, one way of interpreting this existential is to say that thus the set of all natural numbers that do not have this property is nonempty. Then WOP gives us a smallest member of this set, and we can quite often contradict by constructing a smaller element, for example.  For our first example and for the rest of this section we will need a couple of assumptions, firstly the following definitions   Prime Number  prime   We say an integer, , is prime when the only divisors are 1 and     and of course for the non-primes.   Composite Integer  composite   We say an integer, , is composite when it is not prime, that is when it has a divisor other than and .     Besides our usual assumptions we will also assume the properties of inequalities you know and love from your college algebra course as well (I usually skip these proofs in class but include them for reference to WOP in my later classes)   We will also find the next lemma useful for the following proofs.    For all integers and with , if then       Let and be arbitrary integers with and assume that . By definition of divides we can find an integer such that . Since we assumed that we have that both and . For sake of contradiction assume that , hence hence .  Since then hence thus and hence a contradiction to our assumption that , as specifically .      Prove: Every natural number has a prime factor.   Choose an arbitrary , if is prime then indeed has a prime factor, namely itself. If is composite then something other than and must divide . Therefore the following set is non-empty: By WOP, has a smallest element, denote this element as .  For the sake of contradiction assume that is not prime, that is we assume that is composite. By definition of composite we can find a divisor such that and , yet by definition of divides we can find a such that and we can find a such that , thus , therefore Yet by we have that yet we assumed hence a contradiction to being the smallest element of .     We have used the next proposition without proof throughout the text, now we can finally present a proof here.   The Division Algorithm  division algorithm proof   For all integers and , with , there exists unique integers and such that with        Proof of the Division Algorithm  Let and be integers with .  Consider the set: Notice that if then we can find a such that thus and hence plays the role of our desired and we can simply set . So we now assume that .  Since 0 is not in , then as if were zero then . Now if then and thus , if and then thus and again is not empty, if then the same can be said of . Therefore and hence we can use WOP to determine that there must be a smallest element, name this element . By the definition of we can find an integer such that . Thus and .  For the sake of contradiction assume that , hence when and when .   Case 1: Assume   Next note that thus , yet a contradiction to being the smallest member of , hence as desired.   Case 2: Assume   Now note that thus , yet a contradiction to being the smallest member of , hence as desired.      The Fundamental Theorem of Arithmetic  fundamental theorem of arithmetic   Every natural number greater than 1 is either prime or can be expressed as a product of primes.       Proof of The Fundamental Theorem of Arithmetic  For this proof we will use PCI   (i) (Base Case):   Our base case is 2 in this example as we are trying to prove the statement for any . So consider by anything that divides 2 must be less than or equal to 2, and hence it is either 1 or 2, and thus 2 is prime, hence we have established our base case.   (ii) (Induction Assumption):   Assume we can find an such that for any such that then is either prime or can be expressed uniquely as a product of primes.   (iii)   By we can find an integer and a prime number such that . By we have that . If then is prime and we are done, so assume that . Since by our induction assumption we can write as a product of primes, denote this as for some and each is a prime. Thus hence we have written as a product of primes.   "
},
{
  "id": "def-prime",
  "level": "2",
  "url": "sec-6-5-big-ones.html#def-prime",
  "type": "Definition",
  "number": "6.5.1",
  "title": "Prime Number.",
  "body": " Prime Number  prime   We say an integer, , is prime when the only divisors are 1 and    "
},
{
  "id": "def-not-prime",
  "level": "2",
  "url": "sec-6-5-big-ones.html#def-not-prime",
  "type": "Definition",
  "number": "6.5.2",
  "title": "Composite Integer.",
  "body": " Composite Integer  composite   We say an integer, , is composite when it is not prime, that is when it has a divisor other than and .   "
},
{
  "id": "sec-6-5-big-ones-11",
  "level": "2",
  "url": "sec-6-5-big-ones.html#sec-6-5-big-ones-11",
  "type": "Note",
  "number": "6.5.3",
  "title": "",
  "body": " Besides our usual assumptions we will also assume the properties of inequalities you know and love from your college algebra course as well (I usually skip these proofs in class but include them for reference to WOP in my later classes)  "
},
{
  "id": "lem-divisor-less-than",
  "level": "2",
  "url": "sec-6-5-big-ones.html#lem-divisor-less-than",
  "type": "Lemma",
  "number": "6.5.4",
  "title": "",
  "body": "  For all integers and with , if then    "
},
{
  "id": "sec-6-5-big-ones-15",
  "level": "2",
  "url": "sec-6-5-big-ones.html#sec-6-5-big-ones-15",
  "type": "Proof",
  "number": "6.5.1",
  "title": "",
  "body": " Let and be arbitrary integers with and assume that . By definition of divides we can find an integer such that . Since we assumed that we have that both and . For sake of contradiction assume that , hence hence .  Since then hence thus and hence a contradiction to our assumption that , as specifically .  "
},
{
  "id": "ex-prime-factor",
  "level": "2",
  "url": "sec-6-5-big-ones.html#ex-prime-factor",
  "type": "Example",
  "number": "6.5.5",
  "title": "",
  "body": "  Prove: Every natural number has a prime factor.   Choose an arbitrary , if is prime then indeed has a prime factor, namely itself. If is composite then something other than and must divide . Therefore the following set is non-empty: By WOP, has a smallest element, denote this element as .  For the sake of contradiction assume that is not prime, that is we assume that is composite. By definition of composite we can find a divisor such that and , yet by definition of divides we can find a such that and we can find a such that , thus , therefore Yet by we have that yet we assumed hence a contradiction to being the smallest element of .    "
},
{
  "id": "prop-div-algo",
  "level": "2",
  "url": "sec-6-5-big-ones.html#prop-div-algo",
  "type": "Proposition",
  "number": "6.5.6",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm  division algorithm proof   For all integers and , with , there exists unique integers and such that with    "
},
{
  "id": "sec-6-5-big-ones-21",
  "level": "2",
  "url": "sec-6-5-big-ones.html#sec-6-5-big-ones-21",
  "type": "Proof",
  "number": "6.5.2",
  "title": "Proof of the Division Algorithm.",
  "body": " Proof of the Division Algorithm  Let and be integers with .  Consider the set: Notice that if then we can find a such that thus and hence plays the role of our desired and we can simply set . So we now assume that .  Since 0 is not in , then as if were zero then . Now if then and thus , if and then thus and again is not empty, if then the same can be said of . Therefore and hence we can use WOP to determine that there must be a smallest element, name this element . By the definition of we can find an integer such that . Thus and .  For the sake of contradiction assume that , hence when and when .   Case 1: Assume   Next note that thus , yet a contradiction to being the smallest member of , hence as desired.   Case 2: Assume   Now note that thus , yet a contradiction to being the smallest member of , hence as desired.  "
},
{
  "id": "prop-fun-thm-arith",
  "level": "2",
  "url": "sec-6-5-big-ones.html#prop-fun-thm-arith",
  "type": "Proposition",
  "number": "6.5.7",
  "title": "The Fundamental Theorem of Arithmetic.",
  "body": " The Fundamental Theorem of Arithmetic  fundamental theorem of arithmetic   Every natural number greater than 1 is either prime or can be expressed as a product of primes.   "
},
{
  "id": "sec-6-5-big-ones-25",
  "level": "2",
  "url": "sec-6-5-big-ones.html#sec-6-5-big-ones-25",
  "type": "Proof",
  "number": "6.5.3",
  "title": "Proof of The Fundamental Theorem of Arithmetic.",
  "body": " Proof of The Fundamental Theorem of Arithmetic  For this proof we will use PCI   (i) (Base Case):   Our base case is 2 in this example as we are trying to prove the statement for any . So consider by anything that divides 2 must be less than or equal to 2, and hence it is either 1 or 2, and thus 2 is prime, hence we have established our base case.   (ii) (Induction Assumption):   Assume we can find an such that for any such that then is either prime or can be expressed uniquely as a product of primes.   (iii)   By we can find an integer and a prime number such that . By we have that . If then is prime and we are done, so assume that . Since by our induction assumption we can write as a product of primes, denote this as for some and each is a prime. Thus hence we have written as a product of primes.  "
},
{
  "id": "sec-6-6-exercises",
  "level": "1",
  "url": "sec-6-6-exercises.html",
  "type": "Section",
  "number": "6.6",
  "title": "Exercises",
  "body": " Exercises     Use Induction to prove that the following hold    for all      for all      for all      for all      for all           for all      for all      for all      is odd for all        Let be an indexed family of sets, prove: for all      "
},
{
  "id": "sec-7-1",
  "level": "1",
  "url": "sec-7-1.html",
  "type": "Section",
  "number": "7.1",
  "title": "What is a Relation?",
  "body": " What is a Relation?  A relation at its heart is a simple a way of formalizing sentences like: . Slightly more formal, we will take two sets and define how the elements of these sets are related to each other.   Relations  relation   Let and be sets. is a relation from to if and only if is a subset of That is,   When is a relation from to we say it is a relation on  .     Relation Notation and Verbage  For sets and , with a relation from to when we say:    is -related to      is related via to      is related to (when is understood in the context)     When we will write and when we will write     Since the empty set , is a subset of any set it is a relation from to . As well since any set is a subset of itself, the set is also a relation from to .   At first glance this definition does not seem to match up with our intuition at all, and to add to that the notation may seem very unfamiliar. Our next example hopefully at least motivates the notation.   Lets quickly examine a few relations on the real numbers,     Equals:     means   This relation can be viewed as the graph of       Less than:     means   This relation can be visualized as the following shaded region       While admittedly this is quite a verbose way of explaining something that is already in your lexicon, hopefully this last example helps calm your stomach or at least motivate the notation, I would like to now step back and look at this new concept a little more abstractly.   For this example define the following two sets   where consists of some animals from the zoo, and is a set of some foods.  We will now define the relation, as the following subset of    This is the relation of eats . Namely, means  eats  . For example   that is   or it is read\/visualized more like:   Next, to motivate the wordage a relation from  to , we often visualize using what I refer to as the picture, where we draw an arrow from the element in the set to the element in the set it is related to.    For sets and a relation from to does not need to use every element of nor every element of , we define the elements it does use.   Domain  relation domain  domain   The domain of the relation from to is the set      Range  relation range  range   The range of a relation is the set      In this example, consider the two sets and and define the relation from to defined as which can be visualized as:   For this relation we have the following and    "
},
{
  "id": "def-relation",
  "level": "2",
  "url": "sec-7-1.html#def-relation",
  "type": "Definition",
  "number": "7.1.1",
  "title": "Relations.",
  "body": " Relations  relation   Let and be sets. is a relation from to if and only if is a subset of That is,   When is a relation from to we say it is a relation on  .   "
},
{
  "id": "sec-7-1-5",
  "level": "2",
  "url": "sec-7-1.html#sec-7-1-5",
  "type": "Note",
  "number": "7.1.2",
  "title": "",
  "body": " Since the empty set , is a subset of any set it is a relation from to . As well since any set is a subset of itself, the set is also a relation from to .  "
},
{
  "id": "ex-equals",
  "level": "2",
  "url": "sec-7-1.html#ex-equals",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": " Lets quickly examine a few relations on the real numbers,     Equals:     means   This relation can be viewed as the graph of       Less than:     means   This relation can be visualized as the following shaded region      "
},
{
  "id": "ex-eats",
  "level": "2",
  "url": "sec-7-1.html#ex-eats",
  "type": "Example",
  "number": "7.1.4",
  "title": "",
  "body": " For this example define the following two sets   where consists of some animals from the zoo, and is a set of some foods.  We will now define the relation, as the following subset of    This is the relation of eats . Namely, means  eats  . For example   that is   or it is read\/visualized more like:   Next, to motivate the wordage a relation from  to , we often visualize using what I refer to as the picture, where we draw an arrow from the element in the set to the element in the set it is related to.   "
},
{
  "id": "def-domain",
  "level": "2",
  "url": "sec-7-1.html#def-domain",
  "type": "Definition",
  "number": "7.1.5",
  "title": "Domain.",
  "body": " Domain  relation domain  domain   The domain of the relation from to is the set    "
},
{
  "id": "def-range",
  "level": "2",
  "url": "sec-7-1.html#def-range",
  "type": "Definition",
  "number": "7.1.6",
  "title": "Range.",
  "body": " Range  relation range  range   The range of a relation is the set    "
},
{
  "id": "ex-dom",
  "level": "2",
  "url": "sec-7-1.html#ex-dom",
  "type": "Example",
  "number": "7.1.7",
  "title": "",
  "body": " In this example, consider the two sets and and define the relation from to defined as which can be visualized as:   For this relation we have the following and   "
},
{
  "id": "sec-7-2-first-properties-of-relations",
  "level": "1",
  "url": "sec-7-2-first-properties-of-relations.html",
  "type": "Section",
  "number": "7.2",
  "title": "New Relations From Old",
  "body": " New Relations From Old  This subsection is dedicated to making new relations from old ones. Our first method is by turning around the arrows.   Inverse  inverse  relation inverse   If is a relation from to , then the inverse of is the relation      We will consider the same sets and relation as in . The inverse is thus which can be visualized as   Notice we have the following domain and range       Let be a relation from to                   Proof of  We will prove part (a) and leave part (b) as an exercise to the reader  Let be a relation from to .   Prove: Dom( ) = Rng( )  Don't forget relations are just sets, and to prove equality of sets, you must prove both subsets!     Let . Hence by definition of domain, we can find such that . Hence, by definition of inverse, . Since , by definition of range, .     Let . Hence, by definition of domain, we can find such that . Hence, by definition of inverse, . Since , by definition of range, .    This next construction is one that may be familiar from your college algebra.   Composite  composition  relation composition   Let be a relation from to , and let be a relation from to . The composite of and is      For this example consider again the sets and but in addition consider the set   and define the relation from to as and define the relation from to as   Thus we can visulaize the composition as   and the relation is thus defined as   Notice we have the following domain and range of the composition     Lets explore a few examples proving using this new concept of composition.   Consider and , relations on , defined as follows:   Prove:      As one must do, we assume what we need to assume, namely assume that and are relations on defined above.  To begin, choose an arbitrary element , since and are relations on by definition of composite we can find an and a such that , such that we can find an integer such that and . By definition of divides we can find an and such that and . Calculate and since is an integer by the definition of divides we can conclude that , and thus as desired.      Identity Relation  identity  relation identity   For any set , the identity relation on is the set       Let , , and be sets. Let be a relation from to , a relation from to , and be a relation from to          (composition is associative)     and               Proof of  We will prove part (b) and leave the rest as exercises for the reader.  Suppose that are sets. Let be a relation from , be a relation from , and be a relation from .  Since we are proving an equality, we will have to prove both subsets.     Let , by definition of composition, is a relation from to , hence by the definition of relation we can find an and a such that . Now, as well by definition of composition, is a relation from to , and since is a relation from to , we can find a such that and . Again, by the definition of composition, since is a relation from to and is a relation from to we can find such that and .  Since , and then by definition of composite we have that . And since and then by definition of composite we can conclude that .     For this part, we choose an arbitrary element . Again, by definition of composition is a relation from to and since is a relation from to , hence is a relation from to , hence we can find a and a such that . As well, by the definition of composite we can find such that and . Yet, by definition if composite since is a relation from to and is a relation from to we can find such that and . Thus, because and by definition of composite . In a similar fashion as we also have we can conclude that as desired.  Since we have shown that both and we can conclude that .    "
},
{
  "id": "def-inverse",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#def-inverse",
  "type": "Definition",
  "number": "7.2.1",
  "title": "Inverse.",
  "body": " Inverse  inverse  relation inverse   If is a relation from to , then the inverse of is the relation    "
},
{
  "id": "sec-7-2-first-properties-of-relations-4",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#sec-7-2-first-properties-of-relations-4",
  "type": "Example",
  "number": "7.2.2",
  "title": "",
  "body": " We will consider the same sets and relation as in . The inverse is thus which can be visualized as   Notice we have the following domain and range    "
},
{
  "id": "prop-dom-inverse",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#prop-dom-inverse",
  "type": "Proposition",
  "number": "7.2.3",
  "title": "",
  "body": "  Let be a relation from to                "
},
{
  "id": "sec-7-2-first-properties-of-relations-6-1",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#sec-7-2-first-properties-of-relations-6-1",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Proposition 7.2.3.",
  "body": " Proof of  We will prove part (a) and leave part (b) as an exercise to the reader  Let be a relation from to .   Prove: Dom( ) = Rng( )  Don't forget relations are just sets, and to prove equality of sets, you must prove both subsets!     Let . Hence by definition of domain, we can find such that . Hence, by definition of inverse, . Since , by definition of range, .     Let . Hence, by definition of domain, we can find such that . Hence, by definition of inverse, . Since , by definition of range, .  "
},
{
  "id": "def-composition",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#def-composition",
  "type": "Definition",
  "number": "7.2.4",
  "title": "Composite.",
  "body": " Composite  composition  relation composition   Let be a relation from to , and let be a relation from to . The composite of and is    "
},
{
  "id": "sec-7-2-first-properties-of-relations-9",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#sec-7-2-first-properties-of-relations-9",
  "type": "Example",
  "number": "7.2.5",
  "title": "",
  "body": " For this example consider again the sets and but in addition consider the set   and define the relation from to as and define the relation from to as   Thus we can visulaize the composition as   and the relation is thus defined as   Notice we have the following domain and range of the composition    "
},
{
  "id": "sec-7-2-first-properties-of-relations-11",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#sec-7-2-first-properties-of-relations-11",
  "type": "Example",
  "number": "7.2.6",
  "title": "",
  "body": " Consider and , relations on , defined as follows:   Prove:      As one must do, we assume what we need to assume, namely assume that and are relations on defined above.  To begin, choose an arbitrary element , since and are relations on by definition of composite we can find an and a such that , such that we can find an integer such that and . By definition of divides we can find an and such that and . Calculate and since is an integer by the definition of divides we can conclude that , and thus as desired.    "
},
{
  "id": "def-identity",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#def-identity",
  "type": "Definition",
  "number": "7.2.7",
  "title": "Identity Relation.",
  "body": " Identity Relation  identity  relation identity   For any set , the identity relation on is the set    "
},
{
  "id": "prop-comp-inv",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#prop-comp-inv",
  "type": "Proposition",
  "number": "7.2.8",
  "title": "",
  "body": "  Let , , and be sets. Let be a relation from to , a relation from to , and be a relation from to          (composition is associative)     and            "
},
{
  "id": "sec-7-2-first-properties-of-relations-14-1",
  "level": "2",
  "url": "sec-7-2-first-properties-of-relations.html#sec-7-2-first-properties-of-relations-14-1",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Proposition 7.2.8.",
  "body": " Proof of  We will prove part (b) and leave the rest as exercises for the reader.  Suppose that are sets. Let be a relation from , be a relation from , and be a relation from .  Since we are proving an equality, we will have to prove both subsets.     Let , by definition of composition, is a relation from to , hence by the definition of relation we can find an and a such that . Now, as well by definition of composition, is a relation from to , and since is a relation from to , we can find a such that and . Again, by the definition of composition, since is a relation from to and is a relation from to we can find such that and .  Since , and then by definition of composite we have that . And since and then by definition of composite we can conclude that .     For this part, we choose an arbitrary element . Again, by definition of composition is a relation from to and since is a relation from to , hence is a relation from to , hence we can find a and a such that . As well, by the definition of composite we can find such that and . Yet, by definition if composite since is a relation from to and is a relation from to we can find such that and . Thus, because and by definition of composite . In a similar fashion as we also have we can conclude that as desired.  Since we have shown that both and we can conclude that .  "
},
{
  "id": "sec-7-3-equiv-relations",
  "level": "1",
  "url": "sec-7-3-equiv-relations.html",
  "type": "Section",
  "number": "7.3",
  "title": "Equivalence Relations",
  "body": " Equivalence Relations  Equivalence relations show up a lot in your future math courses especially in algebra and number theory. Yet, before we dive into an equivalence relation lets look at the three properties which make it up. First up is the reflexive property.   Reflexive  reflexive  relation reflexive  We say that a relation on a set is reflexive on whenever    For our first example in this section we will return to our cartoons.   Consider the following set    and consider the relation on defined as   or as a set   notice that for every element of it is in an ordered pair with itself, and hence is reflexive.   Let see a couple of examples of proof involving reflexive.   Consider the relation on defined as  Prove:  is reflexive    To prove this we let , to show is included in an order pair with membership to amounts to proving an existential.  That is we will need to produce an integer to create an ordered pair with . Well, that integer is .  To see this simply note that and since is an integer by definition of divides divides , and hence .  Since we have chosen arbitrary we can conclude that is reflexive as desired.      Let be a set, and let be a relation on .   Prove: if is reflexive then     Assume is reflexive on . As usual to show equality of sets (don't forget relations are sets!) we will need to break our proof into two parts.     As usual, let , hence by definition we can find a such that , since is a relation on we have that .     This time, let , since we have assumed is reflexive, by definition and hence by definition of domain .  Since we have shown both and we have that as desired.     The next property that defines an equivalence relation is symmetric.   Symmetric  symmetric  relation symmetric  We say that a relation on a set is symmetric on whenever     Consider the set and the relation on defined as This relation is symmetric to see this unlike with reflexive we need not check every element of we instead check every element of    now we have exhausted all the elements of and thus is indeed symmetric.   Lets explore an example of a proof involving the symmetric property next.   Consider the relation on defined as  Prove:  is symmetric    To prove that is symmetric we must choose an arbitrary . By definition of  , by definition of divides we can find an integer such that yet since we have that and hence and thus . Hence is symmetric.       Prove: If is a symmetric relation on , and , then    Let be a relation on the set . Assume is a symmetric relation on and . Let . Thus by definition of relation, and definition of inverse, we can find such that . Thus, by definition of inverse, . Thus by our assumption and the definition of subset, . And, since is symmetric, . Since ,   Since and , by definition of subset,     The final property which makes an equivalence relation is transitive.   Transitive  transitive  relation transitive  We say that a relation on a set is transitive on whenever     Consider the relation on defined as  Prove:  is transitive on     To prove that is transitive we must choose two elements and .  By definition of both and . Hence by the definition of divides we can find and such that and . Calculate: since is an integer we can conclude that and hence . Therefore by the definition of transitive is transitive.       Prove:  is transitive if and only if    Let be a relation on a non-empty set      Assume is transitive. Let . By definition of composition, we can find such that and . Since is transitive, .  Since and , by definition of subset, .     Assume . Let and . Since and , by definition of composition, . Hence by our assumption that , and definition of subset, .  Thus, by definition of transitive, is transitive.     Let be a non-empty set. For the power set , the relation \"is a subset of\" is reflexive on , and transitive, but not symmetric.    Proof of   [Reflexive]   Let . (Need To Show: ) Assume . Hence, , thus by definition of subset, and hence \"subset of\" is reflexive.   [Transitive]   Let such that and . Let . Thus by definition of subset, since , . Since , and , Thus, by definition of subset, since and , . Hence \"subset of\" is transitive.   [NOT Symmetric]   notice but as we assumed that was not empty hence \"subset of\" is not symmetric.   Now we have collected all of the properties which make an equivalence relation, the definition is almost self evident.   Equivalence Relation  equivalence relation  relation equivalence relation   A relation on a set is an equivalence relation on if is reflexive, symmetric, and transitive on .     Consider the relation on defined as  Prove:  is an equivalence relation    The definition of equivalence relation has three properties:   reflexive    symmetric    transitive   thus a proof that a relation is an equivalence relation should be split into three parts.   Proof of Reflexive:   To see that is reflexive we start with an arbitrary element . Now for this relation we can calculate: since 0 is an integer is thus divisible by , and hence as desired. Therefore is reflexive.   Proof of Symmetric:   To show that is symmetric we begin by choosing a pair such that . By the definition of  thus by definition of divides we can find an integer so that and hence and since is an integer by definition of divides 5 divides thus ; therefore is symmetric.   Proof of Transitive:   To prove is transitive we begin with two arbitrary elements of , namely and . By definition of 5 divides both and , thus by definition of divides we can find integers and such that and . Now calculate: siince is an integer we have that is divisible by and thus and hence is transitive.  As we have shown that is reflexive, symmetric and transitive we have have verified that is an equivalence relation as desired!     For the next example we will find the following definition and lemma helpful.   Parity  parity   We say that two integers have the same parity when either both are even or both are odd.      For any integers and if is divisible by 2 then and have the same parity.      Proof of  We will approach this proof exhaustive, using to break us into cases.   Case 1: is even and is even   In this case we assume that we can find integers and so that and . Calculate since is an integer we have that is even, hence when and are both even that is even.   Case 2: is odd and is even   In this case we assume that we can find integers and so that and . Calculate since is an integer we have that is odd. Hence when is odd and is even then is odd.   Case 3: is even and is odd   In this case we assume we can find integers and so that and . Calculate since is an integer we have that is odd. Hence with is even and is odd is odd   Case 1: is odd and is odd   In this final case we assume we can find integers and so that and . Calculate since is an integer we conclude that is even. Therefore when is odd and is odd we have that is even.  Therefore we see that the only time that is even is exactly when and have the same parity.     Consider the relation on defined as  Prove:  is an equivalence relation    As we are proving that is an equivalence relation we should split it into three parts.   Proof of Reflexive:   To show reflexive we start with an arbitrary element , then calculate and since is an integer we have that divisible by 2 and hence and thus is reflexive.   Proof of Symmetric:   To prove that is symmetric choose an arbitrary element , thus by definition of we have that hence we can find an integer such that , yet note that hence is divisible by 2 and therefore and hence is symmetric.   Proof of Transitive:   To prove transitive we choose elements of , namely and . By definition of membership to we have that and , that is that both and are even.  By and we can break the rest of our proof in to a couple of cases.   Case 1: is even   Assume that is even, by since we have that both is even and is even we can conclude that both and are even. Hence by the definition of even we can find integers and such that and . Calculate since is an integer we have that thus as desired.   Case 1: is odd   Assume that is odd, by then both and are odd as we have that both and are even. By definition of even we can find two integers and such that and . Calculate since is an integer we have that and thus as desired.  Hence in both cases we have that is transitive.  As we have shown that is reflexive, symmetric and transitive we have have verified that is an equivalence relation as desired!      Let be a set and let both and be relations on .   Prove: if and are equivalence relations then is an equivalence relation.    Let be a set and let both and be relations on and assume both and are equivalence relations. To prove that is an equivalence relation we should break it down into the three conditions.   Proof of Reflexive:   To prove reflexive, we begin with an arbitrary element . Since and are equivalence relations they are in particular reflexive we have that and , hence by definition of intersection thus is reflexive.   Proof of Symmetric:   To prove symmetric, we choose an element . By definition of intersection both and . Since both and are equivalence relations in particular they are both symmetric and hence and , thus by the definition of intersection . Therefore is symmetric.   Proof of Transitive:   To prove transitive we start with elements and , by definition of intersection we have that , , and . Since both and are equivalence relations, in particular they are transitive we have that and , hence by definition of intersection . Therefore is transitive.  Hence since we have shown that is reflexive, symmetric, and transitive we have that is an equivalence relation.     An equivalence relation has a natural subdivision on the set it is on.   Equivalence Class  equivalence class  equivalence relation equivalence class  Equivalence relation representative   Let be an equivalence relation on a set . For the equivalence class of modulo is the set   Each element of is called a representative of this class.     Modulo  modulo   The set of all equivalence classes is called  modulo  ( mod )     Consider the set and define the relation on as follows We claim that this is an equivalence relation of , yet since we just have a finite set lets just go through and find all the relations, namely We can then go through and check that all the properties of an equivalence relation, notice for example that the following are all members of (0,0), (1,1), (2,2), (3,3), (4,4) and hence is reflexive.  To continue note the following are all members of  and hence is symmetric. For transitive we check them all again that all of the following are members of  Now note the following equivalence classes:      Let be an equivalence relation on a nonempty set . For all and in ,   and  if and only if  is not related to if and only if      Proof of  We prove part (a) and part (b), leaving part (c) as an exercise.  Proof of part (a)     Let , since is an equivalence relation, in particular it is reflexive, thus , hence by definition of ,      Let . Thus by definition of , . Hence, . Since is a relation on , . Hence by definition of cross product, .  Proof of (b) if and only if   Let be a relation on a non-empty set      Let , as our objective is to prove equality of sets we should break it into two parts.     Let . Thus by definition of equivalence class . Since is an equivalence relation, it is symmetric, and as we assumed , we can thus conclude . Since is an equivalence relation, it is also transitive. And since we already concluded and we can now conclude .  Thus by definition of equivalence class, . Thus by definition of subset, .     let . Thus by definition of equivalence class . Since is an equivalence relation, it is transitive. And since we already concluded and , we can now conclude .  Thus by definition of equivalence class, . Thus by definition of subset,      Let and such that . Since is an equivalence relation, it is reflexive. Hence, . Thus by definition of , . Since we assumed , in particular , . By definition of , . Since is an equivalence relation, it is symmetric. Since we concluded , we can conclude    "
},
{
  "id": "def-reflexive",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#def-reflexive",
  "type": "Definition",
  "number": "7.3.1",
  "title": "Reflexive.",
  "body": " Reflexive  reflexive  relation reflexive  We say that a relation on a set is reflexive on whenever   "
},
{
  "id": "sec-7-3-equiv-relations-5",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-5",
  "type": "Example",
  "number": "7.3.2",
  "title": "",
  "body": " Consider the following set    and consider the relation on defined as   or as a set   notice that for every element of it is in an ordered pair with itself, and hence is reflexive.  "
},
{
  "id": "sec-7-3-equiv-relations-7",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-7",
  "type": "Example",
  "number": "7.3.3",
  "title": "",
  "body": " Consider the relation on defined as  Prove:  is reflexive    To prove this we let , to show is included in an order pair with membership to amounts to proving an existential.  That is we will need to produce an integer to create an ordered pair with . Well, that integer is .  To see this simply note that and since is an integer by definition of divides divides , and hence .  Since we have chosen arbitrary we can conclude that is reflexive as desired.    "
},
{
  "id": "sec-7-3-equiv-relations-8",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-8",
  "type": "Example",
  "number": "7.3.4",
  "title": "",
  "body": " Let be a set, and let be a relation on .   Prove: if is reflexive then     Assume is reflexive on . As usual to show equality of sets (don't forget relations are sets!) we will need to break our proof into two parts.     As usual, let , hence by definition we can find a such that , since is a relation on we have that .     This time, let , since we have assumed is reflexive, by definition and hence by definition of domain .  Since we have shown both and we have that as desired.    "
},
{
  "id": "def-symmetric",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#def-symmetric",
  "type": "Definition",
  "number": "7.3.5",
  "title": "Symmetric.",
  "body": " Symmetric  symmetric  relation symmetric  We say that a relation on a set is symmetric on whenever   "
},
{
  "id": "sec-7-3-equiv-relations-11",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-11",
  "type": "Example",
  "number": "7.3.6",
  "title": "",
  "body": " Consider the set and the relation on defined as This relation is symmetric to see this unlike with reflexive we need not check every element of we instead check every element of    now we have exhausted all the elements of and thus is indeed symmetric.  "
},
{
  "id": "sec-7-3-equiv-relations-13",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-13",
  "type": "Example",
  "number": "7.3.7",
  "title": "",
  "body": " Consider the relation on defined as  Prove:  is symmetric    To prove that is symmetric we must choose an arbitrary . By definition of  , by definition of divides we can find an integer such that yet since we have that and hence and thus . Hence is symmetric.    "
},
{
  "id": "sec-7-3-equiv-relations-14",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-14",
  "type": "Example",
  "number": "7.3.8",
  "title": "",
  "body": "  Prove: If is a symmetric relation on , and , then    Let be a relation on the set . Assume is a symmetric relation on and . Let . Thus by definition of relation, and definition of inverse, we can find such that . Thus, by definition of inverse, . Thus by our assumption and the definition of subset, . And, since is symmetric, . Since ,   Since and , by definition of subset,    "
},
{
  "id": "def-transitive",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#def-transitive",
  "type": "Definition",
  "number": "7.3.9",
  "title": "Transitive.",
  "body": " Transitive  transitive  relation transitive  We say that a relation on a set is transitive on whenever   "
},
{
  "id": "sec-7-3-equiv-relations-17",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-17",
  "type": "Example",
  "number": "7.3.10",
  "title": "",
  "body": " Consider the relation on defined as  Prove:  is transitive on     To prove that is transitive we must choose two elements and .  By definition of both and . Hence by the definition of divides we can find and such that and . Calculate: since is an integer we can conclude that and hence . Therefore by the definition of transitive is transitive.    "
},
{
  "id": "sec-7-3-equiv-relations-18",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-18",
  "type": "Example",
  "number": "7.3.11",
  "title": "",
  "body": "  Prove:  is transitive if and only if    Let be a relation on a non-empty set      Assume is transitive. Let . By definition of composition, we can find such that and . Since is transitive, .  Since and , by definition of subset, .     Assume . Let and . Since and , by definition of composition, . Hence by our assumption that , and definition of subset, .  Thus, by definition of transitive, is transitive.   "
},
{
  "id": "prop-subset",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#prop-subset",
  "type": "Proposition",
  "number": "7.3.12",
  "title": "",
  "body": " Let be a non-empty set. For the power set , the relation \"is a subset of\" is reflexive on , and transitive, but not symmetric.  "
},
{
  "id": "sec-7-3-equiv-relations-20",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-20",
  "type": "Proof",
  "number": "7.3.1",
  "title": "Proof of Proposition 7.3.12.",
  "body": " Proof of   [Reflexive]   Let . (Need To Show: ) Assume . Hence, , thus by definition of subset, and hence \"subset of\" is reflexive.   [Transitive]   Let such that and . Let . Thus by definition of subset, since , . Since , and , Thus, by definition of subset, since and , . Hence \"subset of\" is transitive.   [NOT Symmetric]   notice but as we assumed that was not empty hence \"subset of\" is not symmetric.  "
},
{
  "id": "def-equivalence-relation",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#def-equivalence-relation",
  "type": "Definition",
  "number": "7.3.13",
  "title": "Equivalence Relation.",
  "body": " Equivalence Relation  equivalence relation  relation equivalence relation   A relation on a set is an equivalence relation on if is reflexive, symmetric, and transitive on .   "
},
{
  "id": "sec-7-3-equiv-relations-23",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-23",
  "type": "Example",
  "number": "7.3.14",
  "title": "",
  "body": " Consider the relation on defined as  Prove:  is an equivalence relation    The definition of equivalence relation has three properties:   reflexive    symmetric    transitive   thus a proof that a relation is an equivalence relation should be split into three parts.   Proof of Reflexive:   To see that is reflexive we start with an arbitrary element . Now for this relation we can calculate: since 0 is an integer is thus divisible by , and hence as desired. Therefore is reflexive.   Proof of Symmetric:   To show that is symmetric we begin by choosing a pair such that . By the definition of  thus by definition of divides we can find an integer so that and hence and since is an integer by definition of divides 5 divides thus ; therefore is symmetric.   Proof of Transitive:   To prove is transitive we begin with two arbitrary elements of , namely and . By definition of 5 divides both and , thus by definition of divides we can find integers and such that and . Now calculate: siince is an integer we have that is divisible by and thus and hence is transitive.  As we have shown that is reflexive, symmetric and transitive we have have verified that is an equivalence relation as desired!    "
},
{
  "id": "def-partiy",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#def-partiy",
  "type": "Definition",
  "number": "7.3.15",
  "title": "Parity.",
  "body": " Parity  parity   We say that two integers have the same parity when either both are even or both are odd.   "
},
{
  "id": "lem-oddplusodd",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#lem-oddplusodd",
  "type": "Lemma",
  "number": "7.3.16",
  "title": "",
  "body": "  For any integers and if is divisible by 2 then and have the same parity.   "
},
{
  "id": "sec-7-3-equiv-relations-27-1",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-27-1",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Lemma 7.3.16.",
  "body": " Proof of  We will approach this proof exhaustive, using to break us into cases.   Case 1: is even and is even   In this case we assume that we can find integers and so that and . Calculate since is an integer we have that is even, hence when and are both even that is even.   Case 2: is odd and is even   In this case we assume that we can find integers and so that and . Calculate since is an integer we have that is odd. Hence when is odd and is even then is odd.   Case 3: is even and is odd   In this case we assume we can find integers and so that and . Calculate since is an integer we have that is odd. Hence with is even and is odd is odd   Case 1: is odd and is odd   In this final case we assume we can find integers and so that and . Calculate since is an integer we conclude that is even. Therefore when is odd and is odd we have that is even.  Therefore we see that the only time that is even is exactly when and have the same parity.  "
},
{
  "id": "sec-7-3-equiv-relations-28",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-28",
  "type": "Example",
  "number": "7.3.17",
  "title": "",
  "body": " Consider the relation on defined as  Prove:  is an equivalence relation    As we are proving that is an equivalence relation we should split it into three parts.   Proof of Reflexive:   To show reflexive we start with an arbitrary element , then calculate and since is an integer we have that divisible by 2 and hence and thus is reflexive.   Proof of Symmetric:   To prove that is symmetric choose an arbitrary element , thus by definition of we have that hence we can find an integer such that , yet note that hence is divisible by 2 and therefore and hence is symmetric.   Proof of Transitive:   To prove transitive we choose elements of , namely and . By definition of membership to we have that and , that is that both and are even.  By and we can break the rest of our proof in to a couple of cases.   Case 1: is even   Assume that is even, by since we have that both is even and is even we can conclude that both and are even. Hence by the definition of even we can find integers and such that and . Calculate since is an integer we have that thus as desired.   Case 1: is odd   Assume that is odd, by then both and are odd as we have that both and are even. By definition of even we can find two integers and such that and . Calculate since is an integer we have that and thus as desired.  Hence in both cases we have that is transitive.  As we have shown that is reflexive, symmetric and transitive we have have verified that is an equivalence relation as desired!    "
},
{
  "id": "sec-7-3-equiv-relations-29",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-29",
  "type": "Example",
  "number": "7.3.18",
  "title": "",
  "body": " Let be a set and let both and be relations on .   Prove: if and are equivalence relations then is an equivalence relation.    Let be a set and let both and be relations on and assume both and are equivalence relations. To prove that is an equivalence relation we should break it down into the three conditions.   Proof of Reflexive:   To prove reflexive, we begin with an arbitrary element . Since and are equivalence relations they are in particular reflexive we have that and , hence by definition of intersection thus is reflexive.   Proof of Symmetric:   To prove symmetric, we choose an element . By definition of intersection both and . Since both and are equivalence relations in particular they are both symmetric and hence and , thus by the definition of intersection . Therefore is symmetric.   Proof of Transitive:   To prove transitive we start with elements and , by definition of intersection we have that , , and . Since both and are equivalence relations, in particular they are transitive we have that and , hence by definition of intersection . Therefore is transitive.  Hence since we have shown that is reflexive, symmetric, and transitive we have that is an equivalence relation.    "
},
{
  "id": "def-equivalence-class",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#def-equivalence-class",
  "type": "Definition",
  "number": "7.3.19",
  "title": "Equivalence Class.",
  "body": " Equivalence Class  equivalence class  equivalence relation equivalence class  Equivalence relation representative   Let be an equivalence relation on a set . For the equivalence class of modulo is the set   Each element of is called a representative of this class.   "
},
{
  "id": "def-modulo",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#def-modulo",
  "type": "Definition",
  "number": "7.3.20",
  "title": "Modulo.",
  "body": " Modulo  modulo   The set of all equivalence classes is called  modulo  ( mod )   "
},
{
  "id": "sec-7-3-equiv-relations-33",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-33",
  "type": "Example",
  "number": "7.3.21",
  "title": "",
  "body": " Consider the set and define the relation on as follows We claim that this is an equivalence relation of , yet since we just have a finite set lets just go through and find all the relations, namely We can then go through and check that all the properties of an equivalence relation, notice for example that the following are all members of (0,0), (1,1), (2,2), (3,3), (4,4) and hence is reflexive.  To continue note the following are all members of  and hence is symmetric. For transitive we check them all again that all of the following are members of  Now note the following equivalence classes:   "
},
{
  "id": "prop-equiv",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#prop-equiv",
  "type": "Proposition",
  "number": "7.3.22",
  "title": "",
  "body": "  Let be an equivalence relation on a nonempty set . For all and in ,   and  if and only if  is not related to if and only if    "
},
{
  "id": "sec-7-3-equiv-relations-35",
  "level": "2",
  "url": "sec-7-3-equiv-relations.html#sec-7-3-equiv-relations-35",
  "type": "Proof",
  "number": "7.3.2",
  "title": "Proof of Proposition 7.3.22.",
  "body": " Proof of  We prove part (a) and part (b), leaving part (c) as an exercise.  Proof of part (a)     Let , since is an equivalence relation, in particular it is reflexive, thus , hence by definition of ,      Let . Thus by definition of , . Hence, . Since is a relation on , . Hence by definition of cross product, .  Proof of (b) if and only if   Let be a relation on a non-empty set      Let , as our objective is to prove equality of sets we should break it into two parts.     Let . Thus by definition of equivalence class . Since is an equivalence relation, it is symmetric, and as we assumed , we can thus conclude . Since is an equivalence relation, it is also transitive. And since we already concluded and we can now conclude .  Thus by definition of equivalence class, . Thus by definition of subset, .     let . Thus by definition of equivalence class . Since is an equivalence relation, it is transitive. And since we already concluded and , we can now conclude .  Thus by definition of equivalence class, . Thus by definition of subset,      Let and such that . Since is an equivalence relation, it is reflexive. Hence, . Thus by definition of , . Since we assumed , in particular , . By definition of , . Since is an equivalence relation, it is symmetric. Since we concluded , we can conclude   "
},
{
  "id": "sec-7-5-patitions",
  "level": "1",
  "url": "sec-7-5-patitions.html",
  "type": "Section",
  "number": "7.4",
  "title": "Partitions",
  "body": " Partitions  When I say partition you already have a sense of the word, like wall or a fence, it brings to mind separate areas or groups. We make this concept inside of a set more formal in our following definition.   Partition  partition   Let be a non-empty set. is a partition of if is a set of subsets of such that:    If     If and , then or            This is quite rigorous of a definition but do not loose that this is simply separating things into separate non-overlapping groups somewhat like a drawer organizer.   Sets at their heart have no defining characteristics, so we often draw them as blobs with no discernible shape so as we do not accidentally divine some pattern that does not exist. We then visualize a partition as a sectioning off of this amorphous blob as in the following figure, where we have an arbitrary set and a family of subsets which partition .    Consider the set containing the following elements   and consider the family of subsets , where each set is defined as follows   Notice that all of the subsets are non-empty (condition (i))any two sets that are not the same share no toys (condition (ii)), and that they indeed include all of the toys (condition (iii))     Consider the family of set where each set is defined as follows for any   Prove:  is a partition of .    There are three conditions to being a partition, so we will split our proof into three parts:   Condition (i)   Let , notice that and since is an integer we can conclude that divides and hence .  Therefore for any we have that , thus proving that satisfies condition (i) of a partition.   Condition (ii)   Let and be arbitrary natural numbers, assume that , and hence we can find at least one mutual element of and , name one of these elements . By definition of and we have that both and . By definition of divides we can find two integers and so that and , hence we can calculate For a similar calculation,   (If perhaps you have felt lost in this proof so far, we are using the concluding an or technique from ) It is our desire to show equality of these two sets, as usual, breaking our proof in to two more parts     let by definition of this means that thus by definition of divides we can find a such that , thus calculate and since is an integer we can conclude that 3 divides hence we have that as desired.     let by definition of this means that , by definition of divides we can find an integer so that . Now calculate since is an integer we have that divides and hence as desired.  since we have shown both and we have shown we can conclude that . Furthermore, this proves that satisfies condition (ii) of being a partition.   Condition (iii)   For this last condition we again should show to containments of sets     For this part let , by definition of union over a family, we can find a such that , yet by definition of we have that as desired. (most texts would call this the obvious direction)     Now, let , Calculate and since 0 is an integer we have that 3 divides , hence therefore as desired.  Since we have shown both and we can conclude , thus satisfies condition (iii) of being a partition.  Since we have shown the three conditions of being a partition we can conclude that is a partition.     It turns out that this last example is actually a quite apt example of partitions. Partitions turn out not to be something new, they are actually just equivalence relations. We make this comment more precise in the following two propositions.    If is an equivalence relation on a non-empty set then is a partition of .      Proof of  Let be an equivalence relation on a non-empty set .  There are three conditions to being a partition, so we will split our proof into three parts   Condition (i)   Let , then since is an equivalence relation, in particular is reflexive, thus we have thus and hence , thus satisfies condition (i) of being a partition.   Condition (ii)   let and , and assume that , then by (b) we can conclude that , and hence satisfies condition (ii) of being a partition.   Condition (iii)   We will split this condition into two parts     Let , hence we can find a such that , by (a) we have that and hence as desired.     Let , then since is an equivalence relation, in particular it is reflexive, thus and hence therefore as desired.  Since we have shown that both and we can conclude that , therefore we have shown that satisfies condition(iii) of being a partition.  Since we have shown the three conditions of being a partition we can conclude that is a partition.      Let be a partition of a nonempty set . For and define if and only if there exists such that and . Then is an equivalence relation on .     Proof of  We will prove the three conditions for to be an equivalence relation.   [Reflexive]   let . Since is a partition, we have that . Hence we can find a such that . Hence, , since and .   [Symmetric]   Let . By definition of we can find such that and . Hence, and . Thus by definition of , .   [Transitive]   Let and . By definition of we can find such that and , and and . Hence, . Hence . Hence by definition of partition, . Hence and . Hence by definition of .  Since satisfies the three conditions of being an equivalence relation it is an equivalence relation as desired.   "
},
{
  "id": "def-partition",
  "level": "2",
  "url": "sec-7-5-patitions.html#def-partition",
  "type": "Definition",
  "number": "7.4.1",
  "title": "Partition.",
  "body": " Partition  partition   Let be a non-empty set. is a partition of if is a set of subsets of such that:    If     If and , then or           "
},
{
  "id": "sec-7-5-patitions-8",
  "level": "2",
  "url": "sec-7-5-patitions.html#sec-7-5-patitions-8",
  "type": "Example",
  "number": "7.4.2",
  "title": "",
  "body": " Consider the set containing the following elements   and consider the family of subsets , where each set is defined as follows   Notice that all of the subsets are non-empty (condition (i))any two sets that are not the same share no toys (condition (ii)), and that they indeed include all of the toys (condition (iii))   "
},
{
  "id": "sec-7-5-patitions-9",
  "level": "2",
  "url": "sec-7-5-patitions.html#sec-7-5-patitions-9",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": " Consider the family of set where each set is defined as follows for any   Prove:  is a partition of .    There are three conditions to being a partition, so we will split our proof into three parts:   Condition (i)   Let , notice that and since is an integer we can conclude that divides and hence .  Therefore for any we have that , thus proving that satisfies condition (i) of a partition.   Condition (ii)   Let and be arbitrary natural numbers, assume that , and hence we can find at least one mutual element of and , name one of these elements . By definition of and we have that both and . By definition of divides we can find two integers and so that and , hence we can calculate For a similar calculation,   (If perhaps you have felt lost in this proof so far, we are using the concluding an or technique from ) It is our desire to show equality of these two sets, as usual, breaking our proof in to two more parts     let by definition of this means that thus by definition of divides we can find a such that , thus calculate and since is an integer we can conclude that 3 divides hence we have that as desired.     let by definition of this means that , by definition of divides we can find an integer so that . Now calculate since is an integer we have that divides and hence as desired.  since we have shown both and we have shown we can conclude that . Furthermore, this proves that satisfies condition (ii) of being a partition.   Condition (iii)   For this last condition we again should show to containments of sets     For this part let , by definition of union over a family, we can find a such that , yet by definition of we have that as desired. (most texts would call this the obvious direction)     Now, let , Calculate and since 0 is an integer we have that 3 divides , hence therefore as desired.  Since we have shown both and we can conclude , thus satisfies condition (iii) of being a partition.  Since we have shown the three conditions of being a partition we can conclude that is a partition.    "
},
{
  "id": "thm-equiv-is-partition",
  "level": "2",
  "url": "sec-7-5-patitions.html#thm-equiv-is-partition",
  "type": "Proposition",
  "number": "7.4.4",
  "title": "",
  "body": "  If is an equivalence relation on a non-empty set then is a partition of .   "
},
{
  "id": "sec-7-5-patitions-12-1",
  "level": "2",
  "url": "sec-7-5-patitions.html#sec-7-5-patitions-12-1",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Proposition 7.4.4.",
  "body": " Proof of  Let be an equivalence relation on a non-empty set .  There are three conditions to being a partition, so we will split our proof into three parts   Condition (i)   Let , then since is an equivalence relation, in particular is reflexive, thus we have thus and hence , thus satisfies condition (i) of being a partition.   Condition (ii)   let and , and assume that , then by (b) we can conclude that , and hence satisfies condition (ii) of being a partition.   Condition (iii)   We will split this condition into two parts     Let , hence we can find a such that , by (a) we have that and hence as desired.     Let , then since is an equivalence relation, in particular it is reflexive, thus and hence therefore as desired.  Since we have shown that both and we can conclude that , therefore we have shown that satisfies condition(iii) of being a partition.  Since we have shown the three conditions of being a partition we can conclude that is a partition.  "
},
{
  "id": "thm-partition-is-equiv",
  "level": "2",
  "url": "sec-7-5-patitions.html#thm-partition-is-equiv",
  "type": "Proposition",
  "number": "7.4.5",
  "title": "",
  "body": "  Let be a partition of a nonempty set . For and define if and only if there exists such that and . Then is an equivalence relation on .   "
},
{
  "id": "sec-7-5-patitions-14",
  "level": "2",
  "url": "sec-7-5-patitions.html#sec-7-5-patitions-14",
  "type": "Proof",
  "number": "7.4.1",
  "title": "Proof of Proposition 7.4.5.",
  "body": " Proof of  We will prove the three conditions for to be an equivalence relation.   [Reflexive]   let . Since is a partition, we have that . Hence we can find a such that . Hence, , since and .   [Symmetric]   Let . By definition of we can find such that and . Hence, and . Thus by definition of , .   [Transitive]   Let and . By definition of we can find such that and , and and . Hence, . Hence . Hence by definition of partition, . Hence and . Hence by definition of .  Since satisfies the three conditions of being an equivalence relation it is an equivalence relation as desired.  "
},
{
  "id": "sec-7-6-functions",
  "level": "1",
  "url": "sec-7-6-functions.html",
  "type": "Section",
  "number": "7.5",
  "title": "Functions",
  "body": " Functions  Functions are important no matter the field you go into, and you have had a lot of experience with functions up to this point. Let's now formalize the definition of function as a specific type of relation.   Function  function  mapping  function domain  mapping domain  function codomain  mapping codomain  codomain   A function , or mapping , from to is a relation from to such that:    The domain of is .    If and then     For a function we write We say  or   The set is called the codomain of .  In the case where , we say that   When , we write .    At first glance condition (ii) may look foreign to you, yet in your calculus and college algebra classes you probably just called this the vertical line test, seen in this next example.   We saw that equals was a relation at the beginning of this chapter in , indeed it is also a function. To use it in the our new context of functions, define the function as    Notice that where we choose to draw a vertical line is the choice of an element of the domain of , i.e. an element of , and the condition that the vertical line only hits the graph once is the condition the f(x) has only one output, as is condition (ii) of being a function.    Notice that the eats relation from is not a function as both   and   So lets consider a slightly different relation, by putting the turtle on a diet, defined as the following   Now it makes sense to use the of notation of functions because for example there is only one way to write the following:     Consider the relation from to defined as  Prove:  is a function    To prove that is a function we need to show the two conditions of being a function.   Condition (i)   The first condition is an equality of sets, per usual we will split this into two parts     Let by definition of we have that as desired. (the room chants obviously! )     Let , then by definition of , as desired.  Since we have shown both and we can conclude . Therefore we have shown that satisfies condition (i) of being a function.   Condition (ii)   Assume and , hence by definition of we have that and that hence as desired.  Since we have shown both conditions to be a function we can conclude that is a function.     The jump from relations to functions can be jarring to students especially with all of the corresponding notations, we take a moment now and attempt to make sense of them.   Functions VS Relations  Let and be sets, and consider a function .  At the root a function is just a relation and hence   Instead of writing or we write , moreover we most often don't write the , that is we have .  To put this context of relations once again (and hopefully not make it too much more convoluted) we have and perhaps the most labyrinthine interpretation where represents the relation and is the element of related to via .    The next concepts come up over and over again in algebra, analysis and topology.   Image  image  function image   Let , and let , The image of (or image set ) is defined as        Consider the following set    and the subset    Now define the funciton as follows   Then we can visualize the image of , , as follows     Inverse Image  inverse image  function inverse image   Let , and let , The inverse image of (or inverse image set ) is defined as        The inverse image should not be confused with the inverse relation.    Consider the same set and function from . This time define the subset as   We can then visualize the preimage of , , as follows.      Let and be subsets of , and and be subsets of .                 Proof of   Proof of (a)   Let . Thus by definition of image, we can find a such that . By definition of intersect, and . Since , by definition of image, as well. Since , by definition of image, . Thus, by definition of intersection, .   Proof of (b)   To show equality we should as usual break it into two parts.     Let . Thus by definition of inverse image, . Thus by definition of intersection, and . By definition of inverse image, and . Hence, by definition of intersection, .     Let hence by definition of intersection and . By definition of inverse image we have that both and hence by definition of intersection we have that . Therefore by definition of preimage we have that as desired.  Since we have shown and we can thus conclude    Let's end this section with a couple more examples of proofs involving these new concepts.   Let and    Prove:    Let . By the definition of image, we can find such that . By definition of inverse image, . Thus, since we have that , therefore .     Let , and let , , , and .   Prove: .   As this is a proof of equality of sets we should break the proof into two pieces.     Let . By defintion of difference, and . By definition of inverse image, and . By definition of difference, . Thus, by definition of inverse image, .     Let by definition of inverse image , by definition of difference and hence by definition of inverse image and , thus by definition of difference   Since we have shown both and we can conclude     "
},
{
  "id": "def-function",
  "level": "2",
  "url": "sec-7-6-functions.html#def-function",
  "type": "Definition",
  "number": "7.5.1",
  "title": "Function.",
  "body": " Function  function  mapping  function domain  mapping domain  function codomain  mapping codomain  codomain   A function , or mapping , from to is a relation from to such that:    The domain of is .    If and then     For a function we write We say  or   The set is called the codomain of .  In the case where , we say that   When , we write .   "
},
{
  "id": "sec-7-6-functions-5",
  "level": "2",
  "url": "sec-7-6-functions.html#sec-7-6-functions-5",
  "type": "Example",
  "number": "7.5.2",
  "title": "",
  "body": " We saw that equals was a relation at the beginning of this chapter in , indeed it is also a function. To use it in the our new context of functions, define the function as    Notice that where we choose to draw a vertical line is the choice of an element of the domain of , i.e. an element of , and the condition that the vertical line only hits the graph once is the condition the f(x) has only one output, as is condition (ii) of being a function.  "
},
{
  "id": "sec-7-6-functions-6",
  "level": "2",
  "url": "sec-7-6-functions.html#sec-7-6-functions-6",
  "type": "Example",
  "number": "7.5.3",
  "title": "",
  "body": " Notice that the eats relation from is not a function as both   and   So lets consider a slightly different relation, by putting the turtle on a diet, defined as the following   Now it makes sense to use the of notation of functions because for example there is only one way to write the following:   "
},
{
  "id": "ex-is-a-function",
  "level": "2",
  "url": "sec-7-6-functions.html#ex-is-a-function",
  "type": "Example",
  "number": "7.5.4",
  "title": "",
  "body": " Consider the relation from to defined as  Prove:  is a function    To prove that is a function we need to show the two conditions of being a function.   Condition (i)   The first condition is an equality of sets, per usual we will split this into two parts     Let by definition of we have that as desired. (the room chants obviously! )     Let , then by definition of , as desired.  Since we have shown both and we can conclude . Therefore we have shown that satisfies condition (i) of being a function.   Condition (ii)   Assume and , hence by definition of we have that and that hence as desired.  Since we have shown both conditions to be a function we can conclude that is a function.    "
},
{
  "id": "def-image",
  "level": "2",
  "url": "sec-7-6-functions.html#def-image",
  "type": "Definition",
  "number": "7.5.5",
  "title": "Image.",
  "body": " Image  image  function image   Let , and let , The image of (or image set ) is defined as      "
},
{
  "id": "ex-image",
  "level": "2",
  "url": "sec-7-6-functions.html#ex-image",
  "type": "Example",
  "number": "7.5.6",
  "title": "",
  "body": " Consider the following set    and the subset    Now define the funciton as follows   Then we can visualize the image of , , as follows   "
},
{
  "id": "def-inverse-image",
  "level": "2",
  "url": "sec-7-6-functions.html#def-inverse-image",
  "type": "Definition",
  "number": "7.5.7",
  "title": "Inverse Image.",
  "body": " Inverse Image  inverse image  function inverse image   Let , and let , The inverse image of (or inverse image set ) is defined as      "
},
{
  "id": "sec-7-6-functions-14",
  "level": "2",
  "url": "sec-7-6-functions.html#sec-7-6-functions-14",
  "type": "Note",
  "number": "7.5.8",
  "title": "",
  "body": " The inverse image should not be confused with the inverse relation.  "
},
{
  "id": "sec-7-6-functions-15",
  "level": "2",
  "url": "sec-7-6-functions.html#sec-7-6-functions-15",
  "type": "Example",
  "number": "7.5.9",
  "title": "",
  "body": " Consider the same set and function from . This time define the subset as   We can then visualize the preimage of , , as follows.   "
},
{
  "id": "prop-image",
  "level": "2",
  "url": "sec-7-6-functions.html#prop-image",
  "type": "Proposition",
  "number": "7.5.10",
  "title": "",
  "body": "  Let and be subsets of , and and be subsets of .               "
},
{
  "id": "sec-7-6-functions-17",
  "level": "2",
  "url": "sec-7-6-functions.html#sec-7-6-functions-17",
  "type": "Proof",
  "number": "7.5.1",
  "title": "Proof of Proposition 7.5.10.",
  "body": " Proof of   Proof of (a)   Let . Thus by definition of image, we can find a such that . By definition of intersect, and . Since , by definition of image, as well. Since , by definition of image, . Thus, by definition of intersection, .   Proof of (b)   To show equality we should as usual break it into two parts.     Let . Thus by definition of inverse image, . Thus by definition of intersection, and . By definition of inverse image, and . Hence, by definition of intersection, .     Let hence by definition of intersection and . By definition of inverse image we have that both and hence by definition of intersection we have that . Therefore by definition of preimage we have that as desired.  Since we have shown and we can thus conclude   "
},
{
  "id": "sec-7-6-functions-19",
  "level": "2",
  "url": "sec-7-6-functions.html#sec-7-6-functions-19",
  "type": "Example",
  "number": "7.5.11",
  "title": "",
  "body": " Let and    Prove:    Let . By the definition of image, we can find such that . By definition of inverse image, . Thus, since we have that , therefore .   "
},
{
  "id": "sec-7-6-functions-20",
  "level": "2",
  "url": "sec-7-6-functions.html#sec-7-6-functions-20",
  "type": "Example",
  "number": "7.5.12",
  "title": "",
  "body": " Let , and let , , , and .   Prove: .   As this is a proof of equality of sets we should break the proof into two pieces.     Let . By defintion of difference, and . By definition of inverse image, and . By definition of difference, . Thus, by definition of inverse image, .     Let by definition of inverse image , by definition of difference and hence by definition of inverse image and , thus by definition of difference   Since we have shown both and we can conclude    "
},
{
  "id": "sec-7-7-bijections",
  "level": "1",
  "url": "sec-7-7-bijections.html",
  "type": "Section",
  "number": "7.6",
  "title": "Bijections",
  "body": " Bijections  The concept of something being the same as something else is ubiquitous in mathematics. In this course we have already seen that equals is not as easy as it may of first seemed when dealing with sets. The bijection is how we go about in our combinatorics, algebra, and many other classes to show two objects we are studying are the same .   Surjection  surjecction  function surjection  onto  function onto   A function is onto  , or is a surjection means . When is a surjection, we write or .     To actually prove using this definition it is helpful to eliminate the need to reference the definition of range. Thus we will most often use the definition that a function is a surjection means      A function that is surjective just needs to hit every element in the codomain. Consider the two sets and and consider the function defined as     Consider the function from defined as  Prove:  is surjective    The definition of surjective involves an equality of sets, so we break our proof into two parts.     Let by definition of range we can find an such that , yet by definition of we have that , since both and are integers we can conclude that is an integer and thus as desired.     Let , by we can find two integers and such that such that . Since we have that or or , splitting our proof into 3 cases   Case 1: Assume   In this case since and 0 is also an integer we have that hence and thus as desired.   Case 2: Assume   For this case note that hence and -1 are integers we have that hence thus as desired.   Case 3: Assume   In this case since and 1 are integers we have that hence , therefore as desired.  Because we have shown no matter what is that we can conclude that   Since we have shown both and we can conclude , therefore we have shown that is surjective.     Before we jump into our next example, lets shed a little light on composing functions.   Composing Functions  Once again functions are just relations, thus we have already defined how to compose them.  For example considering three sets , , and and two functions and we can then consider the composition .  When we were dealing with relations we would have taken a pair to only be a member of when we could find an element such that and , with a function this element is self evident, it is since means . Furthermore, since we know we have such a (another reason that the notation even makes sense).  That is we interpret the composition of functions as     Let and be functions.   Prove: If is surjective then is surjective    Assume that is surjective. To prove that is surjective we need to show an equality of sets, so break it into the usual parts.     Let by definition of range we can find an such that hence by definition of we have that as desired.     Let , since we have assumed that is surjective, in particular we have that thus by definition of range we can find a such that , that is , and by definition of we have that , hence we have that .  Since we have shown both and we can conclude that , hence we have shown that is surjective.      Injection  injection  function injection  function one-to-one  one-to-one   A function is one-to-one , or is an injection , means  whenever then .  We write this as , or .     A function that is injective just needs that no two inputs hit the same output. Consider, again, the two sets and and consider this time the function defined as     Consider the function defined for any as  Prove:  is an injective function.    We leave the task of proving that is indeed a function to the reader, and we prove that is injective.  Let and such that by definition of this means , subtracting five on both sides of the equation gives us as desired.     Notice that the function from is not one-to-one since yet .    Prove: If is one-to-one and is one-to-one, then is one-to-one.   Assume and . Let and such that .  By definition of function we can have that  .  By assumption that , that is . By our assumption that is one-to-one, . Thus, by our assumption that is one-to-one, . Hence is one-to-one       is a function from Rng( ) to if and only if is one-to-one.     Proof of  As we are to prove a biconditional we will split the proof into two parts.     Assume is one-to-one. We have defined the inverse of a relation in , so what we want to show is that is a function. To show a relation is a function we need to show that it satisfies both conditions to being a function.   Proof of Condition (i):   This first condition is the equality of sets, namely this was proven in .   Proof of Condition (ii)   Let , and such that and . By definition of inverse, and . Thus, by our assumption, as desired.     Let and such that . Name this element . By definition of inverse, and . Thus, by our assumption that is a function by condition (i) of being a function we have, as desired.   Now we have set up all the pieces we need to define a bijection.   Bijection  bijection  function bijection  function one-to-one correspondence  one-to-one correspondence   A function is a one-to-one correspondence , or a bijection means   is one-to-one and onto .  We write this as      A function that is bijective needs that no two inputs hit the same output, as well as to reach every element of the codomain. Consider, again, the two sets and and consider this time the function defined as     Consider the function defined for any as  Prove:  is a bijection.    To show this function is a bijection we will need to show it is injective and surjective.   Proof of one-to-one:   Let and be two arbitrary integers, such that by definition of we have that and therefore , adding two to both sides of the equations leaves us with as desired.   Proof of onto:   To show our desired equality of sets we split into two parts.     Let , by definition of range we can find an integer such that by the definition of we have that , since both and 2 are integers we have that is an integer and hence as desired.     Let , note to show that we have membership of we need to produce an integer so that maps this new integer to . This is an existential, and the way we produce this element in unimportant to the proof. Notice that since and 2 are integers we have that is an integer, and notice that and hence by definition of range we have that as desired.  Because we have shown that and we can conclude that , therefore we have that is onto as desired.  Since we have shown that is both one-to-one and onto we have that is a bijection.       If is a bijection, and is a bijection, then is a bijection.     Proof of  Assume is a bijection from to and is a bijection from to .   [Proof of one-to-one]   Let and such that , hence   By our assumption is a bijection, in particular one-to-one, this implies . Since is a bijection, in particular one-to-one, , therefore is one-to-one as desired.   [Proof of Onto]      Let . By definition of range, . Thus, Rng .     Let . Thus by our assumption that is a bijection, specifically surjective, we can find such that , and since is a bijection, specifically surjective.  Thus by assumption that is a bijection, specifically surjective, we can find such that . Thus by definition of composition, . Hence, . Thus .  Since we have shown that both and we can conclude so that we can conclude that is onto as desired.  Thus, is a bijection.   "
},
{
  "id": "def-surjection",
  "level": "2",
  "url": "sec-7-7-bijections.html#def-surjection",
  "type": "Definition",
  "number": "7.6.1",
  "title": "Surjection.",
  "body": " Surjection  surjecction  function surjection  onto  function onto   A function is onto  , or is a surjection means . When is a surjection, we write or .   "
},
{
  "id": "sec-7-7-bijections-4",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-4",
  "type": "Note",
  "number": "7.6.2",
  "title": "",
  "body": " To actually prove using this definition it is helpful to eliminate the need to reference the definition of range. Thus we will most often use the definition that a function is a surjection means    "
},
{
  "id": "sec-7-7-bijections-5",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-5",
  "type": "Example",
  "number": "7.6.3",
  "title": "",
  "body": " A function that is surjective just needs to hit every element in the codomain. Consider the two sets and and consider the function defined as   "
},
{
  "id": "ex-surj-numbers",
  "level": "2",
  "url": "sec-7-7-bijections.html#ex-surj-numbers",
  "type": "Example",
  "number": "7.6.4",
  "title": "",
  "body": " Consider the function from defined as  Prove:  is surjective    The definition of surjective involves an equality of sets, so we break our proof into two parts.     Let by definition of range we can find an such that , yet by definition of we have that , since both and are integers we can conclude that is an integer and thus as desired.     Let , by we can find two integers and such that such that . Since we have that or or , splitting our proof into 3 cases   Case 1: Assume   In this case since and 0 is also an integer we have that hence and thus as desired.   Case 2: Assume   For this case note that hence and -1 are integers we have that hence thus as desired.   Case 3: Assume   In this case since and 1 are integers we have that hence , therefore as desired.  Because we have shown no matter what is that we can conclude that   Since we have shown both and we can conclude , therefore we have shown that is surjective.    "
},
{
  "id": "sec-7-7-bijections-9",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-9",
  "type": "Example",
  "number": "7.6.5",
  "title": "",
  "body": " Let and be functions.   Prove: If is surjective then is surjective    Assume that is surjective. To prove that is surjective we need to show an equality of sets, so break it into the usual parts.     Let by definition of range we can find an such that hence by definition of we have that as desired.     Let , since we have assumed that is surjective, in particular we have that thus by definition of range we can find a such that , that is , and by definition of we have that , hence we have that .  Since we have shown both and we can conclude that , hence we have shown that is surjective.    "
},
{
  "id": "def-injection",
  "level": "2",
  "url": "sec-7-7-bijections.html#def-injection",
  "type": "Definition",
  "number": "7.6.6",
  "title": "Injection.",
  "body": " Injection  injection  function injection  function one-to-one  one-to-one   A function is one-to-one , or is an injection , means  whenever then .  We write this as , or .   "
},
{
  "id": "sec-7-7-bijections-11",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-11",
  "type": "Example",
  "number": "7.6.7",
  "title": "",
  "body": " A function that is injective just needs that no two inputs hit the same output. Consider, again, the two sets and and consider this time the function defined as   "
},
{
  "id": "sec-7-7-bijections-12",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-12",
  "type": "Example",
  "number": "7.6.8",
  "title": "",
  "body": " Consider the function defined for any as  Prove:  is an injective function.    We leave the task of proving that is indeed a function to the reader, and we prove that is injective.  Let and such that by definition of this means , subtracting five on both sides of the equation gives us as desired.    "
},
{
  "id": "sec-7-7-bijections-14",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-14",
  "type": "Example",
  "number": "7.6.9",
  "title": "",
  "body": "  Prove: If is one-to-one and is one-to-one, then is one-to-one.   Assume and . Let and such that .  By definition of function we can have that  .  By assumption that , that is . By our assumption that is one-to-one, . Thus, by our assumption that is one-to-one, . Hence is one-to-one   "
},
{
  "id": "prop-inverse",
  "level": "2",
  "url": "sec-7-7-bijections.html#prop-inverse",
  "type": "Proposition",
  "number": "7.6.10",
  "title": "",
  "body": "   is a function from Rng( ) to if and only if is one-to-one.   "
},
{
  "id": "sec-7-7-bijections-16",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-16",
  "type": "Proof",
  "number": "7.6.1",
  "title": "Proof of Proposition 7.6.10.",
  "body": " Proof of  As we are to prove a biconditional we will split the proof into two parts.     Assume is one-to-one. We have defined the inverse of a relation in , so what we want to show is that is a function. To show a relation is a function we need to show that it satisfies both conditions to being a function.   Proof of Condition (i):   This first condition is the equality of sets, namely this was proven in .   Proof of Condition (ii)   Let , and such that and . By definition of inverse, and . Thus, by our assumption, as desired.     Let and such that . Name this element . By definition of inverse, and . Thus, by our assumption that is a function by condition (i) of being a function we have, as desired.  "
},
{
  "id": "def-bijection",
  "level": "2",
  "url": "sec-7-7-bijections.html#def-bijection",
  "type": "Definition",
  "number": "7.6.11",
  "title": "Bijection.",
  "body": " Bijection  bijection  function bijection  function one-to-one correspondence  one-to-one correspondence   A function is a one-to-one correspondence , or a bijection means   is one-to-one and onto .  We write this as    "
},
{
  "id": "sec-7-7-bijections-19",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-19",
  "type": "Example",
  "number": "7.6.12",
  "title": "",
  "body": " A function that is bijective needs that no two inputs hit the same output, as well as to reach every element of the codomain. Consider, again, the two sets and and consider this time the function defined as   "
},
{
  "id": "sec-7-7-bijections-20",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-20",
  "type": "Example",
  "number": "7.6.13",
  "title": "",
  "body": " Consider the function defined for any as  Prove:  is a bijection.    To show this function is a bijection we will need to show it is injective and surjective.   Proof of one-to-one:   Let and be two arbitrary integers, such that by definition of we have that and therefore , adding two to both sides of the equations leaves us with as desired.   Proof of onto:   To show our desired equality of sets we split into two parts.     Let , by definition of range we can find an integer such that by the definition of we have that , since both and 2 are integers we have that is an integer and hence as desired.     Let , note to show that we have membership of we need to produce an integer so that maps this new integer to . This is an existential, and the way we produce this element in unimportant to the proof. Notice that since and 2 are integers we have that is an integer, and notice that and hence by definition of range we have that as desired.  Because we have shown that and we can conclude that , therefore we have that is onto as desired.  Since we have shown that is both one-to-one and onto we have that is a bijection.    "
},
{
  "id": "prop-bij-comp",
  "level": "2",
  "url": "sec-7-7-bijections.html#prop-bij-comp",
  "type": "Proposition",
  "number": "7.6.14",
  "title": "",
  "body": "  If is a bijection, and is a bijection, then is a bijection.   "
},
{
  "id": "sec-7-7-bijections-22",
  "level": "2",
  "url": "sec-7-7-bijections.html#sec-7-7-bijections-22",
  "type": "Proof",
  "number": "7.6.2",
  "title": "Proof of Proposition 7.6.14.",
  "body": " Proof of  Assume is a bijection from to and is a bijection from to .   [Proof of one-to-one]   Let and such that , hence   By our assumption is a bijection, in particular one-to-one, this implies . Since is a bijection, in particular one-to-one, , therefore is one-to-one as desired.   [Proof of Onto]      Let . By definition of range, . Thus, Rng .     Let . Thus by our assumption that is a bijection, specifically surjective, we can find such that , and since is a bijection, specifically surjective.  Thus by assumption that is a bijection, specifically surjective, we can find such that . Thus by definition of composition, . Hence, . Thus .  Since we have shown that both and we can conclude so that we can conclude that is onto as desired.  Thus, is a bijection.  "
},
{
  "id": "sec-7-8-ch08-exercies",
  "level": "1",
  "url": "sec-7-8-ch08-exercies.html",
  "type": "Section",
  "number": "7.7",
  "title": "Exercises",
  "body": " Exercises     Rng( ) = Dom( )     and           is a reflexive relation on if and only if .     is symmetric if and only if .    Suppose that and are equivalence relations on a set . Prove that is an equivalence relation on .    Prove that if is a symmetric, transitive relation on , and the domain of is , then is reflexive on .    Let be a relation on the set . Prove that is symmetric.    If is onto and is onto , then is onto .    Let and . If is one-to-one, then is one-to-one.    Let and . If is one-to-one and onto , then if and only if or .                   Prove that defines a surjective function from to but not injective.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
