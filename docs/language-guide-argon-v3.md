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

