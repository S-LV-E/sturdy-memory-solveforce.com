'use babel';

import #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z from '../lib/#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z');
  });

  describe('when the #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z')).toExist();

        let #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zElement = workspaceElement.querySelector('.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z');
        expect(#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zElement).toExist();

        let #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zPanel = atom.workspace.panelForItem(#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zElement);
        expect(#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, '#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z:toggle');
        expect(#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let #0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zElement = workspaceElement.querySelector('.#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z');
        expect(#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, '#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z:toggle');
        expect(#0#1#2#3#4#5#6#7#8#9#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#zElement).not.toBeVisible();
      });
    });
  });
});
