'use strict';

function value_x(p) {
    console.log (p.j + p.s + " in " + p.y + "row " + p.v + p.x);
}

let p;

p = {};
p.v = "x= ";
p.x = 1
p.j = "";
p.s = "";
p.y = "first "

value_x (p);

p.x = p.x + 1;
p.y = "second "; 
p.s = "and ";
p.j = "";
value_x (p);

p.x = p.x + 1;
p.y = "third ";
p.j="lastly,"
p.s = "";
value_x (p);
