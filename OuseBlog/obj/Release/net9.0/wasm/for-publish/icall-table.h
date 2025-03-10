#define ICALL_TABLE_corlib 1

static int corlib_icall_indexes [] = {
184,
193,
194,
195,
196,
197,
198,
199,
201,
202,
258,
259,
260,
283,
284,
285,
300,
301,
302,
388,
389,
390,
393,
423,
424,
426,
428,
430,
432,
437,
445,
446,
447,
448,
449,
450,
451,
452,
526,
533,
534,
602,
608,
611,
613,
618,
619,
621,
622,
626,
627,
629,
630,
633,
634,
635,
638,
640,
643,
645,
647,
656,
713,
715,
717,
727,
728,
729,
731,
736,
737,
738,
739,
740,
748,
749,
750,
754,
755,
757,
759,
943,
1096,
1097,
6506,
6507,
6509,
6510,
6511,
6512,
6513,
6515,
6516,
6517,
6532,
6534,
6539,
6541,
6543,
6545,
6596,
6597,
6599,
6600,
6601,
6602,
6603,
6605,
6607,
7542,
7546,
7548,
7549,
7550,
7551,
7929,
7930,
7931,
7932,
7948,
7949,
7950,
7993,
8057,
8067,
8068,
8069,
8070,
8071,
8333,
8337,
8338,
8365,
8399,
8406,
8413,
8424,
8427,
8448,
8523,
8525,
8534,
8536,
8537,
8544,
8559,
8579,
8580,
8588,
8590,
8597,
8598,
8601,
8606,
8612,
8613,
8620,
8622,
8634,
8637,
8638,
8639,
8650,
8660,
8666,
8667,
8668,
8670,
8671,
8688,
8690,
8705,
8723,
8750,
8774,
8775,
9239,
9318,
9319,
9471,
9472,
9476,
9479,
9524,
9894,
9895,
10086,
10091,
10101,
10713,
10734,
10736,
10738,
};
void ves_icall_System_Array_InternalCreate (int,int,int,int,int);
int ves_icall_System_Array_GetCorElementTypeOfElementTypeInternal (int);
int ves_icall_System_Array_CanChangePrimitive (int,int,int);
int ves_icall_System_Array_FastCopy (int,int,int,int,int);
int ves_icall_System_Array_GetLengthInternal_raw (int,int,int);
int ves_icall_System_Array_GetLowerBoundInternal_raw (int,int,int);
void ves_icall_System_Array_GetGenericValue_icall (int,int,int);
void ves_icall_System_Array_GetValueImpl_raw (int,int,int,int);
void ves_icall_System_Array_SetValueImpl_raw (int,int,int,int);
void ves_icall_System_Array_SetValueRelaxedImpl_raw (int,int,int,int);
void ves_icall_System_Runtime_RuntimeImports_ZeroMemory (int,int);
void ves_icall_System_Runtime_RuntimeImports_Memmove (int,int,int);
void ves_icall_System_Buffer_BulkMoveWithWriteBarrier (int,int,int,int);
int ves_icall_System_Delegate_AllocDelegateLike_internal_raw (int,int);
int ves_icall_System_Delegate_CreateDelegate_internal_raw (int,int,int,int,int);
int ves_icall_System_Delegate_GetVirtualMethod_internal_raw (int,int);
void ves_icall_System_Enum_GetEnumValuesAndNames_raw (int,int,int,int);
int ves_icall_System_Enum_InternalGetCorElementType (int);
void ves_icall_System_Enum_InternalGetUnderlyingType_raw (int,int,int);
int ves_icall_System_Environment_get_ProcessorCount ();
int ves_icall_System_Environment_get_TickCount ();
int64_t ves_icall_System_Environment_get_TickCount64 ();
void ves_icall_System_Environment_FailFast_raw (int,int,int,int);
void ves_icall_System_GC_register_ephemeron_array_raw (int,int);
int ves_icall_System_GC_get_ephemeron_tombstone_raw (int);
void ves_icall_System_GC_SuppressFinalize_raw (int,int);
void ves_icall_System_GC_ReRegisterForFinalize_raw (int,int);
void ves_icall_System_GC_GetGCMemoryInfo (int,int,int,int,int,int);
int ves_icall_System_GC_AllocPinnedArray_raw (int,int,int);
int ves_icall_System_Object_MemberwiseClone_raw (int,int);
double ves_icall_System_Math_Ceiling (double);
double ves_icall_System_Math_Cos (double);
double ves_icall_System_Math_Floor (double);
double ves_icall_System_Math_Pow (double,double);
double ves_icall_System_Math_Sin (double);
double ves_icall_System_Math_Sqrt (double);
double ves_icall_System_Math_Tan (double);
double ves_icall_System_Math_ModF (double,int);
int ves_icall_RuntimeMethodHandle_GetFunctionPointer_raw (int,int);
void ves_icall_RuntimeMethodHandle_ReboxFromNullable_raw (int,int,int);
void ves_icall_RuntimeMethodHandle_ReboxToNullable_raw (int,int,int,int);
int ves_icall_RuntimeType_GetCorrespondingInflatedMethod_raw (int,int,int);
void ves_icall_RuntimeType_make_array_type_raw (int,int,int,int);
void ves_icall_RuntimeType_make_byref_type_raw (int,int,int);
void ves_icall_RuntimeType_make_pointer_type_raw (int,int,int);
void ves_icall_RuntimeType_MakeGenericType_raw (int,int,int,int);
int ves_icall_RuntimeType_GetMethodsByName_native_raw (int,int,int,int,int);
int ves_icall_RuntimeType_GetPropertiesByName_native_raw (int,int,int,int,int);
int ves_icall_RuntimeType_GetConstructors_native_raw (int,int,int);
int ves_icall_System_RuntimeType_CreateInstanceInternal_raw (int,int);
void ves_icall_RuntimeType_GetDeclaringMethod_raw (int,int,int);
void ves_icall_System_RuntimeType_getFullName_raw (int,int,int,int,int);
void ves_icall_RuntimeType_GetGenericArgumentsInternal_raw (int,int,int,int);
int ves_icall_RuntimeType_GetGenericParameterPosition (int);
int ves_icall_RuntimeType_GetEvents_native_raw (int,int,int,int);
int ves_icall_RuntimeType_GetFields_native_raw (int,int,int,int,int);
void ves_icall_RuntimeType_GetInterfaces_raw (int,int,int);
int ves_icall_RuntimeType_GetNestedTypes_native_raw (int,int,int,int,int);
void ves_icall_RuntimeType_GetDeclaringType_raw (int,int,int);
void ves_icall_RuntimeType_GetName_raw (int,int,int);
void ves_icall_RuntimeType_GetNamespace_raw (int,int,int);
int ves_icall_RuntimeType_FunctionPointerReturnAndParameterTypes_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetAttributes (int);
int ves_icall_RuntimeTypeHandle_GetMetadataToken_raw (int,int);
void ves_icall_RuntimeTypeHandle_GetGenericTypeDefinition_impl_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_GetCorElementType (int);
int ves_icall_RuntimeTypeHandle_HasInstantiation (int);
int ves_icall_RuntimeTypeHandle_IsInstanceOfType_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_HasReferences_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetArrayRank_raw (int,int);
void ves_icall_RuntimeTypeHandle_GetAssembly_raw (int,int,int);
void ves_icall_RuntimeTypeHandle_GetElementType_raw (int,int,int);
void ves_icall_RuntimeTypeHandle_GetModule_raw (int,int,int);
void ves_icall_RuntimeTypeHandle_GetBaseType_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_type_is_assignable_from_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_IsGenericTypeDefinition (int);
int ves_icall_RuntimeTypeHandle_GetGenericParameterInfo_raw (int,int);
int ves_icall_RuntimeTypeHandle_is_subclass_of_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_IsByRefLike_raw (int,int);
void ves_icall_System_RuntimeTypeHandle_internal_from_name_raw (int,int,int,int,int,int);
int ves_icall_System_String_FastAllocateString_raw (int,int);
int ves_icall_System_Type_internal_from_handle_raw (int,int);
int ves_icall_System_ValueType_InternalGetHashCode_raw (int,int,int);
int ves_icall_System_ValueType_Equals_raw (int,int,int,int);
int ves_icall_System_Threading_Interlocked_CompareExchange_Int (int,int,int);
void ves_icall_System_Threading_Interlocked_CompareExchange_Object (int,int,int,int);
int ves_icall_System_Threading_Interlocked_Decrement_Int (int);
int ves_icall_System_Threading_Interlocked_Increment_Int (int);
int64_t ves_icall_System_Threading_Interlocked_Increment_Long (int);
int ves_icall_System_Threading_Interlocked_Exchange_Int (int,int);
void ves_icall_System_Threading_Interlocked_Exchange_Object (int,int,int);
int64_t ves_icall_System_Threading_Interlocked_CompareExchange_Long (int,int64_t,int64_t);
int64_t ves_icall_System_Threading_Interlocked_Exchange_Long (int,int64_t);
int ves_icall_System_Threading_Interlocked_Add_Int (int,int);
void ves_icall_System_Threading_Monitor_Monitor_Enter_raw (int,int);
void mono_monitor_exit_icall_raw (int,int);
void ves_icall_System_Threading_Monitor_Monitor_pulse_raw (int,int);
void ves_icall_System_Threading_Monitor_Monitor_pulse_all_raw (int,int);
int ves_icall_System_Threading_Monitor_Monitor_wait_raw (int,int,int,int);
void ves_icall_System_Threading_Monitor_Monitor_try_enter_with_atomic_var_raw (int,int,int,int,int);
void ves_icall_System_Threading_Thread_InitInternal_raw (int,int);
int ves_icall_System_Threading_Thread_GetCurrentThread ();
void ves_icall_System_Threading_InternalThread_Thread_free_internal_raw (int,int);
int ves_icall_System_Threading_Thread_GetState_raw (int,int);
void ves_icall_System_Threading_Thread_SetState_raw (int,int,int);
void ves_icall_System_Threading_Thread_ClrState_raw (int,int,int);
void ves_icall_System_Threading_Thread_SetName_icall_raw (int,int,int,int);
int ves_icall_System_Threading_Thread_YieldInternal ();
void ves_icall_System_Threading_Thread_SetPriority_raw (int,int,int);
void ves_icall_System_Runtime_Loader_AssemblyLoadContext_PrepareForAssemblyLoadContextRelease_raw (int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_GetLoadContextForAssembly_raw (int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFile_raw (int,int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalInitializeNativeALC_raw (int,int,int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFromStream_raw (int,int,int,int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalGetLoadedAssemblies_raw (int);
int ves_icall_System_GCHandle_InternalAlloc_raw (int,int,int);
void ves_icall_System_GCHandle_InternalFree_raw (int,int);
int ves_icall_System_GCHandle_InternalGet_raw (int,int);
void ves_icall_System_GCHandle_InternalSet_raw (int,int,int);
int ves_icall_System_Runtime_InteropServices_Marshal_GetLastPInvokeError ();
void ves_icall_System_Runtime_InteropServices_Marshal_SetLastPInvokeError (int);
void ves_icall_System_Runtime_InteropServices_Marshal_StructureToPtr_raw (int,int,int,int);
int ves_icall_System_Runtime_InteropServices_NativeLibrary_LoadByName_raw (int,int,int,int,int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InternalGetHashCode_raw (int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetUninitializedObjectInternal_raw (int,int);
void ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InitializeArray_raw (int,int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetSpanDataFrom_raw (int,int,int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_SufficientExecutionStack ();
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InternalBox_raw (int,int,int);
int ves_icall_System_Reflection_Assembly_GetEntryAssembly_raw (int);
int ves_icall_System_Reflection_Assembly_InternalLoad_raw (int,int,int,int);
int ves_icall_System_Reflection_Assembly_InternalGetType_raw (int,int,int,int,int,int);
int ves_icall_System_Reflection_AssemblyName_GetNativeName (int);
int ves_icall_MonoCustomAttrs_GetCustomAttributesInternal_raw (int,int,int,int);
int ves_icall_MonoCustomAttrs_GetCustomAttributesDataInternal_raw (int,int);
int ves_icall_MonoCustomAttrs_IsDefinedInternal_raw (int,int,int);
int ves_icall_System_Reflection_FieldInfo_internal_from_handle_type_raw (int,int,int);
int ves_icall_System_Reflection_FieldInfo_get_marshal_info_raw (int,int);
int ves_icall_System_Reflection_LoaderAllocatorScout_Destroy (int);
void ves_icall_System_Reflection_RuntimeAssembly_GetManifestResourceNames_raw (int,int,int);
void ves_icall_System_Reflection_RuntimeAssembly_GetExportedTypes_raw (int,int,int);
void ves_icall_System_Reflection_RuntimeAssembly_GetInfo_raw (int,int,int,int);
int ves_icall_System_Reflection_RuntimeAssembly_GetManifestResourceInternal_raw (int,int,int,int,int);
void ves_icall_System_Reflection_Assembly_GetManifestModuleInternal_raw (int,int,int);
void ves_icall_System_Reflection_RuntimeCustomAttributeData_ResolveArgumentsInternal_raw (int,int,int,int,int,int,int);
void ves_icall_RuntimeEventInfo_get_event_info_raw (int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_System_Reflection_EventInfo_internal_from_handle_type_raw (int,int,int);
int ves_icall_RuntimeFieldInfo_ResolveType_raw (int,int);
int ves_icall_RuntimeFieldInfo_GetParentType_raw (int,int,int);
int ves_icall_RuntimeFieldInfo_GetFieldOffset_raw (int,int);
int ves_icall_RuntimeFieldInfo_GetValueInternal_raw (int,int,int);
int ves_icall_RuntimeFieldInfo_GetRawConstantValue_raw (int,int);
int ves_icall_reflection_get_token_raw (int,int);
void ves_icall_get_method_info_raw (int,int,int);
int ves_icall_get_method_attributes (int);
int ves_icall_System_Reflection_MonoMethodInfo_get_parameter_info_raw (int,int,int);
int ves_icall_System_MonoMethodInfo_get_retval_marshal_raw (int,int);
int ves_icall_System_Reflection_RuntimeMethodInfo_GetMethodFromHandleInternalType_native_raw (int,int,int,int);
int ves_icall_RuntimeMethodInfo_get_name_raw (int,int);
int ves_icall_RuntimeMethodInfo_get_base_method_raw (int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_InternalInvoke_raw (int,int,int,int,int);
void ves_icall_RuntimeMethodInfo_GetPInvoke_raw (int,int,int,int,int);
int ves_icall_RuntimeMethodInfo_MakeGenericMethod_impl_raw (int,int,int);
int ves_icall_RuntimeMethodInfo_GetGenericArguments_raw (int,int);
int ves_icall_RuntimeMethodInfo_GetGenericMethodDefinition_raw (int,int);
int ves_icall_RuntimeMethodInfo_get_IsGenericMethodDefinition_raw (int,int);
int ves_icall_RuntimeMethodInfo_get_IsGenericMethod_raw (int,int);
void ves_icall_InvokeClassConstructor_raw (int,int);
int ves_icall_InternalInvoke_raw (int,int,int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_System_Reflection_RuntimeModule_ResolveMethodToken_raw (int,int,int,int,int,int);
void ves_icall_RuntimePropertyInfo_get_property_info_raw (int,int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_System_Reflection_RuntimePropertyInfo_internal_from_handle_type_raw (int,int,int);
void ves_icall_DynamicMethod_create_dynamic_method_raw (int,int,int,int,int);
void ves_icall_AssemblyBuilder_basic_init_raw (int,int);
void ves_icall_AssemblyBuilder_UpdateNativeCustomAttributes_raw (int,int);
void ves_icall_ModuleBuilder_basic_init_raw (int,int);
void ves_icall_ModuleBuilder_set_wrappers_type_raw (int,int,int);
int ves_icall_ModuleBuilder_getToken_raw (int,int,int,int);
void ves_icall_ModuleBuilder_RegisterToken_raw (int,int,int,int);
int ves_icall_TypeBuilder_create_runtime_class_raw (int,int);
int ves_icall_System_IO_Stream_HasOverriddenBeginEndRead_raw (int,int);
int ves_icall_System_IO_Stream_HasOverriddenBeginEndWrite_raw (int,int);
int ves_icall_System_Diagnostics_Debugger_IsAttached_internal ();
int ves_icall_System_Diagnostics_StackFrame_GetFrameInfo (int,int,int,int,int,int,int,int);
void ves_icall_System_Diagnostics_StackTrace_GetTrace (int,int,int,int);
int ves_icall_Mono_RuntimeClassHandle_GetTypeFromClass (int);
void ves_icall_Mono_RuntimeGPtrArrayHandle_GPtrArrayFree (int);
int ves_icall_Mono_SafeStringMarshal_StringToUtf8 (int);
void ves_icall_Mono_SafeStringMarshal_GFree (int);
static void *corlib_icall_funcs [] = {
// token 184,
ves_icall_System_Array_InternalCreate,
// token 193,
ves_icall_System_Array_GetCorElementTypeOfElementTypeInternal,
// token 194,
ves_icall_System_Array_CanChangePrimitive,
// token 195,
ves_icall_System_Array_FastCopy,
// token 196,
ves_icall_System_Array_GetLengthInternal_raw,
// token 197,
ves_icall_System_Array_GetLowerBoundInternal_raw,
// token 198,
ves_icall_System_Array_GetGenericValue_icall,
// token 199,
ves_icall_System_Array_GetValueImpl_raw,
// token 201,
ves_icall_System_Array_SetValueImpl_raw,
// token 202,
ves_icall_System_Array_SetValueRelaxedImpl_raw,
// token 258,
ves_icall_System_Runtime_RuntimeImports_ZeroMemory,
// token 259,
ves_icall_System_Runtime_RuntimeImports_Memmove,
// token 260,
ves_icall_System_Buffer_BulkMoveWithWriteBarrier,
// token 283,
ves_icall_System_Delegate_AllocDelegateLike_internal_raw,
// token 284,
ves_icall_System_Delegate_CreateDelegate_internal_raw,
// token 285,
ves_icall_System_Delegate_GetVirtualMethod_internal_raw,
// token 300,
ves_icall_System_Enum_GetEnumValuesAndNames_raw,
// token 301,
ves_icall_System_Enum_InternalGetCorElementType,
// token 302,
ves_icall_System_Enum_InternalGetUnderlyingType_raw,
// token 388,
ves_icall_System_Environment_get_ProcessorCount,
// token 389,
ves_icall_System_Environment_get_TickCount,
// token 390,
ves_icall_System_Environment_get_TickCount64,
// token 393,
ves_icall_System_Environment_FailFast_raw,
// token 423,
ves_icall_System_GC_register_ephemeron_array_raw,
// token 424,
ves_icall_System_GC_get_ephemeron_tombstone_raw,
// token 426,
ves_icall_System_GC_SuppressFinalize_raw,
// token 428,
ves_icall_System_GC_ReRegisterForFinalize_raw,
// token 430,
ves_icall_System_GC_GetGCMemoryInfo,
// token 432,
ves_icall_System_GC_AllocPinnedArray_raw,
// token 437,
ves_icall_System_Object_MemberwiseClone_raw,
// token 445,
ves_icall_System_Math_Ceiling,
// token 446,
ves_icall_System_Math_Cos,
// token 447,
ves_icall_System_Math_Floor,
// token 448,
ves_icall_System_Math_Pow,
// token 449,
ves_icall_System_Math_Sin,
// token 450,
ves_icall_System_Math_Sqrt,
// token 451,
ves_icall_System_Math_Tan,
// token 452,
ves_icall_System_Math_ModF,
// token 526,
ves_icall_RuntimeMethodHandle_GetFunctionPointer_raw,
// token 533,
ves_icall_RuntimeMethodHandle_ReboxFromNullable_raw,
// token 534,
ves_icall_RuntimeMethodHandle_ReboxToNullable_raw,
// token 602,
ves_icall_RuntimeType_GetCorrespondingInflatedMethod_raw,
// token 608,
ves_icall_RuntimeType_make_array_type_raw,
// token 611,
ves_icall_RuntimeType_make_byref_type_raw,
// token 613,
ves_icall_RuntimeType_make_pointer_type_raw,
// token 618,
ves_icall_RuntimeType_MakeGenericType_raw,
// token 619,
ves_icall_RuntimeType_GetMethodsByName_native_raw,
// token 621,
ves_icall_RuntimeType_GetPropertiesByName_native_raw,
// token 622,
ves_icall_RuntimeType_GetConstructors_native_raw,
// token 626,
ves_icall_System_RuntimeType_CreateInstanceInternal_raw,
// token 627,
ves_icall_RuntimeType_GetDeclaringMethod_raw,
// token 629,
ves_icall_System_RuntimeType_getFullName_raw,
// token 630,
ves_icall_RuntimeType_GetGenericArgumentsInternal_raw,
// token 633,
ves_icall_RuntimeType_GetGenericParameterPosition,
// token 634,
ves_icall_RuntimeType_GetEvents_native_raw,
// token 635,
ves_icall_RuntimeType_GetFields_native_raw,
// token 638,
ves_icall_RuntimeType_GetInterfaces_raw,
// token 640,
ves_icall_RuntimeType_GetNestedTypes_native_raw,
// token 643,
ves_icall_RuntimeType_GetDeclaringType_raw,
// token 645,
ves_icall_RuntimeType_GetName_raw,
// token 647,
ves_icall_RuntimeType_GetNamespace_raw,
// token 656,
ves_icall_RuntimeType_FunctionPointerReturnAndParameterTypes_raw,
// token 713,
ves_icall_RuntimeTypeHandle_GetAttributes,
// token 715,
ves_icall_RuntimeTypeHandle_GetMetadataToken_raw,
// token 717,
ves_icall_RuntimeTypeHandle_GetGenericTypeDefinition_impl_raw,
// token 727,
ves_icall_RuntimeTypeHandle_GetCorElementType,
// token 728,
ves_icall_RuntimeTypeHandle_HasInstantiation,
// token 729,
ves_icall_RuntimeTypeHandle_IsInstanceOfType_raw,
// token 731,
ves_icall_RuntimeTypeHandle_HasReferences_raw,
// token 736,
ves_icall_RuntimeTypeHandle_GetArrayRank_raw,
// token 737,
ves_icall_RuntimeTypeHandle_GetAssembly_raw,
// token 738,
ves_icall_RuntimeTypeHandle_GetElementType_raw,
// token 739,
ves_icall_RuntimeTypeHandle_GetModule_raw,
// token 740,
ves_icall_RuntimeTypeHandle_GetBaseType_raw,
// token 748,
ves_icall_RuntimeTypeHandle_type_is_assignable_from_raw,
// token 749,
ves_icall_RuntimeTypeHandle_IsGenericTypeDefinition,
// token 750,
ves_icall_RuntimeTypeHandle_GetGenericParameterInfo_raw,
// token 754,
ves_icall_RuntimeTypeHandle_is_subclass_of_raw,
// token 755,
ves_icall_RuntimeTypeHandle_IsByRefLike_raw,
// token 757,
ves_icall_System_RuntimeTypeHandle_internal_from_name_raw,
// token 759,
ves_icall_System_String_FastAllocateString_raw,
// token 943,
ves_icall_System_Type_internal_from_handle_raw,
// token 1096,
ves_icall_System_ValueType_InternalGetHashCode_raw,
// token 1097,
ves_icall_System_ValueType_Equals_raw,
// token 6506,
ves_icall_System_Threading_Interlocked_CompareExchange_Int,
// token 6507,
ves_icall_System_Threading_Interlocked_CompareExchange_Object,
// token 6509,
ves_icall_System_Threading_Interlocked_Decrement_Int,
// token 6510,
ves_icall_System_Threading_Interlocked_Increment_Int,
// token 6511,
ves_icall_System_Threading_Interlocked_Increment_Long,
// token 6512,
ves_icall_System_Threading_Interlocked_Exchange_Int,
// token 6513,
ves_icall_System_Threading_Interlocked_Exchange_Object,
// token 6515,
ves_icall_System_Threading_Interlocked_CompareExchange_Long,
// token 6516,
ves_icall_System_Threading_Interlocked_Exchange_Long,
// token 6517,
ves_icall_System_Threading_Interlocked_Add_Int,
// token 6532,
ves_icall_System_Threading_Monitor_Monitor_Enter_raw,
// token 6534,
mono_monitor_exit_icall_raw,
// token 6539,
ves_icall_System_Threading_Monitor_Monitor_pulse_raw,
// token 6541,
ves_icall_System_Threading_Monitor_Monitor_pulse_all_raw,
// token 6543,
ves_icall_System_Threading_Monitor_Monitor_wait_raw,
// token 6545,
ves_icall_System_Threading_Monitor_Monitor_try_enter_with_atomic_var_raw,
// token 6596,
ves_icall_System_Threading_Thread_InitInternal_raw,
// token 6597,
ves_icall_System_Threading_Thread_GetCurrentThread,
// token 6599,
ves_icall_System_Threading_InternalThread_Thread_free_internal_raw,
// token 6600,
ves_icall_System_Threading_Thread_GetState_raw,
// token 6601,
ves_icall_System_Threading_Thread_SetState_raw,
// token 6602,
ves_icall_System_Threading_Thread_ClrState_raw,
// token 6603,
ves_icall_System_Threading_Thread_SetName_icall_raw,
// token 6605,
ves_icall_System_Threading_Thread_YieldInternal,
// token 6607,
ves_icall_System_Threading_Thread_SetPriority_raw,
// token 7542,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_PrepareForAssemblyLoadContextRelease_raw,
// token 7546,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_GetLoadContextForAssembly_raw,
// token 7548,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFile_raw,
// token 7549,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalInitializeNativeALC_raw,
// token 7550,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFromStream_raw,
// token 7551,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalGetLoadedAssemblies_raw,
// token 7929,
ves_icall_System_GCHandle_InternalAlloc_raw,
// token 7930,
ves_icall_System_GCHandle_InternalFree_raw,
// token 7931,
ves_icall_System_GCHandle_InternalGet_raw,
// token 7932,
ves_icall_System_GCHandle_InternalSet_raw,
// token 7948,
ves_icall_System_Runtime_InteropServices_Marshal_GetLastPInvokeError,
// token 7949,
ves_icall_System_Runtime_InteropServices_Marshal_SetLastPInvokeError,
// token 7950,
ves_icall_System_Runtime_InteropServices_Marshal_StructureToPtr_raw,
// token 7993,
ves_icall_System_Runtime_InteropServices_NativeLibrary_LoadByName_raw,
// token 8057,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InternalGetHashCode_raw,
// token 8067,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetUninitializedObjectInternal_raw,
// token 8068,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InitializeArray_raw,
// token 8069,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetSpanDataFrom_raw,
// token 8070,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_SufficientExecutionStack,
// token 8071,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InternalBox_raw,
// token 8333,
ves_icall_System_Reflection_Assembly_GetEntryAssembly_raw,
// token 8337,
ves_icall_System_Reflection_Assembly_InternalLoad_raw,
// token 8338,
ves_icall_System_Reflection_Assembly_InternalGetType_raw,
// token 8365,
ves_icall_System_Reflection_AssemblyName_GetNativeName,
// token 8399,
ves_icall_MonoCustomAttrs_GetCustomAttributesInternal_raw,
// token 8406,
ves_icall_MonoCustomAttrs_GetCustomAttributesDataInternal_raw,
// token 8413,
ves_icall_MonoCustomAttrs_IsDefinedInternal_raw,
// token 8424,
ves_icall_System_Reflection_FieldInfo_internal_from_handle_type_raw,
// token 8427,
ves_icall_System_Reflection_FieldInfo_get_marshal_info_raw,
// token 8448,
ves_icall_System_Reflection_LoaderAllocatorScout_Destroy,
// token 8523,
ves_icall_System_Reflection_RuntimeAssembly_GetManifestResourceNames_raw,
// token 8525,
ves_icall_System_Reflection_RuntimeAssembly_GetExportedTypes_raw,
// token 8534,
ves_icall_System_Reflection_RuntimeAssembly_GetInfo_raw,
// token 8536,
ves_icall_System_Reflection_RuntimeAssembly_GetManifestResourceInternal_raw,
// token 8537,
ves_icall_System_Reflection_Assembly_GetManifestModuleInternal_raw,
// token 8544,
ves_icall_System_Reflection_RuntimeCustomAttributeData_ResolveArgumentsInternal_raw,
// token 8559,
ves_icall_RuntimeEventInfo_get_event_info_raw,
// token 8579,
ves_icall_reflection_get_token_raw,
// token 8580,
ves_icall_System_Reflection_EventInfo_internal_from_handle_type_raw,
// token 8588,
ves_icall_RuntimeFieldInfo_ResolveType_raw,
// token 8590,
ves_icall_RuntimeFieldInfo_GetParentType_raw,
// token 8597,
ves_icall_RuntimeFieldInfo_GetFieldOffset_raw,
// token 8598,
ves_icall_RuntimeFieldInfo_GetValueInternal_raw,
// token 8601,
ves_icall_RuntimeFieldInfo_GetRawConstantValue_raw,
// token 8606,
ves_icall_reflection_get_token_raw,
// token 8612,
ves_icall_get_method_info_raw,
// token 8613,
ves_icall_get_method_attributes,
// token 8620,
ves_icall_System_Reflection_MonoMethodInfo_get_parameter_info_raw,
// token 8622,
ves_icall_System_MonoMethodInfo_get_retval_marshal_raw,
// token 8634,
ves_icall_System_Reflection_RuntimeMethodInfo_GetMethodFromHandleInternalType_native_raw,
// token 8637,
ves_icall_RuntimeMethodInfo_get_name_raw,
// token 8638,
ves_icall_RuntimeMethodInfo_get_base_method_raw,
// token 8639,
ves_icall_reflection_get_token_raw,
// token 8650,
ves_icall_InternalInvoke_raw,
// token 8660,
ves_icall_RuntimeMethodInfo_GetPInvoke_raw,
// token 8666,
ves_icall_RuntimeMethodInfo_MakeGenericMethod_impl_raw,
// token 8667,
ves_icall_RuntimeMethodInfo_GetGenericArguments_raw,
// token 8668,
ves_icall_RuntimeMethodInfo_GetGenericMethodDefinition_raw,
// token 8670,
ves_icall_RuntimeMethodInfo_get_IsGenericMethodDefinition_raw,
// token 8671,
ves_icall_RuntimeMethodInfo_get_IsGenericMethod_raw,
// token 8688,
ves_icall_InvokeClassConstructor_raw,
// token 8690,
ves_icall_InternalInvoke_raw,
// token 8705,
ves_icall_reflection_get_token_raw,
// token 8723,
ves_icall_System_Reflection_RuntimeModule_ResolveMethodToken_raw,
// token 8750,
ves_icall_RuntimePropertyInfo_get_property_info_raw,
// token 8774,
ves_icall_reflection_get_token_raw,
// token 8775,
ves_icall_System_Reflection_RuntimePropertyInfo_internal_from_handle_type_raw,
// token 9239,
ves_icall_DynamicMethod_create_dynamic_method_raw,
// token 9318,
ves_icall_AssemblyBuilder_basic_init_raw,
// token 9319,
ves_icall_AssemblyBuilder_UpdateNativeCustomAttributes_raw,
// token 9471,
ves_icall_ModuleBuilder_basic_init_raw,
// token 9472,
ves_icall_ModuleBuilder_set_wrappers_type_raw,
// token 9476,
ves_icall_ModuleBuilder_getToken_raw,
// token 9479,
ves_icall_ModuleBuilder_RegisterToken_raw,
// token 9524,
ves_icall_TypeBuilder_create_runtime_class_raw,
// token 9894,
ves_icall_System_IO_Stream_HasOverriddenBeginEndRead_raw,
// token 9895,
ves_icall_System_IO_Stream_HasOverriddenBeginEndWrite_raw,
// token 10086,
ves_icall_System_Diagnostics_Debugger_IsAttached_internal,
// token 10091,
ves_icall_System_Diagnostics_StackFrame_GetFrameInfo,
// token 10101,
ves_icall_System_Diagnostics_StackTrace_GetTrace,
// token 10713,
ves_icall_Mono_RuntimeClassHandle_GetTypeFromClass,
// token 10734,
ves_icall_Mono_RuntimeGPtrArrayHandle_GPtrArrayFree,
// token 10736,
ves_icall_Mono_SafeStringMarshal_StringToUtf8,
// token 10738,
ves_icall_Mono_SafeStringMarshal_GFree,
};
static uint8_t corlib_icall_flags [] = {
0,
0,
0,
0,
4,
4,
0,
4,
4,
4,
0,
0,
0,
4,
4,
4,
4,
0,
4,
0,
0,
0,
4,
4,
4,
4,
4,
0,
4,
4,
0,
0,
0,
0,
0,
0,
0,
0,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
0,
0,
4,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
0,
0,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
0,
0,
0,
0,
0,
0,
0,
};
