using Xunit;

namespace Vibelaunch.Abp.EntityFrameworkCore;

[CollectionDefinition(AbpTestConsts.CollectionDefinitionName)]
public class AbpEntityFrameworkCoreCollection : ICollectionFixture<AbpEntityFrameworkCoreFixture>
{

}
