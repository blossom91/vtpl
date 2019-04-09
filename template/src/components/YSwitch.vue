<template>
    <div class="y-switch">
        <slot></slot>
        <div class="input-switch">
            <img v-if="showLoading" v-show="disabled" class="input-loading" src="./img/disloading.png" />
            <input
                type="checkbox"
                class="switch-input"
                :disabled="disabled"
                :checked="checked"
                @change="$emit('change', $event.target.checked)"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'YSwitch',
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: {
        checked: Boolean,
        disabled: Boolean,
        showLoading: Boolean,
    },
}
</script>

<style lang="less" scope>
.y-switch {
    position: relative;
    height: 0.43rem;
    padding: 0 0.185rem 0 0.22rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #1e1e1e;
    line-height: 0.19rem;
    font-size: 0.17rem;
    &::after {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #f0f0f0;
        color: #f0f0f0;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    &::before {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #f0f0f0;
        color: #f0f0f0;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
    @keyframes loading {
        from {
            transform-origin: center;
            transform: rotateZ(0);
        }
        to {
            transform-origin: center;
            transform: rotateZ(360deg);
        }
    }
    .input-switch {
        display: flex;
        justify-content: center;
        align-items: center;
        .input-loading {
            margin-right: 0.095rem;
            width: 0.15rem;
            height: 0.15rem;
            animation: 1s loading infinite;
            animation-timing-function: linear;
        }
    }
    .switch-input {
        -webkit-appearance: none;
        appearance: none;
        position: relative;
        width: 44px;
        height: 30px;
        border: 1px solid #dfdfdf;
        outline: 0;
        border-radius: 16px;
        box-sizing: border-box;
        background-color: #dfdfdf;
        transition: background-color 0.1s, border 0.1s;
        &:before {
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            width: 42px;
            height: 28px;
            border-radius: 15px;
            background-color: #fdfdfd;
            transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
        }
        &:after {
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            width: 28px;
            height: 28px;
            border-radius: 15px;
            background-color: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
            transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
        }
    }
    .switch-input:checked {
        border-color: #1194f6;
        background-color: #1194f6;
        &:before {
            transform: scale(0);
        }
        &:after {
            transform: translateX(16px);
        }
    }
    input.switch-input[disabled] {
        opacity: 1;
    }
}
</style>