<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\LabelingTag;

class LabelingTagController extends Controller
{
    public function read($type, $idOrLevel)
    {
        if ($type == 'list')
            $data = LabelingTag::where('identificador', '=', $idOrLevel)->orderBy('id', 'DESC')->get();
        else if ($type == 'one')
            $data = LabelingTag::where('id', '=', $idOrLevel)->first();

        return response()->json(['success' => true, 'data' => $data], 200);
    }
}
