function OnStart()
{
    dlg = app.CreateDialog( "Custom Dialog" );

    layDlg = app.CreateLayout( "linear", "VCenter,FillXY" );
    layDlg.SetSize( 0.7, 0.3 );
    dlg.AddLayout( layDlg );

    chk = app.CreateCheckBox( "Check Box" );
    chk.SetMargins( 0, 0.02, 0, 0.02 );
    layDlg.AddChild( chk );

    btnDlg = app.CreateButton( "Close Dialog", 0.6, 0.1 );
    btnDlg.SetOnTouch( btnDlg_OnTouch );
    layDlg.AddChild( btnDlg );

    dlg.Show();
}

function btnDlg_OnTouch()
{
    dlg.Dismiss();
}