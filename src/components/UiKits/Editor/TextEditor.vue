<script setup>
import {ref} from 'vue';
import {BButton, BRow, BCol, BCard, BCardBody} from 'bootstrap-vue-next';

import {EditorContent, useEditor} from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';


// Phosphor icons
import {
    PhTextB,
    PhTextItalic,
    PhTextUnderline,
    PhTextStrikethrough,
    PhTextAlignLeft,
    PhTextAlignCenter,
    PhTextAlignRight,
    PhTextAlignJustify,
    PhTextHOne,
    PhTextHTwo,
    PhParagraph,
    PhLink,
    PhImage,
    PhArrowBendUpLeft,
    PhArrowBendUpRight,
    PhList,
    PhListNumbers,

} from '@phosphor-icons/vue';


// Initial content
const content = ref('<p>Hello!</p>');

// Editor
const editor = useEditor({
    extensions: [
        StarterKit,
        Underline,
        Image,
        Link.configure({
            openOnClick: false,
            types: ['textStyle', 'image'], // Allow links on text and images
        }),
        TextAlign.configure({types: ['heading', 'paragraph']}),
    ],
    content: content.value,
    onUpdate({editor}) {
        content.value = editor.getHTML();
    },
});

// Add image
const addImage = () => {
    if (!editor.value) return;
    const url = window.prompt('Enter the URL of the image:');
    if (url) editor.value.chain().focus().setImage({src: url}).run();
};


const setLink = () => {
    if (!editor.value) return;

    const previousUrl = editor.value.isActive('link') ? editor.value.getAttributes('link').href : '';
    const url = window.prompt('Enter URL', previousUrl);

    if (url === null) return;
    if (url === '') {
        editor.value.chain().focus().extendMarkRange('link').unsetLink().run();
        return;
    }

    editor.value.chain().focus().extendMarkRange('link').setLink({href: url}).run();
};
</script>

<template>

    <b-col>
        <b-card no-body>
            <b-card-body>
                <b-row class="list-item">
                    <!-- Toolbar -->
                    <div class="text-editor-container p-0">
                        <div class="editor-toolbar d-flex flex-wrap">
                            <!-- Style buttons -->
                            <div class="toolbar-group">
                                <b-button variant="primary" @click="editor?.chain().focus().toggleBold().run()"
                                          :class="{ 'is-active': editor?.isActive('bold') }" title="Bold">
                                    <PhTextB size="18"/>
                                </b-button>
                                <b-button variant="primary" @click="editor?.chain().focus().toggleItalic().run()"
                                          :class="{ 'is-active': editor?.isActive('italic') }" title="Italic">
                                    <PhTextItalic size="18"/>
                                </b-button>
                                <b-button variant="primary" @click="editor?.chain().focus().toggleUnderline().run()"
                                          :class="{ 'is-active': editor?.isActive('underline') }" title="Underline">
                                    <PhTextUnderline size="18"/>
                                </b-button>
                                <b-button variant="primary" @click="editor?.chain().focus().toggleStrike().run()"
                                          :class="{ 'is-active': editor?.isActive('strike') }" title="Strikethrough">
                                    <PhTextStrikethrough size="18"/>
                                </b-button>
                            </div>

                            <!-- Alignment buttons -->
                            <div class="toolbar-group">
                                <b-button variant="primary" @click="editor?.chain().focus().setTextAlign('left').run()"
                                          :class="{ 'is-active': editor?.isActive({ textAlign: 'left' }) }"
                                          title="Align left">
                                    <PhTextAlignLeft size="18"/>
                                </b-button>
                                <b-button variant="primary"
                                          @click="editor?.chain().focus().setTextAlign('center').run()"
                                          :class="{ 'is-active': editor?.isActive({ textAlign: 'center' }) }"
                                          title="Align center">
                                    <PhTextAlignCenter size="18"/>
                                </b-button>
                                <b-button variant="primary" @click="editor?.chain().focus().setTextAlign('right').run()"
                                          :class="{ 'is-active': editor?.isActive({ textAlign: 'right' }) }"
                                          title="Align right">
                                    <PhTextAlignRight size="18"/>
                                </b-button>
                                <b-button variant="primary"
                                          @click="editor?.chain().focus().setTextAlign('justify').run()"
                                          :class="{ 'is-active': editor?.isActive({ textAlign: 'justify' }) }"
                                          title="Justify">
                                    <PhTextAlignJustify size="18"/>
                                </b-button>
                            </div>

                            <!-- Headings -->
                            <div class="toolbar-group">
                                <b-button variant="primary" @click="editor?.chain().focus().setParagraph().run()"
                                          :class="{ 'is-active': editor?.isActive('paragraph') }" title="Paragraph">
                                    <PhParagraph size="18"/>
                                </b-button>
                                <b-button variant="primary"
                                          @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
                                          :class="{ 'is-active': editor?.isActive('heading', { level: 1 }) }"
                                          title="Heading 1">
                                    <PhTextHOne size="18"/>
                                </b-button>
                                <b-button variant="primary"
                                          @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
                                          :class="{ 'is-active': editor?.isActive('heading', { level: 2 }) }"
                                          title="Heading 2">
                                    <PhTextHTwo size="18"/>
                                </b-button>
                            </div>

                            <!-- Lists -->
                            <div class="toolbar-group">
                                <b-button variant="primary" @click="editor?.chain().focus().toggleBulletList().run()"
                                          :class="{ 'is-active': editor?.isActive('bulletList') }" title="Bullet list">
                                    <PhList size="18"/>
                                </b-button>
                                <b-button variant="primary" @click="editor?.chain().focus().toggleOrderedList().run()"
                                          :class="{ 'is-active': editor?.isActive('orderedList') }"
                                          title="Ordered list">
                                    <PhListNumbers size="18"/>
                                </b-button>
                            </div>

                            <!-- Link & Image -->
                            <div class="toolbar-group">
                                <b-button variant="primary" @click="setLink" title="Link">
                                    <PhLink size="18"/>
                                </b-button>
                                <b-button variant="primary" @click="addImage" title="Image">
                                    <PhImage size="18"/>
                                </b-button>
                            </div>

                            <!-- Undo/Redo -->
                            <div class="toolbar-group">
                                <b-button variant="" @click="editor?.chain().focus().undo().run()"
                                          :disabled="!editor?.can().undo()" title="Undo">
                                    <PhArrowBendUpLeft size="18"/>
                                </b-button>
                                <b-button variant="" @click="editor?.chain().focus().redo().run()"
                                          :disabled="!editor?.can().redo()" title="Redo">
                                    <PhArrowBendUpRight size="18"/>
                                </b-button>
                            </div>
                        </div>

                        <!-- Editor content -->
                        <EditorContent :editor="editor" class="editor-content app-editor-content"/>
                    </div>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>

</template>
