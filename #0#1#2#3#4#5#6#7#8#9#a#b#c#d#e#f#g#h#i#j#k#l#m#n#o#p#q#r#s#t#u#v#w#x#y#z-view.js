'use babel';

export default class #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
