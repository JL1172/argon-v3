# Chapter 5: Representing Code 

## 5.1 Context-Free Grammars

* in previous chapter the formalism we used for defining the lexical grammar - the rules for how charater get grouped into tokens was called a *regular language* this is fine for the scanner, which emits a flat sequene of tokens. *but* regular languages aren't powerful enough to handle expressions whic hcan nest arbitrarily deeply.

* which is *why* we can use **context free grammer (CFG)**

* formal grammers: takes a set of atomic pieces it calls its "alphabet" then it defines a set of "strings" that are in the grammer. Each string is a sequence of letters in the alphabet

* in the scanner's grammar the alphabet consists of individual characters and the strings are the valid lexemens - roughly words. 

* in the syntactic grammar, each letter in the alphabet is an entire token and a string is a sequence of *tokens* - an entire expression 

**Terminology**                 **Lexical Grammar**                  **Syntactic Grammar**
-----------------------------------------------------------------------------------------
The "alphabet" is...      ->      Characters                            Tokens
-----------------------------------------------------------------------------------------
A "string" is...          ->      Lexeme or token                       Expression
-----------------------------------------------------------------------------------------
It's implemented by the...->      Scanner                               Parser
-----------------------------------------------------------------------------------------

> [!IMPORTANT]
> the parser applies semantic constraints to the language 

## 5.1.1 Rules for Grammars
* *Q:* how do we write down a grammar that contains infinite number of valid strings? - *A:* We create a finite set of rules 
* if you start with the rules you can use them to generate strings that in the grammar.
  * strings created this way are called **derivations** because each is *derived* from the rules of grammar. 
* rules are called **productions** because they produce strings in the grammar
* each production in a context-free grammar has a **head** - its name - and a **body** - which describes what it generates
  * in its pure form the body is simply a list of symbols, which can be one of the two: 
    * a **terminal** is a letter from the grammar's alphabet. you can think of it like a literal value. in te syntactic grammar we''re defining hte terminals are individual lexems - tokens coming from the scanner like `if` of `1234`
  * a **nonterminal** is a named reference to another rule in the grammar. it means "play that rule and insert whatever it produces here"

* BNF is a popular grammar. 
> [!IMPORTANT] 
> each rule has a name followed by an arrow -> followed by a sequence of symbols and finally ending with a semicolon.
