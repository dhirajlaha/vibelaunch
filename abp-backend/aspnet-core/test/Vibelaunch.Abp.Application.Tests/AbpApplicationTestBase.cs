using Volo.Abp.Modularity;

namespace Vibelaunch.Abp;

public abstract class AbpApplicationTestBase<TStartupModule> : AbpTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
