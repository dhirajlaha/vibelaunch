using Vibelaunch.Abp.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Vibelaunch.Abp.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class AbpController : AbpControllerBase
{
    protected AbpController()
    {
        LocalizationResource = typeof(AbpResource);
    }
}
