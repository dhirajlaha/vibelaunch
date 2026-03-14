using Volo.Abp.Modularity;

namespace Vibelaunch.Abp;

[DependsOn(
    typeof(AbpApplicationModule),
    typeof(AbpDomainTestModule)
)]
public class AbpApplicationTestModule : AbpModule
{

}
