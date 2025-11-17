<script setup>
import {ref} from 'vue';
import {
    BButton,
    BRow,
    BCol,
    BCard,
    BCardBody,
    BModal,
    BFormInput
} from 'bootstrap-vue-next';
import {EditorContent, useEditor} from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';

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

const content = ref('<p>Hello!</p>');


const showImageModal = ref(false);
const showLinkModal = ref(false);
const imageUrl = ref('');
const linkUrl = ref('');

const editor = useEditor({
    extensions: [
        StarterKit,
        Underline,
        Image,
        Link.configure({
            openOnClick: false,
            types: ['textStyle', 'image'],
        }),
        TextAlign.configure({types: ['heading', 'paragraph']}),
    ],
    content: content.value,
    onUpdate({editor}) {
        content.value = editor.getHTML();
    },
});

const openImageModal = () => {
    if (!editor.value) return;
    imageUrl.value = '';
    showImageModal.value = true;
};

const confirmImage = () => {
    if (imageUrl.value && editor.value) {
        editor.value.chain().focus().setImage({src: imageUrl.value}).run();
    }
    showImageModal.value = false;
    imageUrl.value = '';
};

const openLinkModal = () => {
    if (!editor.value) return;

    const previousUrl = editor.value.isActive('link') ? editor.value.getAttributes('link').href : '';
    linkUrl.value = previousUrl;
    showLinkModal.value = true;
};

const confirmLink = () => {
    if (!editor.value) return;

    if (linkUrl.value === '') {
        editor.value.chain().focus().extendMarkRange('link').unsetLink().run();
    } else {
        editor.value.chain().focus().extendMarkRange('link').setLink({href: linkUrl.value}).run();
    }

    showLinkModal.value = false;
    linkUrl.value = '';
};

const cancelModal = () => {
    showImageModal.value = false;
    showLinkModal.value = false;
    imageUrl.value = '';
    linkUrl.value = '';
};
</script>

<template>
    <b-col>
        <b-card no-body>
            <b-card-body>
                <b-row class="list-item">
                    <div class="text-editor-container p-0">
                        <div class="editor-toolbar d-flex flex-wrap">
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

                            <div class="toolbar-group">
                                <b-button variant="primary" @click="openLinkModal" title="Link">
                                    <PhLink size="18"/>
                                </b-button>
                                <b-button variant="primary" @click="openImageModal" title="Image">
                                    <PhImage size="18"/>
                                </b-button>
                            </div>

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

                        <EditorContent :editor="editor" class="editor-content app-editor-content"/>
                    </div>
                </b-row>
            </b-card-body>
        </b-card>

        <b-modal v-model="showImageModal" title="Add Image" hide-footer>
            <b-form-input v-model="imageUrl" placeholder="Enter the URL of the image" class="mb-3"/>
            <div class="d-flex justify-content-end gap-2">
                <b-button variant="secondary" @click="cancelModal">Cancel</b-button>
                <b-button variant="primary" @click="confirmImage">Add Image</b-button>
            </div>
        </b-modal>

        <b-modal v-model="showLinkModal" title="Add Link" hide-footer>
            <b-form-input v-model="linkUrl" placeholder="Enter URL" class="mb-3"/>
            <div class="d-flex justify-content-end gap-2">
                <b-button variant="secondary" @click="cancelModal">Cancel</b-button>
                <b-button variant="primary" @click="confirmLink">Add Link</b-button>
            </div>
        </b-modal>
    </b-col>
</template>