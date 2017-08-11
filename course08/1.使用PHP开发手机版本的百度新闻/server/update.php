<?php
    header("content-type:application/json;charset=utf-8");
    require_once('db.php');
    if($link){
        //ÐÞ¸Ä
        $newstitle=$_POST['newstitle'];
        $newstype=$_POST['newstype'];
        $newstime=$_POST['newstime'];
        $newssrc=$_POST['newssrc'];
        $newsimg=$_POST['newsimg'];
        $newsid=$_POST['id'];

       // $sql="INSERT INTO 'news'('newstitle','newstype','newsimg','newstime','newssrc') VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
       // $sql="INSERT INTO 'news'('newstitle','newstype','newsimg','newstime','newssrc') VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
        $sql="UPDATE news SET newstitle='{$newstitle}',newstype='{$newstype}',newsimg='{$newsimg}',newstime='{$newssrc}' WHERE id='{$newsid}'";
        mysqli_query($link,"SET NAMES utf8");
        $result=mysqli_query($link,$sql);
        echo json_encode(array('success'=>'ok'));
    }

?>