using Volo.Abp.Modularity;

namespace Vibelaunch.Abp;

[DependsOn(
    typeof(AbpDomainModule),
    typeof(AbpTestBaseModule)
)]
public class AbpDomainTestModule : AbpModule
{

}
