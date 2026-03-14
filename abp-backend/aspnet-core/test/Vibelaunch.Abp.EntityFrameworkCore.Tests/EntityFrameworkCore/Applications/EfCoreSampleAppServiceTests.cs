using Vibelaunch.Abp.Samples;
using Xunit;

namespace Vibelaunch.Abp.EntityFrameworkCore.Applications;

[Collection(AbpTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<AbpEntityFrameworkCoreTestModule>
{

}
