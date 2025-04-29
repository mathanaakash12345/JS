class Object_int {
  constructor(name) {
    this.name = name;
    this.ref = [];
    this.marked = false;
  }

  addrefernce(obj) {
    this.ref.push(obj);
  }
}

class GC {
  constructor() {
    this.objects = [];
  }

  obj_create(name) {
    const o = new Object_int(name);
    this.objects.push(o);
    return o;
  }

  mark(object) {
    if (object.marked) {
      return;
    }
    object.marked = true;
    for (const refe of object.ref) {
      this.mark(refe);
    }
  }

  sweep() {
    const using = [];
    for (let ob of this.objects) {
      if (ob.marked) {
        ob.marked = false;
        using.push(ob);
      } else {
        console.log("Collecting Garbage:", ob.name);
      }
    }
    this.objects = using;
  }

  collect_garbage(root) {
    for (let r of root) {
      this.mark(r);
    }

    this.sweep();
  }
}

const g = new GC();

// object creation

const A = g.obj_create("a");
const B = g.obj_create("b");
const C = g.obj_create("c");
const D = g.obj_create("d");
const E = g.obj_create("e");

// Reference

A.addrefernce(B);
A.addrefernce(D);
D.addrefernce(E);

const root = [A];

g.collect_garbage(root);
