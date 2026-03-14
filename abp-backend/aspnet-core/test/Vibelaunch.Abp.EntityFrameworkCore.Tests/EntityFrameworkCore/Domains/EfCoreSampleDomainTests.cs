using Vibelaunch.Abp.Samples;
using Xunit;

namespace Vibelaunch.Abp.EntityFrameworkCore.Domains;

[Collection(AbpTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<AbpEntityFrameworkCoreTestModule>
{

}
