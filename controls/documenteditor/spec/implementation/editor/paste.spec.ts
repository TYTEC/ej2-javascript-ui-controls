import { DocumentEditor } from '../../../src/document-editor/document-editor';
import { WCharacterFormat } from '../../../src/document-editor/implementation/format/character-format';
import { createElement } from '@syncfusion/ej2-base';
import { Editor, TableWidget, TextElementBox, ParagraphWidget, LineWidget, DocumentEditorContainer } from '../../../src/index';
import { Toolbar } from '../../../src/document-editor-container/tool-bar/tool-bar';
import { TestHelper } from '../../test-helper.spec';
import { Selection, SelectionCharacterFormat } from '../../../src/index';
import { EditorHistory } from '../../../src/document-editor/implementation/editor-history/editor-history';

let pasteContent = '{"sections":[{"blocks":[{"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"textAlignment":"Left","styleName":"Normal","bidi":false},"inlines":[{"text":"Link & Use Destination Style","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":11.5,"fontFamily":"Segoe UI","fontColor":"#000000FF","bidi":false,"fontSizeBidi":11.5,"fontFamilyBidi":"Segoe UI"}},{"text":"s","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":11.5,"fontFamily":"Segoe UI","fontColor":"#000000FF","bidi":false,"fontSizeBidi":11.5,"fontFamilyBidi":"Segoe UI"}},{"text":"  ","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":11.5,"fontFamily":"Segoe UI","fontColor":"#000000FF","bidi":false,"fontSizeBidi":11.5,"fontFamilyBidi":"Segoe UI"}},{"text":" ","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":11.5,"fontFamily":"Segoe UI","fontColor":"#000000FF","bidi":false,"fontSizeBidi":11.5,"fontFamilyBidi":"Segoe UI"}},{"text":" ","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":11.5,"fontFamily":"Segoe UI","fontColor":"#000000FF","bidi":false,"fontSizeBidi":11.5,"fontFamilyBidi":"Segoe UI"}}]}],"headersFooters":{},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false,"bidi":false}}],"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"textAlignment":"Left"},"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"textAlignment":"Left"}},{"type":"Character","name":"Default Paragraph Font"}],"defaultTabWidth":36.0}';
/**
 * Section Break Validation
 */
