function GCPBa()
{
    return md5(BaseII(window.location.href.split("/")[2]+"__BreakAuth__"));
}

function GCPBb()
{
    var apik_frame1=Number(Spliter(5));
    var apik_frame2=Number(Spliter(apik_frame1));
    var apik_framex=Number(Spliter(apik_frame2));
    var apik_frame3=Spliter(apik_framex);
    return GetDix(BaseII(window.location.href.split("/")[2]),BaseII("IdTrustedRunner"),apik_frame3);
}

function UseBreak()
{
    DoBreak=GCPBa();
    window.sessionStorage["__break__"]=GCPBb();
}

rPluginBefore(UseBreak);