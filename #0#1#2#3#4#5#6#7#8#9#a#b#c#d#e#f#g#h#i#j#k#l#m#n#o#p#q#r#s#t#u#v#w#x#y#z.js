'use babel';

import #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zView from './#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z-view';
import { CompositeDisposable } from 'atom';

export default {

  #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zView = new #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zView(state.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zView.destroy();
  },

  serialize() {
    return {
      #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zViewState: this.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zView.serialize()
    };
  },

  toggle() {
    console.log('#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