describe('Paste Validation without history with multiple options', () => {
    let editor: DocumentEditor = undefined;
    beforeAll(() => {
        document.body.innerHTML = '';
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(Editor, Selection);
        editor = new DocumentEditor({ enableEditor: true, isReadOnly: false });
        (editor.viewer as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.viewer as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.viewer.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.viewer.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
    });
    afterAll((done) => {
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(() => {
            done();
        }, 1000);
    });
    it('Paste with source formatting', () => {
        (editor.editor as any).pasteContents(JSON.parse(pasteContent));
        expect(editor.selection.start.paragraph.isEmpty()).toBe(false);
    });
    it('paste with source formatting inbetween paragraph', () => {
        editor.selection.handleControlLeftKey();
        (editor.editor as any).pasteContents(JSON.parse(pasteContent));
        (editor.editor as any).copiedTextContent = "Link & Use Destination Styles    ";
        expect(editor.selection.characterFormat.bold).toBe(true);
    });
    it('paste options with keep text only', () => {
        editor.editor.applyPasteOptions('KeepTextOnly');
        expect(editor.selection.characterFormat.bold).toBe(true);
    });
    it('paste options with Merge existing format', () => {
        editor.editor.applyPasteOptions('MergeWithExistingFormatting');
        expect(editor.selection.characterFormat.bold).toBe(true);
    });
    it('paste with default formatting options', () => {
        editor.editor.applyPasteOptions(editor.defaultPasteOption);
        expect(editor.selection.characterFormat.bold).toBe(true);
    });

});

let pasteMultipleContent: string = '{"sections":[{"blocks":[{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":36.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"List of text alignment options","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":18.0,"fontFamily":"Monotype Corsiva","fontColor":"#4472C4FF","bidi":false,"fontSizeBidi":18.0,"fontFamilyBidi":"Monotype Corsiva"}}]},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"L","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":14.0,"fontFamily":"Calibri","fontColor":"#000000FF","bidi":false,"fontSizeBidi":14.0,"fontFamilyBidi":"Calibri"}},{"text":"eft-aligned","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":14.0,"fontFamily":"Calibri","fontColor":"#000000FF","bidi":false,"fontSizeBidi":14.0,"fontFamilyBidi":"Calibri"}}]},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Calibri","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Calibri"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":18.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Calibri","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Calibri"}},{"text":" minim veniam, quis nostrud exercitation ullamco ","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Calibri","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Calibri"}},{"text":"laboris nisi ut aliquip ex e","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Calibri","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Calibri"}}]},{"rows":[{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":0.0,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"vertical":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"horizontal":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":36.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"List of text alignment options","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":18.0,"fontFamily":"Monotype Corsiva","fontColor":"#4472C4FF","bidi":false,"fontSizeBidi":18.0,"fontFamilyBidi":"Monotype Corsiva"}}]},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":18.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":155.80000305175781,"preferredWidthType":"Point","verticalAlignment":"Top","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true}},"shading":{"texture":"TextureNone"}}},{"blocks":[{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":36.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"List of text alignment options","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":18.0,"fontFamily":"Monotype Corsiva","fontColor":"#4472C4FF","bidi":false,"fontSizeBidi":18.0,"fontFamilyBidi":"Monotype Corsiva"}}]},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":18.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":155.85000610351563,"preferredWidthType":"Point","verticalAlignment":"Top","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true}},"shading":{"texture":"TextureNone"}}},{"blocks":[{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":36.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"List of text alignment options","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":18.0,"fontFamily":"Monotype Corsiva","fontColor":"#4472C4FF","bidi":false,"fontSizeBidi":18.0,"fontFamilyBidi":"Monotype Corsiva"}}]},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":18.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":155.85000610351563,"preferredWidthType":"Point","verticalAlignment":"Top","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true}},"shading":{"texture":"TextureNone"}}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":0.0,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"vertical":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"horizontal":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":36.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"List of text alignment options","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":18.0,"fontFamily":"Monotype Corsiva","fontColor":"#4472C4FF","bidi":false,"fontSizeBidi":18.0,"fontFamilyBidi":"Monotype Corsiva"}}]},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":18.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":155.80000305175781,"preferredWidthType":"Point","verticalAlignment":"Top","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true}},"shading":{"texture":"TextureNone"}}},{"blocks":[{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":36.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"List of text alignment options","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":18.0,"fontFamily":"Monotype Corsiva","fontColor":"#4472C4FF","bidi":false,"fontSizeBidi":18.0,"fontFamilyBidi":"Monotype Corsiva"}}]},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":18.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":155.85000610351563,"preferredWidthType":"Point","verticalAlignment":"Top","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true}},"shading":{"texture":"TextureNone"}}},{"blocks":[{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":36.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"List of text alignment options","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":18.0,"fontFamily":"Monotype Corsiva","fontColor":"#4472C4FF","bidi":false,"fontSizeBidi":18.0,"fontFamilyBidi":"Monotype Corsiva"}}]},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":18.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":155.85000610351563,"preferredWidthType":"Point","verticalAlignment":"Top","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#000000FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true}},"shading":{"texture":"TextureNone"}}}]}],"title":null,"description":null,"tableFormat":{"allowAutoFit":true,"leftMargin":5.4000000953674316,"rightMargin":5.4000000953674316,"topMargin":0.0,"bottomMargin":0.0,"leftIndent":0.0,"tableAlignment":"Left","preferredWidthType":"Auto","borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"bidi":false}},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":0.0,"afterSpacing":18.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Left","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"a commodo consequat.","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Calibri","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Calibri"}}]},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"firstLineIndent":0.0,"beforeSpacing":18.0,"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"BodyText","textAlignment":"Center","styleName":"Normal","bidi":false,"contextualSpacing":false},"inlines":[{"text":"C","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":14.0,"fontFamily":"Calibri","fontColor":"#000000FF","bidi":false,"fontSizeBidi":14.0,"fontFamilyBidi":"Calibri"}},{"text":"entered","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":14.0,"fontFamily":"Calibri","fontColor":"#000000FF","bidi":false,"fontSizeBidi":14.0,"fontFamilyBidi":"Calibri"}}]}],"headersFooters":{},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false,"bidi":false}}],"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"textAlignment":"Left"},"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal","characterFormat":{"bold":false,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#000000FF","bidi":false,"fontSizeBidi":12.0},"paragraphFormat":{"leftIndent":0.0,"rightIndent":0.0,"textAlignment":"Left"}},{"type":"Character","name":"Default Paragraph Font"}],"defaultTabWidth":36.0}';

let text: string = "List of text alignment options"
    + "Left-aligned" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e"
    + "List of text alignment options" +
    +"List of text alignment options"
    + "List of text alignment options" +
    "List of text alignment options" +
    "List of text alignment options" +
    "List of text alignment options" +
    "a commodo consequat." + "Centered";
describe('Paste Validation with history with multiple options', () => {
    let editor: DocumentEditor = undefined;
    let format: SelectionCharacterFormat;
    beforeAll(() => {
        document.body.innerHTML = '';
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(Editor, Selection, EditorHistory);
        editor = new DocumentEditor({ enableEditor: true, isReadOnly: false, enableEditorHistory: true });
        (editor.viewer as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.viewer as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.viewer.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.viewer.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        editor.open(pasteContent);
    });
    afterAll((done) => {
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(() => {
            done();
        }, 1000);
    });
    it('paste with source formatting inbetween paragraph', () => {
        editor.selection.handleControlRightKey();
        expect(() => { (editor.editor as any).pasteContents(JSON.parse(pasteMultipleContent)); }).not.toThrowError();
        (editor.editor as any).copiedTextContent = text;
        expect(editor.selection.characterFormat.bold).toBe(true);
    });
    it('paste options with keep text only', () => {
        editor.editor.applyPasteOptions('KeepTextOnly');

        expect(editor.selection.characterFormat.bold).toBe(true);

    });
    it('paste options with Merge existing format', () => {
        editor.editor.applyPasteOptions('MergeWithExistingFormatting');
        expect(editor.selection.characterFormat.bold).toBe(true);
    });

});

describe('Merge Formatting Validation', () => {
    let editor: DocumentEditor = undefined;
    let format: SelectionCharacterFormat;
    beforeAll(() => {
        document.body.innerHTML = '';
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(Editor, Selection, EditorHistory);
        editor = new DocumentEditor({ enableEditor: true, isReadOnly: false, enableEditorHistory: true });
        (editor.viewer as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.viewer as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.viewer.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.viewer.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        editor.open(pasteContent);
    });
    afterAll((done) => {
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(() => {
            done();
        }, 1000);
    });
    it('Script Error validation', () => {
        let paragraph: ParagraphWidget = new ParagraphWidget();
        paragraph.index = 0;
        paragraph.characterFormat = new WCharacterFormat(paragraph);
        let line: LineWidget = new LineWidget(paragraph);
        let element: TextElementBox = new TextElementBox();
        element.text = 'Adventure Works Cycles';
        line.children.push(element);
        element.line = line;
        paragraph.childWidgets.push(line);
        expect(() => { (element.characterFormat as any).documentCharacterFormat(); }).not.toThrowError();
    });
});

describe('Paste Validation with List Formatting', () => {
    let container: DocumentEditorContainer;
    let element: HTMLElement;
    beforeAll(() => {
        element = createElement('div');
        document.body.appendChild(element);
        DocumentEditorContainer.Inject(Toolbar);
        container = new DocumentEditorContainer({ showPropertiesPane: false, enableLocalPaste: true });
        container.appendTo(element);
    });
    afterAll(() => {
        container.destroy();
        expect(element.childNodes.length).toBe(0);
        document.body.removeChild(element);
        expect(() => { container.destroy(); }).not.toThrowError();
        element = undefined;
        container = undefined;
    });
    it('paste with list formatting', () => {
        let editor: DocumentEditor = container.documentEditor;
        editor.editorModule.insertText('1');
        editor.editorModule.insertText('.');
        editor.editorModule.insertText(' ');
        editor.editorModule.insertText('Adventure');
        (editor.editorModule as any).selection.extendToLineStart();
        (editor.editorModule as any).selection.copy();
        (editor.editorModule as any).selection.extendToLineEnd();
        editor.editor.handleEnterKey();
        editor.editor.handleEnterKey();
        editor.editorModule.paste();
        expect(editor.selection.paragraphFormat.listId).not.toBe(-1);
    });
});
