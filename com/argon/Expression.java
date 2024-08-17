package com.argon;

abstract class Expression {
    static class Binary extends Expression {
        Binary(Expression left, Token operator, Expression right) {
            this.left = left;
            this.operator = operator;
            this.right = right;
        }

        final Expression left;
        final Token operator;
        final Expression right;
    }
    static class Unary extends Expression {
        
    }
    static class Operator extends Expression {
        
    }
    static class Literal extends Expression {
        
    }
}
