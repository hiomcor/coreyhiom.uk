namespace CoreyHiom;

public static class SiteVisibility
{
#if SHOW_PROJECTS
    public static bool ShowProjects => true;
#else
    public static bool ShowProjects => false;
#endif
#if SHOW_CV_DOWNLOAD
    public static bool ShowCvDownload => true;
#else
    public static bool ShowCvDownload => false;
#endif
#if SHOW_CV
    public static bool ShowCv => true;
#else
    public static bool ShowCv => false;
#endif
#if SHOW_SELECTED_WORK
    public static bool ShowSelectedWork => true;
#else
    public static bool ShowSelectedWork => false;
#endif
}
