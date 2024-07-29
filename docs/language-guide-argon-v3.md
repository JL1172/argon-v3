# Complete Language Guide For Argon V3

## Data Types

- Booleans true || false
- Numbers (same as javascript) double precision floating point
- Strings 
- Nil (same as null)

## Expressions 

### Arithmetic 

```
+
-
/
*
```

* `-` used to negate a number
* only operand that can be used outside of arithmetic is `+` operator for concatenating strings 

### Comparison and equality

```
< 
>
<=
>=
==
!= 
```

* Can only use comparison (*less than or equal to etc*) on numbers
* Can test two values of any *type* for equality and inequality

```
1==2 //false
"cat" != "dog" //true
123=="123" //false values of difference types are never equivalent because type coercion does not happen at equality checking. no no to implicit conversions
```

### Logical Operators

- and for && 
- or for || 
- ! for not

* did not implement && or || because bitwise operations are not implemented in Argon

### Precedence and grouping 

- The operators all have same precedence, but in order to add higher priority to operator, add `()` around operator and its operands

## Statements 

* where an expression's mainb job is to produce a *value*, a statement's job is to produce an *effect*

#### Some Examples of statements

```
print "hello world";
```

* an expression followed by a semicolon is an *expression statement*

### Variables 

* You declare variabels using *var* statements. if you omit the initializer, the variable's value default to *nil*


