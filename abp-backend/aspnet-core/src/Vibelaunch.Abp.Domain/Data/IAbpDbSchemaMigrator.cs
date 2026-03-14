using System.Threading.Tasks;

namespace Vibelaunch.Abp.Data;

public interface IAbpDbSchemaMigrator
{
    Task MigrateAsync();
}
