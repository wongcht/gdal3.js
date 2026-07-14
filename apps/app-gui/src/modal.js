import { reactive } from 'vue'

export const modalState = reactive({ open: {} })

export function showModal(name) {
    modalState.open[name] = true
}

export function hideModal(name) {
    modalState.open[name] = false
}
