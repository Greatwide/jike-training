
<?php
    //根据id查询数据库记录
    header("content-type:application/json;charset=utf-8");
    require_once('db.php');
    if($link){
        $newsid=$_GET['newsid'];

        mysqli_query($link,"SET NAMES utf8");
        $sql="SELECT * FROM news where id={$newsid}";
        mysqli_query($link,"SET NAMES utf8");
        $result=mysqli_query($link,$sql);
        $senddata=array();
        while($row=mysqli_fetch_assoc($result)){
               array_push($senddata,array(
               'id'=>$row['id'],
               'newstype'=>$row['newstype'],
               'newstitle'=>$row['newstitle'],
               'newsimg'=>$row['newsimg'],
               'newstime'=>$row['newstime'],
               'newssrc'=>$row['newssrc'],
               ));
        }
        echo json_encode($senddata);

    }
   // mysqli_close();
?>