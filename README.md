# WebGPUConsts

A TypeScript `const enum` collection represnts those constant values in WebGPU to help code writing.

**How to use**

Just copy it into your project and done.

## Examples

usage of `FeatureName`

    const requiredFeatures = [];
    if (adapter.features.has(FeatureName.TextureCompressionBC))
        requiredFeatures.push(FeatureName.TextureCompressionBC);

    this._device = await adapter.requestDevice({
        requiredFeatures
    });

usage of `ShaderStage` / `BufferBindingType`

    const layout = this._device.createBindGroupLayout({
        label: "test",
        entries: [{
            binding: 0,
            visibility: ShaderStage.Vertex | ShaderStage.Fragment | ShaderStage.Compute,
            buffer: { type: BufferBindingType.ReadonlyStorage }
        }
    });

usage of `BufferUsage`

    const testBuff = this._device.createBuffer({
        size: 144,
        usage: BufferUsage.CopyDst | BufferUsage.Uniform
    });

usage of `ErrorFilter`

    this._device.pushErrorScope(ErrorFilter.Validation);

Etc so on.

**Welcome to PR if you find any errors in it, thanks.**

## License
MIT License. See [LICENSE.txt](https://github.com/jcyuan/webgpuconsts/LICENSE.txt) for more information.
