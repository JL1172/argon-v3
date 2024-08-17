# BNF inspired grammar:

```
expression -> literal | unary | binary | grouping ;
literal    -> NUMBER | STRING | "true" | "false" | "nil" l 
grouping   -> "(" expression ")" ;
unary      -> ( "-" | "!" ) expression ;
binary     -> expression operator expression ;
operator   -> "==" | "!=" | "<" | "<=" | ">" | ">=" 
            | "+"  | "-"  | "*" | "/" ; 
```