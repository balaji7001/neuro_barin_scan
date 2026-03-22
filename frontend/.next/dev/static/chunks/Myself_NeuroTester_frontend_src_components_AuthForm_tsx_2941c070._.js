(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AuthForm() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "a9be20be4160e3d2d31fd150944393a042e32a8d0bb98f2004edf1a651538c4a") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9be20be4160e3d2d31fd150944393a042e32a8d0bb98f2004edf1a651538c4a";
    }
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("patient");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 30
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 mx-auto mb-4 bg-[#3B6F8E] rounded-xl flex items-center justify-center text-white text-xl",
            children: "🧠"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = mode === "login" ? 0 : "100%";
    let t4;
    if ($[4] !== t3) {
        t4 = {
            x: t3
        };
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            type: "spring",
            stiffness: 300
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            layout: true,
            className: "absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow",
            animate: t4,
            transition: t5
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "toggle-btn z-10",
            onClick: {
                "AuthForm[<button>.onClick]": ()=>setMode("login")
            }["AuthForm[<button>.onClick]"],
            children: "Login"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "toggle-btn z-10",
            onClick: {
                "AuthForm[<button>.onClick]": ()=>setMode("register")
            }["AuthForm[<button>.onClick]"],
            children: "Register"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "toggle-group relative mb-4",
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const t10 = role === "patient" ? 0 : "100%";
    let t11;
    if ($[13] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            layout: true,
            className: "absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow",
            animate: {
                x: t10
            }
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "toggle-btn z-10",
            onClick: {
                "AuthForm[<button>.onClick]": ()=>setRole("patient")
            }["AuthForm[<button>.onClick]"],
            children: "Patient"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "toggle-btn z-10",
            onClick: {
                "AuthForm[<button>.onClick]": ()=>setRole("doctor")
            }["AuthForm[<button>.onClick]"],
            children: "Medical Staff"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "toggle-group relative mb-6",
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== mode || $[20] !== role) {
        t15 = mode === "register" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "input mb-4",
                    placeholder: "Full Name"
                }, void 0, false, {
                    fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
                    lineNumber: 134,
                    columnNumber: 36
                }, this),
                role === "doctor" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "input mb-4",
                    placeholder: "Designation"
                }, void 0, false, {
                    fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
                    lineNumber: 134,
                    columnNumber: 114
                }, this)
            ]
        }, void 0, true);
        $[19] = mode;
        $[20] = role;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== mode) {
        t16 = mode === "login" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "input mb-4",
            placeholder: "Patient ID"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 143,
            columnNumber: 31
        }, this);
        $[22] = mode;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "input mb-4",
            placeholder: "Phone Number"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            scale: 0.95
        };
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    const t19 = mode === "login" ? "Request OTP" : "Register Profile";
    let t20;
    if ($[26] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileTap: t18,
            className: "btn-primary w-full mb-4",
            children: t19
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[26] = t19;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] !== t14 || $[29] !== t15 || $[30] !== t16 || $[31] !== t20 || $[32] !== t9) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t0,
                animate: t1,
                className: "card w-full max-w-md text-center",
                children: [
                    t2,
                    t9,
                    t14,
                    t15,
                    t16,
                    t17,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
                lineNumber: 176,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/AuthForm.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[28] = t14;
        $[29] = t15;
        $[30] = t16;
        $[31] = t20;
        $[32] = t9;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    return t21;
}
_s(AuthForm, "ve6IzfBqw5OpyIvRsDTcx5uwB5o=");
_c = AuthForm;
var _c;
__turbopack_context__.k.register(_c, "AuthForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Myself_NeuroTester_frontend_src_components_AuthForm_tsx_2941c070._.js.map