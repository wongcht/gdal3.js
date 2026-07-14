<template>
    <Teleport to="body">
        <div v-if="modalState.open[name]" class="vm--overlay" :class="attrsClass" @click.self="onOverlayClick">
            <div class="vm--modal" :style="containerStyle">
                <slot />
            </div>
        </div>
    </Teleport>
</template>

<script>
import { modalState, hideModal } from '../modal'

export default {
    name: 'ComponentModal',
    inheritAttrs: false,
    props: {
        name: { type: String, required: true },
        adaptive: { type: Boolean, default: false },
        scrollable: { type: Boolean, default: false },
        height: { type: [String, Number], default: 'auto' },
        width: { type: [String, Number], default: 400 },
    },
    data() {
        return { modalState }
    },
    computed: {
        attrsClass() {
            return this.$attrs.class
        },
        containerStyle() {
            const style = { width: typeof this.width === 'number' ? `${this.width}px` : this.width }
            if (this.height !== 'auto') style.height = typeof this.height === 'number' ? `${this.height}px` : this.height
            return style
        },
    },
    methods: {
        onOverlayClick() {
            hideModal(this.name)
        },
    },
}
</script>

<style scoped>
.vm--overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
}
.vm--modal {
    position: relative;
    border-radius: 4px;
    max-width: 90vw;
    max-height: 90vh;
    overflow: auto;
}
</style>
