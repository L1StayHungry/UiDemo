<script setup>
import classNames from '../../../utils/className';
import './index.scss';

defineOptions({
  name: 'DemoButton'
});

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'md'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const classString = classNames([
  'demo-button',
  `demo-button-type-${props.type}`,
  `demo-button-size-${props.size}`,
  props.disabled ? 'demo-button-disabled' : ''
]);
</script>

<template>
  <button :class="[classString]" :disabled="disabled || loading">
    <span class="demo-button-inner">
      <slot></slot>
    </span>
  </button>
</template>
