"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const func_utils_1 = require("../utils/func.utils");
const typeguard_utils_1 = require("../utils/typeguard.utils");
const StyledInput_1 = require("./styles/StyledInput");
/**
 * Input
 * @component
 * @description
 * We can set isAsync at true to improve performance when we want to
 * execute an heavy task on each value update
 */
function Input(props, ref) {
    const { defaultValue, flexStyle, isAsync, onChange, placeholder, onEnterPress, id, size = 'md', type = 'text', spreading = 'hollow', value, status, testId, textarea, ...rest } = props;
    const { className, style } = (0, useStylingProps_1.default)({ ...props, size, spreading });
    if (status === 'danger')
        style.borderWidth = '2px';
    const safeChange = (0, func_utils_1.ensafe)((input) => onChange(input));
    const eventAdapter = (event) => {
        if (event.target.type === 'checkbox')
            return event.target.checked;
        return event.target.value;
    };
    const handleChange = (event) => {
        if (!isAsync)
            safeChange(eventAdapter(event));
    };
    const handleBlur = (event) => {
        if (isAsync)
            safeChange(eventAdapter(event));
    };
    const inputProps = {
        ...rest,
        id,
        onKeyUp(e) {
            if (e.key === 'Enter' && onEnterPress)
                onEnterPress();
        },
        $responsive: flexStyle,
        checked: (0, typeguard_utils_1.checkIsBoolean)(value) ? value : undefined,
        className,
        'data-testId': testId,
        defaultValue: (0, typeguard_utils_1.checkIsBoolean)(value) ? undefined : defaultValue,
        onBlur: handleBlur,
        onChange: handleChange,
        placeholder,
        style,
        type,
        value: (0, typeguard_utils_1.checkIsBoolean)(value) ? undefined : value,
    };
    if (textarea)
        return (0, jsx_runtime_1.jsx)(StyledInput_1.StyledTextarea, { ref: ref, ...inputProps });
    return (0, jsx_runtime_1.jsx)(StyledInput_1.StyledInput, { ref: ref, ...inputProps });
}
exports.Input = Input;
exports.default = (0, react_1.forwardRef)(Input);
