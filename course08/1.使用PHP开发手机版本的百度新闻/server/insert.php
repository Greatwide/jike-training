<?php
    header("content-type:application/json;charset=utf-8");
    require_once('db.php');
    if($link){
        //插入一条记录
        $newstitle=$_POST['newstitle'];
        $newstype=$_POST['newstype'];
        $newstime=$_POST['newstime'];
        $newssrc=$_POST['newssrc'];
        $newsimg=$_POST['newsimg'];

       // $sql="INSERT INTO 'news'('newstitle','newstype','newsimg','newstime','newssrc') VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
       // $sql="INSERT INTO 'news'('newstitle','newstype','newsimg','newstime','newssrc') VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
        $sql="INSERT INTO news(newstitle,newstype,newsimg,newstime,newssrc)VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
        mysqli_query($link,"SET NAMES utf8");
        $result=mysqli_query($link,$sql);
        echo json_encode(array('success'=>'ok'));
    }

?>