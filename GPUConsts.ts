export const enum CanvasCompositingAlphaMode {
  Opaque = "opaque",
  Premultiplied = "premultiplied"
}

export const enum PowerPreference {
  LowPower = "low-power",
  HighPerformance = "high-performance"
}

export const DeviceLostReason = "destroyed";

export const enum ErrorFilter {
  OutOfMemory = "out-of-memory",
  Validation = "validation"
}

export const enum CompilationMessageType {
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

export const enum FeatureName {
  DepthClamping = "depth-clamping",
  PipelineStatisticsQuery = "pipeline-statistics-query",
  TimestampQuery = "timestamp-query",
  TextureCompressionBC = 'texture-compression-bc',
  Depth24UnormStencil8 = 'depth24unorm-stencil8',
  Depth32FloatStencil8 = 'depth32float-stencil8',
}

export const enum QueryType {
  Occlusion = 'occlusion',
  PipelineStatistics = "pipeline-statistics",
  Timestamp = "timestamp"
}

export const enum PipelineStatisticName {
  VertexShaderInvocations = "vertex-shader-invocations",
  ClipperInvocations = "clipper-invocations",
  ClipperPrimitivesOut = "clipper-primitives-out",
  FragmentShaderInvocations = "fragment-shader-invocations",
  ComputeShaderInvocations = "compute-shader-invocations"
}

export const enum AddressMode {
  ClampToEdge = 'clamp-to-edge',
  Repeat = 'repeat',
  MirrorRepeat = 'mirror-repeat',
}

export const enum SamplerBindingType {
  Filtering = "filtering",
  NonFiltering = "non-filtering",
  Comparison = "comparison"
}

export const enum BufferBindingType {
  Uniform = 'uniform',
  Storage = 'storage',
  ReadonlyStorage = 'read-only-storage'
}

export const enum BlendFactor {
  Zero = 'zero',
  One = 'one',
  Src = 'src',
  OneMinusSrc = 'one-minus-src',
  SrcAlpha = 'src-alpha',
  OneMinusSrcAlpha = 'one-minus-src-alpha',
  Dst = 'dst',
  OneMinusDst = 'one-minus-dst',
  DstAlpha = 'dst-alpha',
  OneMinusDstAlpha = 'one-minus-dst-alpha',
  SrcAlphaSaturated = 'src-alpha-saturated',
  Constant = "constant",
  OneMinusConstant = "one-minus-constant"
}

export const enum BlendOperation {
  Add = 'add',
  Subtract = 'subtract',
  ReverseSubtract = 'reverse-subtract',
  Min = 'min',
  Max = 'max'
}

export const enum CompareFunction {
  Never = 'never',
  Less = 'less',
  Equal = 'equal',
  LessEqual = 'less-equal',
  Greater = 'greater',
  NotEqual = 'not-equal',
  GreaterEqual = 'greater-equal',
  Always = 'always'
}

export const enum CullMode {
  None = 'none',
  Front = 'front',
  Back = 'back'
}

export const enum FilterMode {
  Nearest = 'nearest',
  Linear = 'linear'
}

export const enum FrontFace {
  CCW = 'ccw',
  CW = 'cw',
}

export const enum StencilOperation {
  Keep = 'keep',
  Zero = 'zero',
  Replace = 'replace',
  Invert = 'invert',
  IncrementClamp = 'increment-clamp',
  DecrementClamp = 'decrement-clamp',
  IncrementWrap = 'increment-wrap',
  DecrementWrap = 'decrement-wrap'
}

export const LoadOp = "load";

export const PredefinedColorSpace = "srgb";

export const enum StoreOp {
  Store = 'store',
  Discard = 'discard'
}

export const enum StorageTextureAccess {
  ReadOnly = "read-only",
  WriteOnly = "write-only"
}

export const enum TextureAspect {
  All = 'all',
  StencilOnly = 'stencil-only',
  DepthOnly = 'depth-only'
}

export const enum TextureDimension {
  D1 = '1d',
  D2 = '2d',
  D3 = '3d'
}

export const enum TextureFormat {
  R8Unorm = "r8unorm",
  R8Snorm = "r8snorm",
  R8Uint = "r8uint",
  R8Sint = "r8sint",
  R16Uint = "r16uint",
  R16Sint = "r16sint",
  R16Float = "r16float",
  Rg8Unorm = "rg8unorm",
  Rg8Snorm = "rg8snorm",
  Rg8Uint = "rg8uint",
  Rg8Sint = "rg8sint",
  R32Uint = "r32uint",
  R32Sint = "r32sint",
  R32Float = "r32float",
  Rg16Uint = "rg16uint",
  Rg16Sint = "rg16sint",
  Rg16Float = "rg16float",
  Rgba8Unorm = "rgba8unorm",
  Rgba8UnormSrgb = "rgba8unorm-srgb",
  Rgba8Snorm = "rgba8snorm",
  Rgba8Uint = "rgba8uint",
  Rgba8Sint = "rgba8sint",
  Bgra8Unorm = "bgra8unorm",
  Bgra8UnormSrgb = "bgra8unorm-srgb",
  Rgb9e5uFloat = "rgb9e5ufloat",
  Rgb10a2Unorm = "rgb10a2unorm",
  Rg11b10uFloat = "rg11b10ufloat",
  Rg32Uint = "rg32uint",
  Rg32Sint = "rg32sint",
  Rg32Float = "rg32float",
  Rgba16Uint = "rgba16uint",
  Rgba16Sint = "rgba16sint",
  Rgba16Float = "rgba16float",
  Rgba32Uint = "rgba32uint",
  Rgba32Sint = "rgba32sint",
  Rgba32Float = "rgba32float",
  Stencil8 = "stencil8",
  Depth16Unorm = "depth16unorm",
  Depth24Plus = "depth24plus",
  Depth24PlusStencil8 = "depth24plus-stencil8",
  Depth32Float = "depth32float",
  Bc1RgbaUnorm = "bc1-rgba-unorm",
  Bc1RgbaUnormSrgb = "bc1-rgba-unorm-srgb",
  Bc2RgbaUnorm = "bc2-rgba-unorm",
  Bc2RgbaUnormSrgb = "bc2-rgba-unorm-srgb",
  Bc3RgbaUnorm = "bc3-rgba-unorm",
  Bc3RgbaUnormSrgb = "bc3-rgba-unorm-srgb",
  Bc4RUnorm = "bc4-r-unorm",
  Bc4RSnorm = "bc4-r-snorm",
  Bc5RgUnorm = "bc5-rg-unorm",
  Bc5RgSnorm = "bc5-rg-snorm",
  Bc6hRgbUfloat = "bc6h-rgb-ufloat",
  Bc6hRgbFloat = "bc6h-rgb-float",
  Bc7RgbaUnorm = "bc7-rgba-unorm",
  Bc7RgbaUnormSrgb = "bc7-rgba-unorm-srgb",
  Depth24UnormStencil8 = "depth24unorm-stencil8",
  Depth32FloatStencil8 = "depth32float-stencil8"
}

export const enum TextureViewDimension {
  D1 = '1d',
  D2 = '2d',
  D2Array = '2d-array',
  D3 = '3d',
  Cube = 'cube',
  CubeArray = 'cube-array'
}

export const enum TextureSampleType {
  Float = "float",
  UnfilterableFloat = "unfilterable-float",
  Depth = "depth",
  Sint = "sint",
  Uint = "uint"
}

export const enum VertexFormat {
  Uint8x2 = "uint8x2",
  Uint8x4 = "uint8x4",
  Sint8x2 = "sint8x2",
  Sint8x4 = "sint8x4",
  Unorm8x2 = "unorm8x2",
  Unorm8x4 = "unorm8x4",
  Snorm8x2 = "snorm8x2",
  Snorm8x4 = "snorm8x4",
  Uint16x2 = "uint16x2",
  Uint16x4 = "uint16x4",
  Sint16x2 = "sint16x2",
  Sint16x4 = "sint16x4",
  Unorm16x2 = "unorm16x2",
  Unorm16x4 = "unorm16x4",
  Snorm16x2 = "snorm16x2",
  Snorm16x4 = "snorm16x4",
  Float16x2 = "float16x2",
  Float16x4 = "float16x4",
  Float32 = "float32",
  Float32x2 = "float32x2",
  Float32x3 = "float32x3",
  Float32x4 = "float32x4",
  Uint32 = "uint32",
  Uint32x2 = "uint32x2",
  Uint32x3 = "uint32x3",
  Uint32x4 = "uint32x4",
  Sint32 = "sint32",
  Sint32x2 = "sint32x2",
  Sint32x3 = "sint32x3",
  Sint32x4 = "sint32x4"
}

export const enum VertexStepMode {
  Vertex = "vertex",
  Instance = "instance"
}

export const enum IndexFormat {
  Uint16 = 'uint16',
  Uint32 = 'uint32'
}

export const enum PrimitiveTopology {
  PointList = 'point-list',
  LineList = 'line-list',
  LineStrip = 'line-strip',
  TriangleList = 'triangle-list',
  TriangleStrip = 'triangle-strip'
}

export const enum BufferUsage {
  MapRead = 0x0001,
  MapWrite = 0x0002,
  CopySrc = 0x0004,
  CopyDst = 0x0008,
  Index = 0x0010,
  Vertex = 0x0020,
  Uniform = 0x0040,
  Storage = 0x0080,
  Indirect = 0x0100,
  QueryResolve = 0x0200
}

export const enum TextureUsage {
  CopySrc = 0x01,
  CopyDst = 0x02,
  TextureBinding = 0x04,
  StorageBinding = 0x08,
  RenderAttachment = 0x10
}

export const enum MapMode {
  Read = 0x0001,
  Write = 0x0002
}

export const enum ShaderStage {
  Vertex = 0x1,
  Fragment = 0x2,
  Compute = 0x4
}

export const enum ColorWrite {
  Red = 0x1,
  Green = 0x2,
  Blue = 0x4,
  Alpha = 0x8,
  All = 0xf
}